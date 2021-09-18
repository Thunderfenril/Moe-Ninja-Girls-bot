const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dead')
		.setDescription('Allow to see the dead people'),
	async execute(interaction) {
		if (message.author.id==botOwnerID) {
			for (counter=0; counter<deadList.length; counter++) {
			  message.channel.send((counter+1)+") "+"<@"+deadList[counter]+">"+"\n")
			}
		  } else {
			message.channel.send("You can't see it")
		  }
	},
};