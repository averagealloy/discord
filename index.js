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
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	/*
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}boop`) {
		message.channel.send('Beep.');
	}
	else if (message.content.startsWith(`${prefix}blam`)) {
		message.channel.send('Cigarettes on cigarettes, my mama think I stank I got burn holes in my hoodies, all my homies think its dank I miss my cocoa');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	}
	// eslint-disable-next-line no-dupe-else-if
	else if (message.content === `${prefix}server total`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	*/
	//else 
	if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
});


client.login(process.env.TOKEN_KEY);