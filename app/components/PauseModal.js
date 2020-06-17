import React  from "react";
import { Text, View, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';
import colors from './../styles/colors';
import ui from './../styles/ui';
import calculateSize from './../styles/calculateSize';

export default PausaModal = ({modalVisible, play, save})=>{

  //Modal para pausar el juego

    const imagen = require('../../assets/ilustration_pause.png')

    const styles = StyleSheet.create({

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
      },
      container:{
        marginBottom:ui.margin*2,
        aspectRatio:1,
        borderRadius:calculateSize(20),
        overflow:'hidden',
        width:'100%',
        backgroundColor:colors.white(1),
        justifyContent:'center',
        alignItems:'center'
      },
      image:{
        height:'50%',
        width:'50%'
      },
      text:{
        fontWeight:'800',
        fontSize:calculateSize(26),
        color:colors.black(0.8),
        position:'absolute',
        bottom:calculateSize(30),
        flex:1,
        textAlign:'center'
      }

    })

    return(

        <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={{flex:1}}>
                <BlurView tint='dark' intensity={70} style={styles.blurview}>
                  <TouchableOpacity onPress={play} style={styles.touchable}>
                  <View style={{width:'100%'}}>
                      <TouchableOpacity activeOpacity={1}>
                          <View style={styles.container}>
                              <Image source={imagen} style={styles.image}/>
                              <Text style={styles.text}>Pausaste el juego </Text>                   
                          </View>
                      </TouchableOpacity>
                      <Button title='CONTINUAR' color='green' onPress={play} extraStyles={{marginBottom:ui.margin}}/>
                      <Button title='GUARDAR PARTIDA' color='red' onPress={save}/>
                  </View>           
                  </TouchableOpacity>       
                </BlurView>
              </View>

            </Modal>       
        
    )
}

