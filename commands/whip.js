const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('To whip something'),
	async execute(interaction) {
		const taggedUser = message.mentions.users.first(); //We get the first mention
            if (taggedUser!==undefined) { //If taggedUser is not undefined...
        if (taggedUser.id === message.author.id) { //If the author of the message tagged himself...
          message.channel.send("<@"+message.author.id+"> is a masochistic pervert."); //We send this message
          message.channel.send('<a:RanExposed:745341250852356186>')
        } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
          message.channel.send("*Focus*").then((msg) => { //We send a message, and we will..
            setTimeout(function() { msg.edit("Mega whip on <@"+message.author.id+">"); //edit the message...
          }, 1000) //after 1s
          })
        } else {
          message.channel.send("Whip at <@"+taggedUser+">")
          message.channel.send("<a:LMyuWhip1:676408951537139732><a:LMyuWhip2:676409245263986731>")
        }
        } else if(taggedUser === undefined){
        message.channel.send("Whip at "+args.join(' '))
        } else {
        message.channel.send("Whip on everybody")
        } 
	},
};