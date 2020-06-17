import React, {useState} from 'react';
import ReactNavigationContainer from './app/navigation';
import { AsyncStorage } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import SavedGames from './app/utils/SavedGames';

console.disableYellowBox = ['Remote debugger'];

function App() {

  const [ savedGames, setSavedGames ] = useState([])
  const [ isReady, setIsReady ] = useState(false)

  const getAsyncStorage =()=>{

    //Lo primero que hace la app es ir a buscar (asincronicamente) en el almacenamiento del dispositivo, partidas guardadas.
    //Hasta tanto no traiga dicha información (pudiendo no existir), la app permanece en el splashScreen
    //Cuando la obtengo la guardo en mi estado y la distribuyo con Context
    
    return new Promise((resolve)=>{
      
      AsyncStorage.getItem('minesweeperSaved').then((result)=>{

        const savedData = (result)?JSON.parse(result):[]
        setSavedGames(savedData)
        resolve()

      })})

     
  }

  if(isReady){
  
    return ( 
      
        <SafeAreaProvider>
          <SavedGames value={{savedGames, setSavedGames}}>
            <ReactNavigationContainer/>
          </SavedGames>
        </SafeAreaProvider>
    );

  }else{

    return(
      <AppLoading
        startAsync={getAsyncStorage}
        onFinish={()=>setIsReady(true)}
        onError={console.warn}
      />
    )
  }


}


export default App;
