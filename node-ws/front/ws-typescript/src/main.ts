import './style.css'

import { io } from "socket.io-client";

const socket = io('ws://localhost:8080');


console.log(socket);

// const app = document.getElementById('app');
// 
