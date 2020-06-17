import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import colors from './../styles/colors';
import ui from './../styles/ui';
import calculateSize from './../styles/calculateSize';


const CircleButton = ({onPress, operation, extraStyles})=>{

    //Boton para incrementar o decrementar números

    const styles = {

        touchable:{
            ...extraStyles
        },
        circle:{
            width:calculateSize(60),
            height:calculateSize(60),
            borderRadius:calculateSize(30),
            backgroundColor:colors.white(1),
            justifyContent: 'center',
            alignItems: 'center',
            ...ui.shadow
        },
        icon:{
            fontSize:calculateSize(26), 
            fontWeight:'700',
            color:colors.green.secondary
        }


    }

    return(
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.circle}>
                <Text style={styles.icon}>{operation}</Text>               
            </View>            
        </TouchableOpacity>
        
    )

}

export default CustomLevel = ({onPress})=>{

    //Card para personalizar la dificultad del juego

    const imagen = require('../../assets/caratula_verde_expanded.png')

    const [filas, setFilas] = useState(8)
    const [columnas, setColumnas] = useState(8)
    const [minas, setMinas ] = useState(10)

    const items = [
        {
            name: 'Columnas',
            value: columnas,
            add: ()=> setColumnas(prev => prev+1),
            substract: ()=>{
                setColumnas( prev =>{
                    if(prev === 3){
                        return prev
                    }else{
                        return prev-1
                    }
                })
            },            
        },
        {
            name: 'Filas',
            value: filas,
            add: ()=> setFilas(prev => prev+1),
            substract: ()=>{
                setFilas( prev =>{
                    if(prev === 3){
                        return prev
                    }else{
                        return prev-1
                    }
                })
            },            
        },
        {
            name: 'Minas',
            value: minas,
            add: ()=> setMinas(prev => prev+1),
            substract: ()=>{
                setMinas( prev =>{ 
                    if(prev === 1){
                        return prev
                    }else{
                        return prev-1
                    }
                })
            },            
        }
    ]

    const styles = {

        container:{ 
            marginBottom:ui.margin,
            aspectRatio:1, 
            borderRadius:calculateSize(20), 
            overflow:'hidden',
            width:'100%'
        },
        imagen:{
            height:'100%',
            width:'100%'
        },
        subcontainer:{
            position:'absolute',
            padding:ui.padding*1.5,
            width:'100%',
            height:'100%'
        },
        title:{
            fontSize:calculateSize(24),
            fontWeight:'900',
            color:colors.black(0.8)
        },
        controller:{
            flex:1,
            width:'100%'
        },
        item:{
            flex:1,
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        },
        text:{
            flexDirection:'row',
            alignItems:'center'
        },
        number:{
            fontSize:calculateSize(26),
            fontWeight:'700',
            width:calculateSize(40)
        },
        description:{
            fontSize:calculateSize(18),
            fontWeight:'500'
        },

    }



    return(
        <View style={{width:'100%'}}>
            <TouchableOpacity activeOpacity={1}>
                <View style={styles.container}>
                    <Image source={imagen} style={styles.imagen}/>
                    <View style = {styles.subcontainer}>
                        <Text style={styles.title}>PERSONALIZADO</Text>
                        <View style={styles.controller}>
                            {items.map(item =>(
                                <View key={item.name} style={styles.item}>
                                    <View style={styles.text}>
                                        <Text style={styles.number}>{item.value}</Text>
                                        <Text style={styles.description}>{item.name}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <CircleButton operation='-' onPress={item.substract} extraStyles={{marginRight:10}}/>
                                        <CircleButton operation='+' onPress={item.add}/>
                                    </View>
                                </View>
                            ))}             
                        </View>                    
                    </View>
                </View>
            </TouchableOpacity>
            <Button title='Jugar' color='green' onPress={onPress({filas,columnas,minas})}/>
        </View>        
        
    )
}

