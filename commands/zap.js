const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zap')
		.setDescription('To zap something'),
	async execute(interaction) {
		const taggedUser = message.mentions.users.first(); //We get the first mention
        if (taggedUser!==undefined) { //If taggedUser is not undefined...
          if (taggedUser.id === message.author.id) { //If the author of the message tagged himself...
            message.channel.send("<@"+message.author.id+"> is a masochistic Hentai."); //We send this message
            message.channel.send('<a:EnjuZap:653780228933681192>')
          } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
            message.channel.send("*Focus*").then((msg) => { //We send a message, and we will..
              setTimeout(function() { msg.edit("Mega zap on <@"+message.author.id+">"); //edit the message...
            }, 1000) //after 1s
            })
          } else {
            message.channel.send("Zap at <@"+taggedUser+">")
          }
        } else if(taggedUser === undefined){
          message.channel.send("Zap at "+args.join(' '))
        } else {
          message.channel.send("Zap on everybody")
        }
	},
};