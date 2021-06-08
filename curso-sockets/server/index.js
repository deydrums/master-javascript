var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});

app.use(express.static('client'));


app.get('/hola-mundo',function(req, res){
    res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
    id: 1,
    texto: 'Bienvenido al chat privado de socket.io y NodeJS',
    nickname: 'Bot - deydrums'
}];


io.on('connection', function(socket){
    console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado.");
    socket.emit('messages',messages);
});

server.listen(6677,function(){
    console.log('Servidor esta funcionando');
});