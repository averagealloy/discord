require('dotenv').config();
// for token ^^^^^


const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// console.log(process.env);

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
	else if (message.content === '!boop') {
		message.channel.send('Beep.');
	}
});

client.login(process.env.TOKEN_KEY);