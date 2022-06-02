import { io } from '../server.js';
import { client } from '../app.js';

const createTimer = (hrs, mins, ss) => {
  if (isNaN(hrs) || isNaN(mins) || isNaN(ss)) {
    console.log('Error en los params del comando craeteTimer');
    return;
  }
  io.sockets.emit('createTimer', {
    hrs,
    mins,
    ss,
  });
  console.log('timer creado');
};

const commands = {
  createTimer,
};

export default (command, ...params) => {
  commands[command](...params);
};
