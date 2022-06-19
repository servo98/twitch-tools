import createTimer from './createTimer.js';
import ruleta from './ruleta.js';
import sounds from './sounds.js';

const wrapper = (client, tags, params, fn) => {
  try {
    fn(client, tags, ...params);
  } catch (error) {
    console.error('Error en el wrapper', error);
  }
};

export default {
  createTimer,
  sounds,
  ruleta,
};

export { wrapper };
