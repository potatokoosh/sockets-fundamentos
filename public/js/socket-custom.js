

//este io() viene de la libreria socket.io
var socket = io();

//on,, son eventos para escuchar informacion
//aqui es importante utilizar una function normal por que no estamos en node
socket.on('connect', function(){
    console.log('Conectado al Servidor');
});

//socket.on ('disconnect'), es por si se pierde conecion con el servidor
socket.on('disconnect', function(){
    console.log('Perdimos conecion con el servidor');
});

//emit, son eventos para enviar informacion,, 
//primer parametro, nombre del evento,, no utilizar caracteres especialesespacios
//segundo parametro es la informacion que voy a enviar y es bueno que sea en obj{} para poder envar varia informacion
//tercer parametro: es una function que se ejecuta si todo sale bien
//Este mensaje lo vemos en la terminal
socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Hola Mundo'
},function(resp){//esta function hace de callback, sirve para saber si se enviomensaje
    console.log('respuesta server: ', resp);
});

//on: evento para escuchar informacion,, recibe una function
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
});