import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import colors from './../styles/colors';
import calculateSize from './../styles/calculateSize';


export default Button = (props)=>{

    //Boton personalizado con dos variantes de color y ajustable con 'fit'

    const { title, fit, onPress, color, extraStyles} = props;

    const styles = {
        touchable:{
            flexDirection:'row',
            ...extraStyles
        },
        container:{
            flex: fit ? 0 : 1            
        },
        button:{
            width:'100%',
            borderRadius: calculateSize(35)
        },
        front:{
            height:calculateSize(70),
            backgroundColor:(color === 'green') ? colors.green.primary : (color === 'red') ? colors.red.primary : undefined,            
            justifyContent:'center',
            alignItems: 'center',
            paddingHorizontal:calculateSize(35)
        },
        back:{
            height:calculateSize(77),
            backgroundColor:(color === 'green') ? colors.green.secondary : (color === 'red') ? colors.red.secondary : undefined,
            position:'absolute',
        },
        title:{
            fontSize:calculateSize(22),
            fontWeight: '700',
            color: colors.white(1)
        }


    }

    return(
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.container}>
                <View style={{...styles.button, ...styles.back}}>
                </View>
                <View style={{...styles.button, ...styles.front}}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>            
        </TouchableOpacity>
        
    )

}