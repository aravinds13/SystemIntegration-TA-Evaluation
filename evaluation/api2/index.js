const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 3002;

// app.use(express.json());

/*
Receive data from api 1
Multiply by 2
Return new value immediately
*/

app.get('/times-two', (req,res) => {
    let value = req.query?.value;
    
    res.json({"value": `${value*2}`});
})

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//      io.emit('chat message',msg);
//      console.log('message: '+msg);
//     });
//   });

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
