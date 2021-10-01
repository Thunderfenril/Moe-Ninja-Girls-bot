const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('To whip something'),
	async execute(interaction) {
		const taggedUser = message.mentions.users.first(); //We get the first mention
            if (taggedUser!==undefined) { //If taggedUser is not undefined...
        if (taggedUser.id === interaction.member.id) { //If the author of the message tagged himself...
          return interaction.reply("<@"+interaction.member.id+"> is a masochistic pervert."); //We send this message
          return interaction.reply('<a:RanExposed:745341250852356186>')
        } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
          return interaction.reply("*Focus*").then((msg) => { //We send a message, and we will..
            setTimeout(function() { msg.edit("Mega whip on <@"+interaction.member.id+">"); //edit the message...
          }, 1000) //after 1s
          })
        } else {
          interaction.reply("Whip at <@"+taggedUser+">")
          return interaction.reply("<a:LMyuWhip1:676408951537139732><a:LMyuWhip2:676409245263986731>")
        }
        } else if(taggedUser === undefined){
        return interaction.reply("Whip at "+args.join(' '))
        } else {
        return interaction.reply("Whip on everybody")
        } 
	},
};