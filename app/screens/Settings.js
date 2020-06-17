import React from "react";
import { ImageBackground, View, Dimensions, Text, Linking } from "react-native";
import { useSafeArea  } from 'react-native-safe-area-context';
import { Logo, Bomb, Arrow, Linkedin, GitHub } from "../vectors";
import ui from './../styles/ui';
import Icon from './../components/Icon';
import { TouchableOpacity } from "react-native-gesture-handler";
import { calculateSize } from "../styles";

const background = require('../../assets/background.png')
const {width:w, height:h} = Dimensions.get('window')



//Pantalla (con futuras configuraciones del juego y ..) con informacion del desarrollador
export default Welcome = ({navigation}) => {

  const linkedinProfile = 'https://www.linkedin.com/in/pastorinoandres'
  const githubProfile = 'https://github.com/pastorinoandres' 

  const insets = useSafeArea();

  const styles = {
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems:'center',
      paddingHorizontal:ui.padding,
      paddingTop:insets.top,
      paddingBottom:insets.bottom
    },
    icon:{
      position:'absolute', 
      top: (insets.top>0)? insets.top: calculateSize(20), 
      left:calculateSize(20)

    },
    bomb:{
      position:'absolute',
      top:h*0.1, 
      left:w*0.15
    },
    button1:{
      marginBottom:ui.margin
    },
    h1Container:{
      marginTop:calculateSize(30),
      width:'100%',
      alignItems: 'center',
    },
    containerButtons:{
      marginTop:ui.margin*2,
      width:calculateSize(160),
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    h1:{
      fontSize:calculateSize(18),
      fontWeight:'600',
      color:colors.white(1),
      paddingVertical:ui.padding
    },
    h2:{
      fontSize:calculateSize(32),
      fontWeight:'800',
      color:colors.white(1),
      textAlign:'center'
    }

  };

  return(

    <View style={styles.container}>

      <ImageBackground source={background} style={styles.image}>

        <Bomb size={w*0.45} extraStyles={styles.bomb}/>
        <Logo size = {w*0.8} extraStyles={{marginTop:100}}/>

        <View style={styles.h1Container}>
          <Text style={styles.h1}>Desarrollado por</Text> 
          <Text style={styles.h2}>Andres Pastorino Gabalec</Text>
        </View>

        <View style={styles.containerButtons}>

          <TouchableOpacity onPress={()=>{Linking.openURL(linkedinProfile)}}>
            <Linkedin size={70}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{Linking.openURL(githubProfile)}}>
            <GitHub size={70}/>
          </TouchableOpacity>

        </View>

        <Icon Svg={()=><Arrow color={colors.white(1)}/>} extraStyles={styles.icon} onPress={navigation.goBack}/>
      
      </ImageBackground>

    </View>

  )
  
};

