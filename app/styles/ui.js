
import { StyleSheet } from 'react-native';
import calculateSize  from './calculateSize';

export default ui = StyleSheet.create({
    borderRadius: {
        borderRadius:calculateSize(7), 
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: calculateSize(2),
        },
        shadowOpacity: calculateSize(0.25),
        shadowRadius: calculateSize(3.84),
        elevation: calculateSize(5),
    },
    margin:calculateSize(15),
    padding:calculateSize(20),
})