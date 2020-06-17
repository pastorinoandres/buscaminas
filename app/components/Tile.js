import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import colors from './../styles/colors';
import ui from './../styles/ui';
import { Bomb, Flag, Question } from "../vectors";
import calculateSize from './../styles/calculateSize';

export default Tile = ({info:tile, onPress, onLongPress, result, bomb})=>{

    //Mosaico que representa una posición del tablero


    const size = calculateSize(50)
    const rotationFront = (tile.active) ? 180 : 0
    const rotationBack =  (tile.active) ? 360 : 180


    const styles = {
        touchable:{
            position:'relative'
        },
        container:{                
            width:size,
            height:size,
            ...ui.shadow,
            borderRadius:calculateSize(5),
            margin:calculateSize(2),
            overflow:'hidden',            
        },
        front:{
            width:size,
            height:size,        
            backfaceVisibility: 'hidden',
            position:'absolute',
            backgroundColor:(tile.flag || tile.question )? colors.white(1) : colors.grey.t10,
            top:0,
            width:'100%',
            flex:1,
            transform:[{rotateY:`${rotationFront}deg`},{perspective:800}],
            justifyContent:'center',
            alignItems:'center'
        },
        back:{
            width:size,
            height:size,
            backgroundColor: (bomb)? colors.red.primary : colors.white(1),
            opacity: (tile.number === 0) ? 0.4 : 0.95,
            backfaceVisibility: 'hidden',
            position:'absolute',
            top:0,
            width:'100%',
            flex:1,
            transform:[{rotateY:`${rotationBack}deg`},{perspective:800}],                
            justifyContent:'center',
            alignItems:'center',
        },
        number:{
            fontSize:calculateSize(26),
            fontWeight:'700',
            color:colors.numbers[tile.number]
        }
    }

    

    return(
        <TouchableOpacity {...{onPress,onLongPress}} disabled={ (result !== undefined) || tile.active } style={styles.touchable}>

            <View style={styles.container}>

                <View style={styles.front}>
                {
                    <>
                    {(tile.flag) && <Flag/>}
                    {(tile.question) && <Question/>}
                    </>
                }                   
                </View>

                <View  style={styles.back}>
                {
                    <>
                    {(tile.bomb) && <Bomb/>}
                    {(tile.number> 0) && <Text style={styles.number}>{tile.number}</Text>}
                    </>
                }
                </View>

            </View>

        </TouchableOpacity>
        
    )

    
}