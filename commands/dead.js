const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const deadlist = require("../array/deadList");
const botownerid="221352736657113088";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dead')
		.setDescription('Allow to see the dead people'),
	async execute(interaction) {
		if (interaction.user.id==botownerid) {
			let deadEmbed = new MessageEmbed()
			deadEmbed.setTitle("The cemetery")
			for (counter=0; counter<deadlist.length; counter++) {
				deadEmbed.addFields({name: "Dead number "+(counter+1), value:"<@"+deadlist[counter]+">"})
			}
			return interaction.reply({embeds: [deadEmbed]});
		  } else {
			return interaction.reply("You can't see it")
		  }
	},
};