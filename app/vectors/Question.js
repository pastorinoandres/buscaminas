import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native'
import {colors} from '../styles';

export default Question = ({size=25, color=colors.acento.primary, extraStyles={}})=>{

    return(
        <View style={{width:size, aspectRatio:1,  ...extraStyles}}>
            <Svg width="100%" height="100%" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M80.5 161C36.1123 161 0 124.888 0 80.5C0 36.1123 36.1123 0 80.5 0C124.888 0 161 36.1123 161 80.5C161 124.888 124.888 161 80.5 161Z" fill="#F2C94C"/>
                <Path d="M161 80.5C161 36.1123 124.888 0 80.5 0V161C124.888 161 161 124.888 161 80.5Z" fill="#EE9800" fill-opacity="0.1"/>
                <Path d="M80.5001 101.37C75.5604 101.37 71.5556 97.3655 71.5556 92.4258V89.919C71.5556 81.4587 76.4059 73.9871 83.9127 70.8834C87.1154 69.5596 90.1648 65.8757 89.2942 60.9145C88.6801 57.4161 85.695 54.431 82.1965 53.8174C79.4578 53.3356 76.8156 54.0249 74.7554 55.7554C72.722 57.4626 71.5556 59.9617 71.5556 62.611C71.5556 67.5507 67.5509 71.5554 62.6112 71.5554C57.6715 71.5554 53.6667 67.5507 53.6667 62.611C53.6667 54.663 57.1598 47.1705 63.251 42.0555C69.3392 36.9434 77.3719 34.8057 85.2889 36.1975C96.1195 38.0984 105.012 46.9904 106.914 57.8221C109.121 70.3992 102.474 82.5678 90.7474 87.4157C90.005 87.7228 89.4445 88.7985 89.4445 89.919V92.4258C89.4445 97.3655 85.4398 101.37 80.5001 101.37Z" fill="#556E82"/>
                <Path d="M80.5001 128.204C85.44 128.204 89.4446 124.199 89.4446 119.259C89.4446 114.32 85.44 110.315 80.5001 110.315C75.5602 110.315 71.5557 114.32 71.5557 119.259C71.5557 124.199 75.5602 128.204 80.5001 128.204Z" fill="#556E82"/>
                <Path d="M85.2889 36.1976C83.6914 35.9168 82.0897 35.7868 80.5 35.7886V53.6793C81.0587 53.6793 81.6246 53.7168 82.1965 53.817C85.6949 54.4306 88.68 57.4157 89.2942 60.9141C90.1648 65.8747 87.1153 69.5592 83.9126 70.883C82.6997 71.3845 81.565 72.0106 80.5 72.7262V101.37C85.4397 101.37 89.4444 97.3657 89.4444 92.426V89.9192C89.4444 88.7987 90.0044 87.7224 90.7473 87.4159C102.474 82.568 109.121 70.3994 106.914 57.8223C105.012 46.9906 96.1194 38.0986 85.2889 36.1976Z" fill="#3C4655"/>
                <Path d="M89.4445 119.259C89.4445 114.32 85.4397 110.315 80.5 110.315V128.204C85.4397 128.204 89.4445 124.199 89.4445 119.259Z" fill="#3C4655"/>
            </Svg>
        </View>
    )

}