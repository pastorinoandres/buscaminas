
//Colores del sistema

export default colors = {
    acento:{
        primary: '#FFD54F',
        secondary: '#FFA300',

    },
    green:{
        primary: '#73BD39',
        secondary: '#285015',
    },
    red:{
        primary: '#FC495C',
        secondary: '#8B111E',
    },
    grey:{
        t10: '#455A64',
        t20: '#56717D',
        t30: '#607D8B',
        t40: '#7E96A1',        
    },
    numbers:{
        1: '#2D9CDB',
        2: '#219653',
        3: '#EB5757',
        4: '#9B51E0',
        5: '#1FD292',
        6: '#6A5C10',
        7: '#FF7A00',
        8: '#0041EA',        
    },
    white: (alfa = 1)=>`rgba(255,255,255,${alfa})`,
    black: (alfa = 1)=>`rgba(0,0,0,${alfa})`,

}