import { Client } from 'tmi.js';
import config from './config.js';
import execCommand from './commands.js';

/**
 *
 * @param {Client} client
 * @param {*} channel
 * @param {*} message
 * @param {*} tags
 */
export const messageHandler = (client, tags, message) => {
  try {
    const params = message.replace(config.prefix, '').split(' ');
    const command = params.shift();
    execCommand(client, tags, command, params);
  } catch (error) {
    console.error('OCURRIÓ UN ERROR', error);
  }
};
