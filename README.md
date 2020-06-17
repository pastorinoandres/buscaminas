# Buscaminas
#### Juego de lógica y azar

Librerias implementadas:
* React Navigation
* React Native (framework)
* Expo (framework)
* Linear Gradient
* React Native Safe Area Context
* BlurView
* AsyncStorage
* Moment

## Instalación
`npm install` para instalar todas las dependencias.
`expo start`  para iniciar el servidor

## Aclaración
La aplicación fue testeada solo con un Iphone XS Max, sin embargo deberia poder funcionar sin problemas en cualquier dispositivo.
Preferentemente probar con IOS.

## Para visualizar
* Descargar Expo Client para verlo en el celular de manera rapida.
Link de expo: https://expo.io/@pastorinoandres/minesweeper

## Guia de diseño UI_UX
https://www.figma.com/file/k7d4yJ6pkOgmVUhFpwjyfG/Buscaminas?node-id=7%3A478

## Reglas del juego
El juego consiste en despejar todas las casillas de una pantalla que no oculten una mina.

Algunas casillas tienen un número, el cual indica la cantidad de minas que hay en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas y 5 sin minas. Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina y éstas se descubren automáticamente.

Si se descubre una casilla con una mina se pierde la partida.

Se puede poner una marca en las casillas que el jugador piensa que hay minas para ayudar a descubrir las que están cerca.

## Funcionamiento en resumen

* Pantalla de bienvenida.
Se descargan las partidas guardadas del device ( si las hay ) y las distribuye con Context API

* Pantalla de niveles
Niveles predefinidos y modal para personalizar

* Pantalla de partidas guardadas
Niveles predefinidos y modal para personalizar dificultad

* Pantalla juego
Recibe los parametros para instanciar un nuevo juego o uno previo y reproduce en el tablero.
Opciones para pausar el juego, guardarlo y seguirlo en otro momento.

* Pantalla de Configuraciones
Actualmente solo con informacion del desarrollador

