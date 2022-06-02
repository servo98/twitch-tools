import tmi from 'tmi.js';
import { messageHandler, validateCommand } from './utils/handlerCommand.js';
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

client.on('message', async (channel, tags, message, self) => {
  console.log('Mensaje en twitch');
  if (validateCommand(channel, message, tags)) {
    messageHandler(client, channel, message, tags);
  }
});

export { client };
