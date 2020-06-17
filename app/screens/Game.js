import React, { Component } from "react";
import { ImageBackground, Text, View,ActivityIndicator, ScrollView, Alert, AsyncStorage } from "react-native";
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import colors from './../styles/colors';
import ui from './../styles/ui';
import { Header, Arrow} from "../vectors";
import Icon from './../components/Icon';
import GameData from './../utils/game';
import Button from './../components/Button';
import Info from './../components/Info';
import Tile from './../components/Tile';
import PauseModal from "../components/PauseModal";
import { WELCOME } from './../navigation/constants';
import { SavedGamesContext } from "../utils/SavedGames";
import { calculateSize } from "../styles";


import moment from 'moment';
import 'moment/locale/es';


const background = require('../../assets/background.png')

export default class Game extends Component{

  constructor(props){
    super(props);
    this.intervalId = undefined;
    
    this.state = {
      modalVisible: false
    }
  }

  static contextType = SavedGamesContext;

  componentDidMount(){

     //Cada vez que carga el componente analiza los props.
     //Si se trata del juego completo (partida guardada), lo carga en el estado y lo borra del listado de guardados.
     //Si los parametros son filas, columnas, minas, se crea una instancia del juego y se setea el estado.

    this.delayId = setTimeout(()=>{

      if(this.props?.route?.params?.game){

        const savedGame = this.props.route.params.game

        const filteredGames = this.context.savedGames.filter(g => g.fechaInicio !== savedGame?.fechaInicio )
        this.context.setSavedGames(filteredGames)

        this.setState(()=>({...savedGame}))    
  
      }else{
  
        this.newGame()
        
      }
      clearTimeout(this.delayId)
    },200)

  }

  componentWillUnmount() {

    //Limpieza de timers al desmontar el componente
    if(this.interval){
      clearInterval(this.interval)
    }

  }

  setModalVisible = (value)=>{

    //Funcion para cambiar el estado del modal
    this.setState({modalVisible:value})

  }

  play = ()=>{

    //Funcion para comenzar juego, despues de haberlo pausado
    this.playReloj();
    this.setModalVisible(false)

  }

  pause = ()=>{

    //Funcion para pausar juego, despues de haberlo empezado
    this.pauseReloj()
    this.setModalVisible(true)

  }

  save = ()=>{

    //Funcion que guarda la partida mediante context(memoria) y la api de asyncStorage(device).
    this.setModalVisible(false)  
    this.props.navigation.navigate(WELCOME)

    const newState = [Object.assign({},this.state, {fechaInicio:moment()}), ...this.context.savedGames]
    this.context.setSavedGames(newState)
    AsyncStorage.setItem('minesweeperSaved',JSON.stringify(newState))  

  }


  newGame = ()=>{

    //Funcion para generar una instancia del juego nuevo.
    if(this.interval){
      clearInterval(this.interval)
    }

    const { filas, columnas, minas } = this.props.route.params;
    const newGame = new GameData(filas, columnas, minas);
    this.setState(()=> ({...newGame}))   

  }

  
  

  playReloj = ()=>{
    
    //Funcion para iniciar el timer
    if(this.state.timer.working === false){

      this.interval = setInterval(()=>{

        const copyState = Object.assign({},this.state)
        copyState.timer.value = copyState.timer.value + 1
        copyState.timer.working = true
        this.setState(()=>({...copyState}))
        
      },1000)
    }

  }

  pauseReloj = ()=> {

    //Funcion para pausar el timer
    if(this.state.timer.working){

      const copyState = Object.assign({},this.state)
      copyState.timer.working = false
      this.setState(()=>({...copyState}))

      clearInterval(this.interval) 

    }


  } 

  countActiveTiles = ()=>{

    //Funcion para contabilizar mosaicos que ya se tocaron (sin incluir flags, ni questions)

    let activeTiles = 0;

    for (let y = 0; y < this.state.tablero.length; y++) {

      for (let x = 0; x < this.state.columnas; x++) {

        if(this.state.tablero[y][x].active){
          activeTiles = activeTiles +1;
        }

      }

    }

    return activeTiles;

  }

  onPressTile = (x,y)=>{

    //Funcion que gestiona el tap sobre el tile.

    return ()=>{

      //Solo procedo si no hay ningun flag o question.

      if(!(this.state.tablero[y][x].flag || this.state.tablero[y][x].question )){
        
        const copyState = Object.assign({},this.state)        
  
        if(this.state.tablero[y][x].bomb){
  
          this.pauseReloj();          
  
          copyState.tile = {x,y}
  
          this.state.zonasConBombas.forEach(tile=>{
  
            const info = copyState.tablero[tile.y][tile.x]
  
            if(!(info.flag || info.question )){
              copyState.tablero[tile.y][tile.x].active = true;
            }
  
          })
  
          copyState.result = false;
  
          this.setState(()=>({...copyState}))
          Alert.alert( 'Perdiste :(')
  
  
        }else{
  
          this.playReloj()
  
          if(this.state.tablero[y][x].number === 0){
  
            const zone = this.state.tablero[y][x].zone
  
            this.state.zonasLibres[zone].tiles.forEach(tile =>{
  
              const info = copyState.tablero[tile.y][tile.x]
  
  
  
              if(!(info.flag || info.question )){
                copyState.tablero[tile.y][tile.x].active = true;
              }
  
            })
  
          }
  
          if(this.state.tablero[y][x].number > 0){
            copyState.tablero[y][x].active = true;
          }
  
          const activeTiles = this.countActiveTiles()
          const { columnas:c, filas:f, minas } = this.state;
  
          if(((c*f)-activeTiles) === minas ){
            this.pauseReloj();
            copyState.result = true;
            Alert.alert( 'Ganaste :)')
          }
          
  
          this.setState(()=>({...copyState}))
  
        }
      
  
  
        
      }
      }

  }

  onLongPressTile = (x,y)=>{

    //Funcion que gestiona el hold sobre el tile.

    return ()=>{

      this.playReloj()

      const copyState = Object.assign({},this.state)

      const tile = copyState.tablero[y][x]

      switch (true) {

        //Posibilidad 1: Nunca se hizo onLongPress -> Activar FLAG
        case ((!tile.flag) && (!tile.question)):{

          copyState.tablero[y][x].flag = true

          if(copyState.bombs > 0){
            copyState.bombs = copyState.bombs -1
          }

          this.setState(()=>({...copyState}))

          break;
        }

        //Posibilidad 2: Se hizo onLongPress una sola vez -> Desactivar FLAG , Activar QUESTION
        case ((tile.flag) && (!tile.question)):{

          copyState.tablero[y][x].flag = false
  
          if(copyState.bombs < copyState.minas){
            copyState.bombs = copyState.bombs + 1
          }
  
          copyState.tablero[y][x].question = true
  
          this.setState(()=>({...copyState}))

          break;

        }

        //Posibilidad 3: Se hizo onLongPress dos veces -> Desactivar QUESTION 
        case ((!tile.flag) && (tile.question)):{

          if((!tile.flag) && (tile.question)){

            copyState.tablero[y][x].question = false
            
            this.setState(()=>({...copyState}))
          }

        }         
          
        default:
          break;


      }

    }

  }


  render(){

    const { navigation, route} = this.props;

    const styles ={
      container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
      },
      text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
      },
      icon:(i)=>({
        position:'absolute', 
        top: (i.top>0)? i.top: calculateSize(20), 
        left:calculateSize(20)
      }),
      panel:{
        flex:1,
        width:'100%',
        paddingHorizontal:ui.padding,
        justifyContent:'flex-start',
        alignItems:'center'
      },
      botonera:{
        flex:1, 
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
      },
      tablero:{
        width:'100%',
        height: '70%',
        backgroundColor:colors.white(0.20),
        borderRadius:calculateSize(20),
        marginTop:calculateSize(50),
        justifyContent:'center', 
        alignItems:'center',
        padding:ui.padding
      },
      helpText:{
        fontSize:calculateSize(26),
        color: colors.white(1),
        fontWeight:'700'
      }

    }
    
    return(
      <SafeAreaConsumer>

        {insets =>(

          <View style={styles.container}>

            <ImageBackground source={background} style={styles.image}>

              <Header size='100%' extraStyles={{position:'absolute'}}/>

              <Icon Svg={()=><Arrow color={colors.white(1)}/>} extraStyles={styles.icon(insets)} onPress={()=>navigation.navigate(WELCOME)}/>

              <Info bombs={this.state?.bombs??0} time={this.state?.timer?.value??0} extraStyles={{marginTop:120}}/>


              <View style={styles.panel}>
              
                <View style={styles.tablero}>

                  {
                    (!this.state?.tablero)? (

                      <>
                      <ActivityIndicator size='large' color='white'/>           
                      <Text style={{color:colors.white(1)}}> Creando tablero </Text>
                      </>

                    ):(

                      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                      
                        <View>
                        
                          {
                            this.state.tablero.map((fila,y) =>{

                              return(

                                <View key={`col-${y}`} style={{flexDirection:'row'}}>

                                  {fila.map((tile,x)=> {

                                    return(
                                      <Tile 
                                        key={`fil-${x}`} 
                                        bomb={(this.state.tile) && `${this.state.tile.x},${this.state.tile.y}` === `${x},${y}`} 
                                        result={this.state.result} 
                                        info={tile} 
                                        onPress={this.onPressTile(x,y)} 
                                        onLongPress={this.onLongPressTile(x,y)}
                                      />)
                                  
                                  })}
                                  
                                </View>

                              )

                            })
                          }
                        
                        </View>

                      </ScrollView>
                      
                    )
                  }

                </View>

                <View style={styles.botonera}>
                  {
                    (this.state?.result === undefined)
                    ?(this.state.timer?.working)
                    ?
                    <>
                    <Button fit title='PAUSAR' color='red' onPress={this.pause}/>
                    <Button fit title='REINICIAR' color='green' onPress={this.newGame}/>
                    </>
                    :
                    <Text style={styles.helpText}>¡Mucha suerte!</Text>
                    :
                    <Button title='JUGAR DE NUEVO' color='green' onPress={this.newGame}/>

                  }
                  
                </View>

              </View>
            
            </ImageBackground>
            <PauseModal modalVisible={this.state.modalVisible} setModalVisible={this.modalVisible} play={this.play} save={this.save}/>
            
            
          </View>
        )}

      </SafeAreaConsumer>
      
    )

  }
}


