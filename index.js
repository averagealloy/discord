require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// console.log(process.env);

client.on('message', message => {
	// console.log(message.content);
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login(process.env.TOKEN_KEY);