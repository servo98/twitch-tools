/**
 *
 * @param {Client} client
 */
export default (client, tags) => {
  client.say(config.channel, 'Ruleta de la muerte para @' + tags['username']);
  const random = Math.round(Math.random() * 99) + 1;
  client.say(config.channel, 'salió ' + random);
  if (random >= 50) {
    client.timeout(config.channel, tags['username'], 5, 'Por perder la ruleta');
    // client
    //   .ban(config.channel, 'ElRockyMr', 'Por los jajas')
    //   .then(console.log)
    //   .catch(console.error);
  }
};
