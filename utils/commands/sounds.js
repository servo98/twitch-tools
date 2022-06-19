import config from '../config.js';
export default (client, tags) => {
  client.say(
    config.channel,
    `Los sonidos disponibles son
  
      1.- aña |
      2.- gemi2 |
      3.- pato |
      4.- vengo`
  );

  // 1.- gemidos ✅
  // 2.- aña ✅
  // 3.- uno mío?
  // 4.- oh me vengo ✅
  // 5.- miau
  // 6.- risa
  // 7.- pato ✅`
};
