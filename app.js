import tmi from 'tmi.js';
import { messageHandler, validateCommand } from './utils/handlerCommand.js';
import config from './utils/config.js';

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

// const client = new tmi.Client({
//   channels: [config.channel],
// });

client.connect();

client.on('message', async (channel, tags, message, self) => {
  if (validateCommand(channel, message, tags)) {
    messageHandler(client, channel, message, tags);
  }
});
