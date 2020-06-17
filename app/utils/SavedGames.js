import React, { useRef, useState} from 'react';

export const SavedGamesContext = React.createContext({});

//Componente que permite generar un contexto con las partidas guardadas
export default SavedGames = ({value,children})=>{

    return(
        <SavedGamesContext.Provider value={value}>
            {children}
        </SavedGamesContext.Provider>
    )

}