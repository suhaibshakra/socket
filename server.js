var express = require('express'); // Import Node.js core module
var app = express(); 
var server = require('http').createServer(app); 
var socketio = require('socket.io'); 
var io = socketio().listen(server); 


io.on("connection",function(socket){
console.log("socker-id ");
socket.on("disconnect",function(){
console.log("disconnect");
});
socket.on("Message",function(data){
console.log(data.message);
io.emit("Message",data)
});





})

server.listen("8088",function(){
console.log('Node.js web server at port 8088 is running..');
}) //6 - listen for any incoming requests

