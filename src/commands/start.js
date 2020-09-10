const { MessageEmbed } = require('discord.js');
const { logger } = require('lowe');
const client = require('../config/client');

client.on('message', async (message) => {
  message.channel.send('Roi, Rotaract né?! Vamos começar?');
  message.channel.send(`
    \n\nAs regras são as seguintes:
    
    👉🏻  Você terá que digitar ou o nome do artista ou o nome da música, e caso você acertar o ano de lançamento da música ganhará um bônus 
    👉🏻  Serão 10 músicas por rodada
    👉🏻  Última e não menos importante, SE DIVIRTAM!!!

    PONTUAÇÃO:
    
    ▸  Acertar o nome da música - 1 ponto
    ▸  Acertar o nome do artista - 1 ponto
    ▸  Acertar o nome do artista e da música - 3 pontos
    ▸  Acertar o ano da música - 5 pontos

    Que começem os jogos!
    `);
  const image = new MessageEmbed().setImage(
    'https://media.giphy.com/media/1qnuGtWiouZUI/giphy.gif',
  );
  message.channel.send(image);

  try {
    let counter = 0;

    function loop() {
      setTimeout(async () => {}, 20000);
    }
  } catch (error) {
    logger.error(error);
    message.channel.send(
      'Vixi, aconteceu um erro aqui, me perdoem, podem cobrar o @nelsonsinis para olhar o que houve! 😩',
    );
  }
});
