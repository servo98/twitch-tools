import dotenv from 'dotenv';

dotenv.config();

export default {
  twitchToken: process.env.TOKEN,
  prefix: process.env.PREFIX,
  channel: process.env.CHANNEL,
  botName: process.env.BOT_NAME,
};
