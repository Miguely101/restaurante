var express = require('express')
var app = express()
var socket = require('socket.io')
var connection = require('..common/connection.js')

var server = app.listen(5500,()=>{
    console.log('Sockets On in 5500');
});

socket.on('connection',(socket)=>{
    console.log('Conexão foi criada' + socket.id)
    socket.on(connection.change,(changes)=>{
        socketIo.sockets.emit(connection.change,changes);
    })

    socket.on(connection.create,(newData)=>{
        socketIo.sockets.emit(connection.create,newData);
    })
})