const { MessageEmbed } = require('discord.js');
const { logger } = require('lowe');
const client = require('../config/client');
const { commands } = require('../services');

client.on('message', (message) => {
  if (message.author.bot) {
    return;
  }

  if (new RegExp('/start-quiz').test(message.content)) {
    return commands.start(message);
  }

  return;
});
