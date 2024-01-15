import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import cors from 'cors'
import { Server } from 'socket.io';

const app = express();

app.use(cors({
    origin: ['*']
}));
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});
// const wss = new WebSocket.Server({ server });
// app.get('/example', (req, res) => {
//     res.send({
//         message: 'wow',
//         title: 'no title'
//     });
// });

// WebSocket server event handlers
// wss.on('connection', (ws) => {
//     console.log('WebSocket connection opened', ws.rawListeners);

//     ws.on('message', (message) => {
//         console.log(`Received message: ${message}`, message, message.toString('ascii'));
//         // Handle WebSocket messages here
//     });

//     ws.on('close', () => {
//         console.log('WebSocket connection closed');
//     });
// });

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});
  
const PORT = process?.env?.PORT ?? 8080;

server.listen(PORT, () => {
    console.log(`Express app is running on ${PORT}`);
});
