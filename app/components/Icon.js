import React from "react";
import {View, TouchableOpacity } from "react-native";
import colors from './../styles/colors';
import calculateSize from './../styles/calculateSize';


export default Icon = (props)=>{

    //Icono dentro de un circulo blanco con opacidad (back/settings)

    const { onPress, extraStyles, Svg} = props;

    const styles = {
        touchable:{
            ...extraStyles
        },
        circle:{
            width:calculateSize(50),
            height:calculateSize(50),
            borderRadius:calculateSize(25),
            backgroundColor:colors.white(0.3),
            justifyContent: 'center',
            alignItems: 'center',
        }


    }

    return(
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.circle}>
                <Svg size={25}/>                
            </View>            
        </TouchableOpacity>
        
    )

}