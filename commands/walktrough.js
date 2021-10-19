const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const walkthrougharray = require("../array/walkthrough.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walktrough')
		.setDescription('Walktrough command')
		.addNumberOption(option =>
			option.setName("chapter")
			.setDescription("The number of the season you want the walkthrough. The first season of the TCY is 31")
			.setRequired(true)),
	async execute(interaction) {
		let season = interaction.options.getNumber('chapter');

		if(0 == season) {
			const walkthroughEmbed = new MessageEmbed()
				walkthroughEmbed.setTitle("Summary of all the season")
				for (let index = 0; index < walkthrougharray.length; index++) {
					walkthroughEmbed.addFields({name: "\u200B", value: "[season "+index+"]("+walkthrougharray[index][1]+")", inline: true})

					if(0 = index%3 && index > 0){
						walkthroughEmbed.addFields({name: "\u200B", value: "\u200B", inline: false});
					}

				}
			return interaction.user.send({embeds: [walkthroughEmbed]});
		}

		let counter = 0;
		let arraySeason=-1;
		for(counter; counter < walkthrougharray.length; counter++) {
			if(walkthrougharray[counter][0] == season) {
				arraySeason = counter;
			}
		}

		if(-1 == arraySeason) {
			interaction.reply("You must have made an error in the season you selected.\n*Big thanks to the owner of the tumblr blog that allowed me to use his data*");
		} else {
			interaction.user.send(walkthrougharray[arraySeason][1]);
		}
	},
};