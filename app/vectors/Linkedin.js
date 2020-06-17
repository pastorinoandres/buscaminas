import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native'
import {colors} from '../styles';

export default Linkedin = ({size=25, color=colors.acento.primary, extraStyles={}})=>{

    return(
        <View style={{width:size, aspectRatio:1,  ...extraStyles}}>
            <Svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.2748C0 10.8682 10.8682 0 24.2748 0C37.6814 0 48.5496 10.8682 48.5496 24.2748C48.5496 37.6814 37.6814 48.5496 24.2748 48.5496C10.8682 48.5496 0 37.6814 0 24.2748Z" fill="#0077B5"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.517 14.9924C17.4812 13.3718 16.3223 12.1374 14.4404 12.1374C12.5585 12.1374 11.3281 13.3718 11.3281 14.9924C11.3281 16.5795 12.5221 17.8494 14.369 17.8494H14.4041C16.3223 17.8494 17.517 16.5795 17.517 14.9924ZM17.1546 20.1055H11.6534V36.6343H17.1546V20.1055ZM30.6602 19.7173C34.2803 19.7173 36.9942 22.0802 36.9942 27.1572L36.994 36.6343H31.493V27.7914C31.493 25.5702 30.6969 24.0546 28.7055 24.0546C27.1856 24.0546 26.2804 25.0763 25.8828 26.0632C25.7373 26.4169 25.7016 26.9097 25.7016 27.4037V36.6347H20.1998C20.1998 36.6347 20.2723 21.6569 20.1998 20.1059H25.7016V22.4471C26.4318 21.3216 27.7395 19.7173 30.6602 19.7173Z" fill="white"/>
            </Svg>
        </View>
    )

}