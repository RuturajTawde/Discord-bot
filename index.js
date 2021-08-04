// connect discord js
const Discord = require('discord.js');
const client = new Discord.Client();

// any new command register here
const register = require('./register');

require('dotenv').config();

// login bot client with bot token
client.login(process.env.BOT_TOKEN);

// if bot is ready (event listener)
client.on('ready', () => {
    console.log('Beep Boop!! I am ready :)')
})

// take input msg from server and send it to register
client.on('message', register);