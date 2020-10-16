require('dotenv').config();
// for token ^^^^^


const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// console.log(process.env);

const prefix = '!';


client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}boop`) {
		message.channel.send('Beep.');
	}
	else if (message.content.startsWith(`${prefix}blam`)) {
		message.channel.send('Cigarettes on cigarettes, my mama think I stank I got burn holes in my hoodies, all my homies think its dankI miss my cocoa');
	}


});

client.login(process.env.TOKEN_KEY);