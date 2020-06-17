# Buscaminas
#### Juego de logica y azar

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

## Para visualizar
* Descargar Expo Client para verlo en el celular de manera rapida.


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

