const { io } = require('../server');

//on: evento que escucha informacion
io.on('connection', (client) => { 
    
  console.log('Usuario conectado');

  //emit: evento que envia informacion, para que el html lo escuche
  //este mensaje lo vemos en la consola web
  client.emit('enviarMensaje',{
      usuario: 'Administrador',
      mensaje: 'Bienvenido a esta aplicacion'
  });

  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  });

  //Escuchar el client
  // el objeto que tiene el enviarMensaje que viene del http, se lo asigno a la funcion mediante un nombre generico que lo llame aqui mensaje
  client.on('enviarMensaje', (data, callback) => {
      
      console.log('hola',data);

      //broadcast: envia a todos los usuarios que tengan la sesion el mensaje 
      client.broadcast.emit('enviarMensaje',data);

      
      if( data.usuario ) {
          callback({
              resp: 'TODO SALIO BIEN!'
          });
      }else{
          callback({
              resp: 'TODO SALIO MAL!!!!!!!!'
          });
      }


  });

});