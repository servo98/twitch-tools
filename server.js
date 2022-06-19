import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.sendFile('public/index.html', { root: '.' });
});

app.use(express.static('public'));

app.get('/index.js', (_, res) => {
  res.sendFile('public/index.js', { root: '.' });
});
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
  socket.on('timerEnd', () => {
    console.log('Timer acabado');
  });
  console.log('Usuari conectado');
});

server.on('listening', () => {
  console.log('Server ejecutando en 3000', 'http://localhost:3000');
});

const initServer = () => {
  server.listen(3000);
};

export { io, initServer };
