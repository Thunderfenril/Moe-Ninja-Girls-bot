const { SlashCommandBuilder } = require('@discordjs/builders');
const deadlist = require("../array/deadList");
const botownerid=221352736657113088;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dead')
		.setDescription('Allow to see the dead people'),
	async execute(interaction) {
		if (interaction.member.id==botownerid) {
			for (counter=0; counter<deadlist.length; counter++) {
			  return interaction.reply((counter+1)+") "+"<@"+deadList[counter]+">"+"\n")
			}
		  } else {
			return interaction.reply("You can't see it")
		  }
	},
};