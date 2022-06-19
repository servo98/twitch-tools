const createButton = document.getElementById('create');
const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const seconds = document.getElementById('segundos');
const contadores = document.getElementById('contadores');

const audios = [
  new Audio('./sounds/aña.wav'),
  new Audio('./sounds/gemi2.wav'),
  new Audio('./sounds/pato.wav'),
  new Audio('./sounds/vengo.mp3'),
];

let socket = io('http://localhost:3000');

socket.on('createTimer', (socketId) => {
  createTimer(socketId.hrs, socketId.mins, socketId.ss, socketId.sound);
});

const validFields = (hh, mm, ss) => {
  return (
    hh >= 0 &&
    hh <= 59 &&
    mm >= 0 &&
    mm <= 59 &&
    ss >= 0 &&
    ss <= 59 &&
    !isNaN(hh) &&
    !isNaN(mm) &&
    !isNaN(ss)
  );
};

const secondsToHMS = (seconds) => {
  let d = new Date(null);
  d.setSeconds(seconds);
  let ds = d.toISOString().split('T')[1].split(':');
  return `${ds[0]}-${ds[1]}-${ds[2].slice(0, 2)}`;
};

function createTimer(hh, mm, ss, sound = 0) {
  if (!validFields(hh, mm, ss)) {
    console.log('Error datos inválidos para crear contador');
    return;
  }
  let s = Number(hh) * 60 * 60 + Number(mm) * 60 + Number(ss) + 1;
  console.log(hh, mm, ss, 'Creando contador de', s, 'segundos');

  const tag = document.createElement('p');

  let id = setInterval(() => {
    if (s > 0) {
      console.log(secondsToHMS(--s));
      tag.innerHTML = secondsToHMS(s);
    } else {
      socket.emit('timerEnd');

      console.log(`Contador terminado: ${id}`);
      audios[+sound - 1].play();
      clearInterval(id);
      tag.remove();
    }
  }, 1000);

  tag.setAttribute('id', `span-${id}`);
  contadores.appendChild(tag);
}
