
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import colors from './../styles/colors';
import ui from './../styles/ui';
import calculateSize from './../styles/calculateSize';



export default LevelCard = ({info:l, onPress})=>{

    //Card que muestra información del nivel pasado por parametro

    const styles = {

        container:{
            marginBottom:ui.margin,
            height:calculateSize(130),
            borderRadius:calculateSize(20),
            overflow:'hidden'
        },
        imagen:{
            height:'100%',
            width:'100%'
        },
        info:{
            position:'absolute',
            padding:ui.padding
        },
        name:{
            fontSize:calculateSize(24),
            fontWeight:'900',
            color:colors.black(0.8)
        },
        cuadricula:{
            fontSize:calculateSize(18),
            fontWeight:'400',
            color:colors.black(0.8)
        },
        minas:{
            fontSize:calculateSize(18),
            fontWeight:'400',
            color:colors.black(0.8)
        }

    }

    
    return(

        <TouchableOpacity onPress={onPress(l)}>
            <View key={l.name} style={styles.container}>
                <Image source={l.imagen} style={styles.imagen}/>
                <View style = {styles.info}>
                    <Text style={styles.name}>{l.name}</Text>
                    <Text style={styles.cuadricula}>{`Cuadricula: ${(l.name === 'PERSONALIZADO') ? 'A medida' : `${l.filas}x${l.columnas}` }`}</Text>
                    <Text style={styles.minas}>{`Minas explosivas: ${(l.name === 'PERSONALIZADO') ? 'A medida' : l.minas }`}</Text>
                </View>
            </View>        
        </TouchableOpacity>

    )
}


