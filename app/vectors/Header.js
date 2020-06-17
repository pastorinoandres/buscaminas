import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native'
import {colors} from '../styles';

export default Header = ({size=25, color=colors.acento.primary, extraStyles={}})=>{

    return(
        <View style={{width:size, aspectRatio:414/183,  ...extraStyles}}>
            <Svg width="100%" height="100%" viewBox="0 0 414 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0 0H414V101.912C414 122.203 398.807 139.28 378.654 141.641L33.4906 182.077C15.6606 184.165 0 170.232 0 152.28V0Z" fill="#FFD54F"/>
                <Path d="M143.531 64.72H148.983C150.563 64.72 151.81 65.103 152.723 65.8689C153.651 66.6185 154.116 67.6452 154.116 68.9489C154.116 70.4319 153.472 71.5726 152.185 72.3711C153.896 73.0556 154.751 74.2615 154.751 75.9889C154.751 76.9667 154.507 77.8385 154.018 78.6044C153.529 79.3541 152.845 79.9407 151.965 80.3644C151.101 80.7881 150.123 81 149.031 81H143.531V64.72ZM148.151 71.3444C148.966 71.3444 149.594 71.157 150.034 70.7822C150.49 70.4074 150.718 69.8859 150.718 69.2178C150.718 68.0119 149.968 67.4089 148.469 67.4089H146.929V71.3444H148.151ZM148.494 78.2867C149.374 78.2867 150.058 78.083 150.547 77.6756C151.052 77.2681 151.305 76.7222 151.305 76.0378C151.305 75.4185 151.093 74.9378 150.669 74.5956C150.245 74.2533 149.634 74.0822 148.836 74.0822H146.929V78.2867H148.494ZM161.506 81.3422C160.17 81.3422 159.119 80.9348 158.353 80.12C157.587 79.3052 157.204 78.1889 157.204 76.7711V68.4111H160.651V76.2089C160.651 76.877 160.814 77.3985 161.14 77.7733C161.466 78.1319 161.906 78.3111 162.46 78.3111C163.014 78.3111 163.543 78.1319 164.049 77.7733C164.57 77.4148 165.002 76.9341 165.344 76.3311V68.4111H168.791V81H165.344V79.3378C164.871 79.9733 164.326 80.4704 163.706 80.8289C163.103 81.1711 162.37 81.3422 161.506 81.3422ZM175.602 81.3667C174.803 81.3667 174.029 81.2852 173.28 81.1222C172.546 80.9593 171.919 80.7393 171.397 80.4622L171.715 77.5289C172.269 77.8711 172.88 78.1481 173.548 78.36C174.217 78.5719 174.844 78.6778 175.431 78.6778C175.985 78.6778 176.449 78.58 176.824 78.3844C177.199 78.1726 177.386 77.8711 177.386 77.48C177.386 77.1704 177.256 76.9341 176.995 76.7711C176.734 76.5919 176.237 76.3719 175.504 76.1111L174.844 75.8667C174.143 75.6059 173.573 75.3615 173.133 75.1333C172.693 74.8889 172.294 74.5222 171.935 74.0333C171.577 73.5444 171.397 72.9007 171.397 72.1022C171.397 70.8311 171.87 69.8452 172.815 69.1444C173.777 68.4274 175.023 68.0689 176.555 68.0689C177.761 68.0689 179.032 68.3052 180.368 68.7778L179.904 71.6867C179.431 71.4096 178.894 71.1896 178.291 71.0267C177.704 70.8474 177.15 70.7578 176.628 70.7578C176.091 70.7578 175.659 70.8474 175.333 71.0267C175.023 71.2059 174.868 71.4667 174.868 71.8089C174.868 72.1348 174.999 72.3793 175.26 72.5422C175.52 72.7052 175.96 72.8926 176.58 73.1044C177.068 73.2837 177.354 73.3896 177.435 73.4222C178.12 73.6993 178.69 73.9681 179.146 74.2289C179.603 74.4896 180.002 74.8807 180.344 75.4022C180.686 75.9074 180.857 76.5593 180.857 77.3578C180.857 78.6941 180.377 79.6963 179.415 80.3644C178.454 81.0326 177.183 81.3667 175.602 81.3667ZM189.165 81.3667C187.079 81.3667 185.458 80.8126 184.301 79.7044C183.16 78.5963 182.59 77.0319 182.59 75.0111C182.59 73.6422 182.859 72.4363 183.396 71.3933C183.934 70.3341 184.692 69.5193 185.67 68.9489C186.647 68.3622 187.78 68.0689 189.067 68.0689C189.67 68.0689 190.298 68.1422 190.95 68.2889C191.618 68.4193 192.131 68.5741 192.49 68.7533L191.83 71.6622C191.455 71.483 191.039 71.3444 190.583 71.2467C190.143 71.1326 189.727 71.0756 189.336 71.0756C188.326 71.0756 187.511 71.4178 186.892 72.1022C186.289 72.7867 185.987 73.6911 185.987 74.8156C185.987 75.9563 186.297 76.8363 186.916 77.4556C187.552 78.0748 188.448 78.3844 189.605 78.3844C190.371 78.3844 191.194 78.2378 192.074 77.9444L192.587 80.7311C191.528 81.1548 190.387 81.3667 189.165 81.3667ZM198.566 81.3667C197.262 81.3667 196.228 80.8126 195.462 79.7044C194.696 78.5963 194.313 77.0889 194.313 75.1822C194.313 72.8681 194.9 71.1081 196.073 69.9022C197.246 68.68 198.933 68.0689 201.133 68.0689C202.371 68.0689 203.822 68.2644 205.484 68.6556V81H202.208L202.282 78.9956H202.184C201.76 79.7615 201.239 80.3481 200.62 80.7556C200.017 81.163 199.332 81.3667 198.566 81.3667ZM199.3 78.36C199.805 78.36 200.302 78.0911 200.791 77.5533C201.28 77.0156 201.736 76.2985 202.16 75.4022V71.2956C201.638 71.1489 201.117 71.0756 200.595 71.0756C199.617 71.0756 198.876 71.4096 198.371 72.0778C197.882 72.7459 197.637 73.7319 197.637 75.0356C197.637 76.0622 197.784 76.877 198.077 77.48C198.371 78.0667 198.778 78.36 199.3 78.36ZM208.817 68.4111H212.191V70.3667C213.185 68.8348 214.529 68.0689 216.224 68.0689C217.185 68.0689 218 68.297 218.668 68.7533C219.353 69.1933 219.85 69.8289 220.159 70.66C220.73 69.7637 221.365 69.1119 222.066 68.7044C222.783 68.2807 223.598 68.0689 224.511 68.0689C225.863 68.0689 226.914 68.4763 227.664 69.2911C228.43 70.0896 228.813 71.2059 228.813 72.64V81H225.366V73.1778C225.366 72.5259 225.203 72.0207 224.877 71.6622C224.568 71.2874 224.144 71.1 223.606 71.1C222.938 71.1 222.319 71.377 221.748 71.9311C221.178 72.4852 220.754 73.1941 220.477 74.0578V81H217.031V73.1778C217.031 72.5422 216.868 72.037 216.542 71.6622C216.216 71.2874 215.784 71.1 215.246 71.1C214.643 71.1 214.073 71.3281 213.535 71.7844C213.013 72.2244 212.59 72.8519 212.264 73.6667V81H208.817V68.4111ZM233.344 63.1556H237.279V66.3333H233.344V63.1556ZM231.437 78.0422H233.784V71.3689H231.437V68.4111H237.23V78.0422H239.333V81H231.437V78.0422ZM241.617 68.4111H244.99V70.5867C245.511 69.723 246.114 69.0874 246.799 68.68C247.483 68.2726 248.282 68.0689 249.194 68.0689C250.547 68.0689 251.606 68.4763 252.372 69.2911C253.138 70.0896 253.521 71.2059 253.521 72.64V81H250.074V73.1778C250.074 72.5259 249.911 72.0207 249.586 71.6622C249.26 71.2874 248.82 71.1 248.266 71.1C247.614 71.1 246.994 71.3444 246.408 71.8333C245.821 72.3222 245.373 72.9415 245.063 73.6911V81H241.617V68.4111ZM260.346 81.3667C259.042 81.3667 258.007 80.8126 257.241 79.7044C256.475 78.5963 256.092 77.0889 256.092 75.1822C256.092 72.8681 256.679 71.1081 257.852 69.9022C259.026 68.68 260.712 68.0689 262.912 68.0689C264.151 68.0689 265.601 68.2644 267.263 68.6556V81H263.988L264.061 78.9956H263.963C263.54 79.7615 263.018 80.3481 262.399 80.7556C261.796 81.163 261.112 81.3667 260.346 81.3667ZM261.079 78.36C261.584 78.36 262.081 78.0911 262.57 77.5533C263.059 77.0156 263.515 76.2985 263.939 75.4022V71.2956C263.418 71.1489 262.896 71.0756 262.375 71.0756C261.397 71.0756 260.655 71.4096 260.15 72.0778C259.661 72.7459 259.417 73.7319 259.417 75.0356C259.417 76.0622 259.563 76.877 259.857 77.48C260.15 78.0667 260.558 78.36 261.079 78.36ZM273.952 81.3667C273.154 81.3667 272.38 81.2852 271.63 81.1222C270.897 80.9593 270.269 80.7393 269.748 80.4622L270.066 77.5289C270.62 77.8711 271.231 78.1481 271.899 78.36C272.567 78.5719 273.195 78.6778 273.781 78.6778C274.335 78.6778 274.8 78.58 275.175 78.3844C275.549 78.1726 275.737 77.8711 275.737 77.48C275.737 77.1704 275.607 76.9341 275.346 76.7711C275.085 76.5919 274.588 76.3719 273.855 76.1111L273.195 75.8667C272.494 75.6059 271.924 75.3615 271.484 75.1333C271.044 74.8889 270.644 74.5222 270.286 74.0333C269.927 73.5444 269.748 72.9007 269.748 72.1022C269.748 70.8311 270.221 69.8452 271.166 69.1444C272.127 68.4274 273.374 68.0689 274.906 68.0689C276.112 68.0689 277.383 68.3052 278.719 68.7778L278.255 71.6867C277.782 71.4096 277.244 71.1896 276.641 71.0267C276.055 70.8474 275.501 70.7578 274.979 70.7578C274.441 70.7578 274.009 70.8474 273.684 71.0267C273.374 71.2059 273.219 71.4667 273.219 71.8089C273.219 72.1348 273.349 72.3793 273.61 72.5422C273.871 72.7052 274.311 72.8926 274.93 73.1044C275.419 73.2837 275.704 73.3896 275.786 73.4222C276.47 73.6993 277.041 73.9681 277.497 74.2289C277.953 74.4896 278.352 74.8807 278.695 75.4022C279.037 75.9074 279.208 76.5593 279.208 77.3578C279.208 78.6941 278.727 79.6963 277.766 80.3644C276.804 81.0326 275.533 81.3667 273.952 81.3667Z" fill="#0C0C0B"/>
            </Svg>
        </View>
    )

}