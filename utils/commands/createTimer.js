import { io } from '../../server.js';

export default (client, tags, hrs, mins, ss, sound) => {
  if (isNaN(hrs) || isNaN(mins) || isNaN(ss)) {
    console.log('Error en los params del comando craeteTimer');
    return;
  }
  io.sockets.emit('createTimer', {
    hrs,
    mins,
    ss,
    sound,
  });
  console.log('timer creado');
};
