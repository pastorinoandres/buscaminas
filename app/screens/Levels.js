import React, { useState} from "react";
import { ImageBackground, Text, View, ScrollView, StyleSheet, Modal, TouchableOpacity} from "react-native";
import { useSafeArea  } from 'react-native-safe-area-context';
import colors from './../styles/colors';
import Arrow from './../vectors/Arrow';
import ui from './../styles/ui';
import LevelCard from "../components/LevelCard";
import { GAME } from "../navigation/constants";
import { BlurView } from 'expo-blur';
import CustomLevel from "../components/CustomLevel";
import levels from './../utils/levels';
import { calculateSize } from "../styles";

//Pantalla donde se ven todos los niveles

const background = require('../../assets/background.png')

export default Levels = ({navigation}) => {

  const insets = useSafeArea();
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
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
    },
    blurview:{
      ...StyleSheet.absoluteFill,
      justifyContent:'center',
      alignItems: 'center'
    },
    touchable:{
      flex:1,
      width:'100%',
      justifyContent:'center',
      paddingHorizontal:ui.padding,
      alignItems:'center'
    }

  })


  


  const onPressLevel = (l)=>{

    let fn = () => {}

    if(l.name === 'PERSONALIZADO'){

      fn = ()=> setModalVisible(true)   
      

    }else{

      fn = ()=> {
        navigation.navigate(GAME,{...l})
      }
      //popup
    }

    return fn

  }

  const onPressCustom = (values) =>{

    return ()=>{
      setModalVisible(false);
      navigation.navigate(GAME,{...values})
    }

  }


  

  return(

    <View style={styles.container}>

      <ImageBackground source={background} style={styles.image}>
    
          <Modal animationType="slide" transparent={true} visible={modalVisible} >
          
            <View style={{flex:1}}>
              <BlurView tint='dark' intensity={70} style={styles.blurview}>
                <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.touchable}>
                  <CustomLevel onPress={onPressCustom}/>            
                </TouchableOpacity>       
              </BlurView>
            </View>

          </Modal>
          
          <ScrollView style={styles.scrollview}>

            <Text style={styles.text}>Elige tu nivel</Text>
            {
              levels.map(l =>(<LevelCard key={l.name} info={l} onPress={onPressLevel}/> ))
            }

          </ScrollView>

          <Icon Svg={()=><Arrow color={colors.white(1)}/>} extraStyles={styles.icon} onPress={navigation.goBack}/>

      </ImageBackground>

    </View>

  )

}

