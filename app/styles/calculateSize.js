
import { Dimensions } from 'react-native';

const {width:windowWidth, height:windowHeight} = Dimensions.get('window');



//Funcion que nos permite adaptar el tamaño del componente al dispositivo que estemos usando
export default function calculateSize(originalSize){

    const screenSizeDefault = 414
    const porcentaje = originalSize/screenSizeDefault

    return windowWidth*porcentaje

}