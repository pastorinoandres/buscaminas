import React from "react";
import {Text, View, Dimensions } from "react-native";
import colors from './../styles/colors';
import ui from './../styles/ui';
import { Bomb, Timer } from "../vectors";

import moment from 'moment';
import 'moment/locale/es';

const {width:w, height:h} = Dimensions.get('window')


export default Info = ({bombs, time, extraStyles}) =>{

    let duration = moment.duration(time, 's')
    let formatted = moment.utc(duration.as('milliseconds')).format('m:ss')
    
    const styles = {
  
      container:{      
        width:w*0.8,
        height:100,
        paddingHorizontal:ui.padding,
        backgroundColor:colors.white(1),
        ...ui.shadow, 
        borderRadius:10,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...extraStyles
      },
      bombsText:{
        color: colors.grey.t40,
        fontSize: 26,
        fontWeight: "900",
      },
      timerText:{
        color: colors.acento.secondary,
        fontSize: 26,
        fontWeight: "900",
      }
  
    } 
  
    return(
      <View style={styles.container}>    
        <View style={{flexDirection:"row",flex:1,justifyContent:'center'}}>
          <Bomb size={30} extraStyles={{marginRight:10}}/>
          <Text style={styles.bombsText} >{bombs}</Text>
        </View>
        <View style={{flexDirection:"row", flex:1,justifyContent:'center'}}>
          <Timer size={30} extraStyles={{marginRight:10}}/>
          <Text style={styles.timerText}>{formatted}</Text>
        </View>      
      </View>
    )
}