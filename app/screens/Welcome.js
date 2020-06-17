import React from "react";
import { ImageBackground, View, Dimensions } from "react-native";
import { useSafeArea  } from 'react-native-safe-area-context';
import { Logo, Bomb, Settings } from "../vectors";
import Button from "../components/Button";
import ui from './../styles/ui';
import Icon from './../components/Icon';
import { LEVELS, SAVED, SETTINGS } from './../navigation/constants';
import { calculateSize } from "../styles";

const background = require('../../assets/background.png')
const {width:w, height:h} = Dimensions.get('window')



//Pantalla de binvenida
export default Welcome = ({navigation}) => {

  const insets = useSafeArea();

  const newGame = ()=>{
    navigation.push(LEVELS)
  }

  const savedGames = ()=>{
    navigation.push(SAVED)
  }

  const goSettings = ()=>{
    navigation.push(SETTINGS)
  }

  const styles = {
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "space-around",
      alignItems:'center',
      paddingHorizontal:ui.padding,
      paddingTop:insets.top,
      paddingBottom:insets.bottom
    },
    text: {
      color: "grey",
      fontSize: calculateSize(30),
      fontWeight: "bold"
    },
    icon:{
      position:'absolute', 
      top: (insets.top>0)? insets.top: calculateSize(20), 
      right:calculateSize(20)

    },
    bomb:{
      position:'absolute',
      top:h*0.1, 
      left:w*0.15
    },
    logo:{
      marginTop:h*0.2
    },
    button1:{
      marginBottom:ui.margin
    },
    containerButtons:{
      width:'100%'
    }

  };

  return(
    
    <View style={styles.container}>

      <ImageBackground source={background} style={styles.image}>

        <Bomb size={w*0.45} extraStyles={styles.bomb}/>
        <Logo size = {w*0.8} extraStyles={styles.logo}/>

        <View style={styles.containerButtons}>

          <Button title='NUEVA PARTIDA' color='red' extraStyles={styles.button1} onPress={newGame} />
          <Button title='PARTIDAS GUARDADAS' color='green' onPress={savedGames} />

        </View>

        <Icon Svg={Settings} extraStyles={styles.icon} onPress={goSettings}/>
        
      </ImageBackground>

    </View>

  )
  
};

