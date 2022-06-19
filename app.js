import tmi from 'tmi.js';
import { messageHandler } from './utils/handlerCommand.js';
import config from './utils/config.js';
import { initServer } from './server.js';

initServer();

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: config.botName,
    password: config.twitchToken,
  },
  channels: [config.channel],
});

client.connect();

client.on('message', async (_, tags, message) => {
  console.log('Mensaje en twitch');
  if (message[0] === config.prefix) {
    messageHandler(client, tags, message);
  }
});

export { client };
