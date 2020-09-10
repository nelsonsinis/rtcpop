const { Client } = require('discord.js');
const { logger } = require('lowe');

const client = new Client({
  allowedMentions: false,
});

client.on('ready', () => logger.info('Bot is running'));

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
