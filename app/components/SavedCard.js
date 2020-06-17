import React from "react";
import {Text, View, TouchableOpacity } from "react-native";
import colors from './../styles/colors';
import ui from './../styles/ui';
import { Bomb, Timer, Table } from "../vectors";
import moment from 'moment';
import 'moment/locale/es';
import { calculateSize } from "../styles";


export default Info = ({bombs, time, filas, columnas, extraStyles, date, onPress}) =>{

  //Card que muestra una partida guardada

    let duration = moment.duration(time, 's')
    let formatted = moment.utc(duration.as('milliseconds')).format('m:ss')

    const date_calendar = moment(date).calendar()
    
    const styles = {
  
      container:{
        width:'100%',
        height:calculateSize(130),
        backgroundColor:colors.white(1),
        ...ui.shadow, 
        borderRadius:calculateSize(10),
        marginBottom:ui.margin,
        ...extraStyles
      },
      tableText:{
        color: colors.grey.t40,
        fontSize: calculateSize(22),
        fontWeight: "700",
      },
      bombsText:{
        color: colors.numbers[1],
        fontSize: calculateSize(22),
        fontWeight: "700",
      },
      timerText:{
        color: colors.acento.secondary,
        fontSize: calculateSize(22),
        fontWeight: "700",
      },
      data:{
        flex:1,        
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      date:{
        fontSize:calculateSize(18),
        fontWeight:'600',
        color:colors.black(0.8),
        paddingHorizontal:ui.padding,
        paddingTop:ui.padding

      }
  
    } 
  
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.date}>{date_calendar}</Text>
          <View style={styles.data}>
            <View style={{flexDirection:"row",flex:1,justifyContent:'center'}}>
              <Table size={30} extraStyles={{marginRight:10}}/>
              <Text style={styles.bombsText} >{`${filas}x${columnas}`}</Text>
            </View>
            <View style={{flexDirection:"row",flex:1,justifyContent:'center'}}>
              <Bomb size={30} extraStyles={{marginRight:10}}/>
              <Text style={styles.bombsText} >{bombs}</Text>
            </View>
            <View style={{flexDirection:"row", flex:1,justifyContent:'center'}}>
              <Timer size={30} extraStyles={{marginRight:10}}/>
              <Text style={styles.timerText}>{formatted}</Text>
            </View> 
          </View>     
        </View>
      </TouchableOpacity>      
    )
}