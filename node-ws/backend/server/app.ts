import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import cors from 'cors'
const app = express();
app.use(cors({
    origin: ['*']
}));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.get('/example', (req, res) => {
    res.send({
        message: 'wow',
        title: 'no title'
    });
});

// WebSocket server event handlers
wss.on('connection', (ws) => {
    console.log('WebSocket connection opened');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Handle WebSocket messages here
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

const PORT = process?.env?.PORT ?? 8080;

server.listen(PORT, () => {
    console.log(`Express app is running on ${PORT}`);
});
