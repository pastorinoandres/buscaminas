export default class GameData {

    constructor(filas,columnas,minas){ 

        this.filas = filas;
        this.columnas = columnas;
        this.minas = minas;
        this.zonasLibres = [];
        this.zonasConBombas = []
        this.tablero = [];
        this.fechaInicio = undefined;
        this.timer = {
            working:false,
            value:0
        },
        this.bombs = minas; //Cantidad de bombas que faltan marcar
        this.result = undefined; //true: gano, false:perdio
        this.tile = undefined //Si piede el juego se guarda la ultima posición que se toco.



        this.inicializar();
        this.colocarMinas();
        this.colocarNumeros();
        this.marcarZonasLibres();

        return this;
        
    }

    inicializar(){

        //Este método crea la matriz en base a filas y columnas cargadas.

        this.tablero = new Array(this.filas);

        for (let y = 0; y < this.tablero.length; y++) {

            this.tablero[y] = new Array(this.columnas) 

            for (let x = 0; x < this.columnas; x++) {

                this.tablero[y][x] = {
                    number:undefined,
                    bomb:undefined,
                    flag:false,
                    question:false,
                    active:false,
                    zone:undefined
                }
                
            }

        }

    }

    colocarMinas(){

        //En este método creamos el número de minas dado, 
        //de manera aleteatoria y las ubicamos en el tablero segun su posición

        const min = 1;
        const max = this.filas * this.columnas
        //Rango para calcular números aleatorios

        let colocadas = 0;
    
        while( colocadas < this.minas){
    
            let creada = false;
    
            while(!creada){

                //El método random no te asegura que la cantidad minas aletatorias sean todas distintas.
                //Por eso nos aseguramos, que cada vez que se cree un número no sea repetido.
                //Si lo es, volvemos a repitir la operación hasta lograr el objetivo.
    
                let minaRandom = Math.floor(Math.random() * ((max+1) - min) + min);
    
                if(!this.zonasConBombas.map(tile=>`${tile.x},${tile.y}`).includes(`${minaRandom.x},${minaRandom.y}`)){       
    
                    //Dado el número aleatorio, ubico la mina en el tablero.
                    const cociente = Math.floor(minaRandom/this.columnas)
                    const resto = minaRandom % this.columnas

                    //Dado que la primer posición de la matriz es 0 (cero), facilitamos la operación.
                    const setTablero = (y,x,value)=>{
                        this.tablero[y-1][x-1] = {...this.tablero[y-1][x-1], ...value}
                        this.zonasConBombas.push({x:x-1,y:y-1})
                    }

                    //Finalmente lo ubicamos en el tablero.
                    if(resto){
                        setTablero(cociente+1,resto,{bomb:true})
                    }else{
                        setTablero(cociente,this.columnas,{bomb:true})
                    }
                    
                    creada = true;
                }
    
            }
    
            colocadas = colocadas + 1
    
        }

    }

    colocarNumeros(){

        //En este método ingresamos los números que nos permiten reconocer cuantas bombas hay el perimetro.
        for (let y = 0; y < this.tablero.length; y++) {

            for (let x = 0; x < this.columnas; x++) {

                if(!this.tablero[y][x].bomb){


                    //Considerando el tablero, como un eje cartesiano, podemos deducir:

                    const tl = this.tablero[y+1]?.[x-1]?.bomb ? 1 : 0 //top-left
                    const tc = this.tablero[y+1]?.[x]?.bomb ? 1 : 0  //top-center
                    const tr = this.tablero[y+1]?.[x+1]?.bomb ? 1 : 0  //top-right
                    const cl = this.tablero[y]?.[x-1]?.bomb ? 1 : 0  //center-left
                    const cr = this.tablero[y]?.[x+1]?.bomb ? 1 : 0  //center-right
                    const bl = this.tablero[y-1]?.[x-1]?.bomb ? 1 : 0  //bottom-left
                    const bc = this.tablero[y-1]?.[x]?.bomb ? 1 : 0 //bottom-center
                    const br = this.tablero[y-1]?.[x+1]?.bomb ? 1 : 0  //bottom-right


                    //Finalmente sumamos la cantidad de bombas y ingresamos el número en el tablero
                    this.tablero[y][x].number= tl+tc+tr+cl+cr+bl+bc+br

                }
                
            }

        }
    }

    marcarZonasLibres(){

        //Este método sirve para identificar las zonas libres(incluyendo el perimetro númerico)
        //y asignar el id de zona correspondiente a cada posición del tablero.


        //Paso 1: Recorremos posición por posición del tablero buscando zonas libres (number === 0).
        for (let y = 0; y < this.tablero.length; y++) {

            for (let x = 0; x < this.columnas; x++) {
                
                //Atajo para saber si la posición esta libre.
                const liberado = (this.tablero[y][x].number === 0)


                if(liberado){

                    //Paso 2: Evaluo si pertenece a una zona. De ser asi seteo el id de la zona, 
                    //        para luego vincular los espacios adyacentes que correpondan.

                    let zoneId;

                    if(this.tablero[y][x].zone !== undefined ){

                        zoneId = this.tablero[y][x].zone                            

                    }else{

                        ////Creo un id (relacionado con la cantidad de zonas) y lo asigno para tenerno como referencia.
                        zoneId = this.zonasLibres.length;

                        //Creo la zona y agrego el primer mosaico a la misma.
                        this.zonasLibres.push({
                            id:zoneId,
                            tiles:[{x,y}] //Coordenadas que pertenecen a la zona.
                        })

                        //Seteamos el nuevo id en el mosaico.
                        this.tablero[y][x].zone = zoneId
                    }


                    //Paso 3: Empiezo a analizar mi perimetro en busqueda de mas espacios libres.                   


                    //Identifico el perimetro de coordenadas a seguir analizando.
                    const tl = {y:y+1, x:x-1}  //top-left
                    const tc = {y:y+1, x}      //top-center
                    const tr = {y:y+1, x:x+1}  //top-right
                    const cl = {y,     x:x-1}  //center-left
                    const cr = {y,     x:x+1}  //center-right
                    const bl = {y:y-1, x:x-1}  //bottom-left
                    const bc = {y:y-1, x}      //bottom-center
                    const br = {y:y-1, x:x+1}  //bottom-right

                    
                    //Recorro todas las posiciones destinadas a analizar.                    
                    //Si la posición revelara un número (y/o espacio libre) se debe agregar a Zonas Libres.
                    //En cambio si la posicion esta fuera del tablero o tiene una bomba, no se incluira.
                    //Tampoco se incluira si ya tiene seteada la zona.

                    const zonasParaAnalizar = [tl,tc,tr,cl,cr,bl,bc,br];                    

                    zonasParaAnalizar.forEach( tile =>{

                        if(this.tablero[tile.y]?.[tile.x]){ //Descarta si esta fuera del tablero

                            if(!this.tablero[tile.y][tile.x].bomb){ //Descarta si tiene una bomba

                                if(this.tablero[tile.y][tile.x].zone === undefined){ //Descarto que no haya sido agregada anteriormente como zona.


                                    //Agrego el mosaico a zonas libres
                                    this.zonasLibres[zoneId].tiles.push({x:tile.x,y:tile.y})

                                    // Le asigno el id de zona al mosaico                       
                                    this.tablero[tile.y][tile.x].zone = zoneId

                                }                                   
                            
                        
                            }

                        }
            
                        
                    })         

                }     
                
            }

        }

    }
}














