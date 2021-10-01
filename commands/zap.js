const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('zap')
		.setDescription('To zap something'),
	async execute(interaction) {
		const taggedUser = message.mentions.users.first(); //We get the first mention
        if (taggedUser!==undefined) { //If taggedUser is not undefined...
          if (taggedUser.id === interaction.member.id) { //If the author of the message tagged himself...
            return interaction.reply("<@"+interaction.member.id+"> is a masochistic Hentai."); //We send this message
            return interaction.reply('<a:EnjuZap:653780228933681192>')
          } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
            return interaction.reply("*Focus*").then((msg) => { //We send a message, and we will..
              setTimeout(function() { msg.edit("Mega zap on <@"+interaction.member.id+">"); //edit the message...
            }, 1000) //after 1s
            })
          } else {
            return interaction.reply("Zap at <@"+taggedUser+">")
          }
        } else if(taggedUser === undefined){
          return interaction.reply("Zap at "+args.join(' '))
        } else {
          return interaction.reply("Zap on everybody")
        }
	},
};