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
export const messageHandler = (client, channel, message, tags) => {
  try {
    const fullCommand = message.replace(config.prefix, '').split(' ');
    execCommand(...fullCommand);
  } catch (error) {
    console.error('OCURRIÓ UN ERROR', error);
  }
  console.log(`${tags['display-name']}: ${message}`);
};

export const validateCommand = (channel, message, tags) => {
  const a = tags['username'] === config.channel || tags['mod'];
  const b = message[0] === config.prefix;
  return a && b;
};
