import React, { useContext } from "react";
import { ImageBackground, Text, View, ScrollView,} from "react-native";
import { useSafeArea  } from 'react-native-safe-area-context';
import colors from './../styles/colors';
import Arrow from './../vectors/Arrow';
import ui from './../styles/ui';
import { GAME } from "../navigation/constants";
import SavedCard from "../components/SavedCard";
import { SavedGamesContext } from "../utils/SavedGames";
import { calculateSize } from "../styles";

const background = require('../../assets/background.png')

//Pantalla donde se ven las partidas guardadas

export default Saved = ({navigation}) => {

  const insets = useSafeArea();
  const { savedGames } = useContext(SavedGamesContext);

  const styles = {
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-start",
      alignItems:'center',
      paddingHorizontal:ui.padding,
      paddingTop:insets.top,
      paddingBottom:insets.bottom
    },
    text: {
      color: colors.white(1),
      fontSize: calculateSize(30),
      fontWeight: "600",
      marginTop:calculateSize(100),
      marginBottom:calculateSize(40),
      flex:1,
      textAlign:'center'
    },
    icon:{
      position:'absolute', 
      top: (insets.top>0)? insets.top: calculateSize(20), 
      left:calculateSize(20)
    },
    scrollview:{
      flex:1,
      width:'100%'
    }
  };

  const onPressLevel = (l)=>{

    return ()=>navigation.navigate(GAME,{game:l})

  }


  

  return(
    <View style={styles.container}>
    <ImageBackground source={background} style={styles.image}>
      
      <ScrollView style={styles.scrollview}>
        <Text style={styles.text}>Reanuda tu partida</Text>
        {
          savedGames.map((l,i) =>{
            return(
              <SavedCard 
              key={`${l.fechaInicio}-${i}`} 
              filas={l.filas} 
              columnas={l.columnas} 
              bombs={l.bombs} 
              time={l.timer.value} 
              date={l.fechaInicio} 
              onPress={onPressLevel(l)}
              /> )
          })
        }
      </ScrollView>

      <Icon Svg={()=><Arrow color={colors.white(1)}/>} extraStyles={styles.icon} onPress={navigation.goBack}/>
    </ImageBackground>
  </View>
  )

}
