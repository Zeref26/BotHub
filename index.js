const Discord = require('discord.js');
const bot = Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', (message) => {
    if (message.content.startsWith("-")) {
        
    }
});

bot.login(process.ev.TOKEN);