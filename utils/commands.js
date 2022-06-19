import cmds, { wrapper } from './commands/index.js';
import { Client } from 'tmi.js';

const commands = {
  sounds: {
    command: cmds.sounds,
    roles: ['owner', 'mod'],
  },
  createTimer: {
    command: cmds.createTimer,
    roles: ['owner', 'mod'],
  },
  ruleta: {
    command: cmds.ruleta,
    roles: ['owner', 'mod', 'vip', 'sub', 'viewer'],
  },
};

const getRole = (tags) => {
  if (tags.badges.broadcaster) {
    return 'owner';
  }
  if (tags.mod) {
    return 'mod';
  }
  if (tags.badges.vip) {
    return 'vip';
  }
  if (tags.badges.subscriber) {
    return 'sub';
  }
  return 'viewer';
};

/**
 *
 * @param {Client} client
 * @param {*} channel
 * @param {*} tags
 * @param {*} command
 * @param {[]} params
 */
export default (client, tags, commandStr, params) => {
  const role = getRole(tags);
  const commandObj = commands[commandStr];
  if (!commandObj) return;
  if (commandObj.roles.includes(role)) {
    wrapper(client, tags, params, commandObj.command);
  }
};
