const express = require('express');
const app = express();
const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

// io.on("connection", function (socket) {
//     console.log("New User connected")

//     // Send data server to client

//     // socket.send("Server to client data send");
//     // setInterval(function () {
//     //     let date = new Date();
//     //     let time = date.getTime();

//     //     socket.emit('myEvent', time);

//     // }, 10);

//     //Recieve data client to server

//     // socket.on('myName', function (msg) {
//     //     console.log(msg);
//     // });

//     //Send socket id server to client

//     // socket.send(socket.id);

//     //Broadcast data

//     // io.sockets.emit('myBroadcast', 'Hello Everyone!');

// });

let buyRoom = io.of('/buy');
buyRoom.on('connection', function (socket) {
    // Broadcast room

    buyRoom.emit('room', 'Hello Everyone Buy');
});

let sellRoom = io.of('/sell');
sellRoom.on('connection', function (socket) {
    // Broadcast room

    sellRoom.emit('room', 'Hello Everyone Sell');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(3000, function () {
    console.log("Server is running at 3000");
});