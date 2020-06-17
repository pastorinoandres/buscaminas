import React from 'react'

//dependecies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { Welcome, Saved, Levels, Game, Settings } from '../screens';

//constants
import { SETTINGS, GAME, LEVELS, SAVED, WELCOME } from './constants' ;

const Stack = createStackNavigator();




//Componente que gestiona toda la navegación del sistema.

function ReactNavigationContainer() { 


  return (

    <NavigationContainer>

        <Stack.Navigator headerMode='none'>

          <Stack.Screen name={WELCOME} component={Welcome} />
          <Stack.Screen name={SAVED} component={Saved} />
          <Stack.Screen name={LEVELS} component={Levels} />
          <Stack.Screen name={GAME} component={Game} />
          <Stack.Screen name={SETTINGS} component={Settings} />
          
        </Stack.Navigator>      

    </NavigationContainer>

  );

}

export default ReactNavigationContainer
