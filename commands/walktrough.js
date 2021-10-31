const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const walkthrougharray = require("../array/walkthrough.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walktrough')
		.setDescription('Walktrough command')
		.addIntegerOption(option =>
			option.setName("chapter")
			.setDescription("The number of the season you want the walkthrough. TCY start at 31. 3.5 is 135; 22.5 is 225")
			.setRequired(true)),
	async execute(interaction) {
		let season = interaction.options.getInteger('chapter'); //We save the season if there is one

		if(0 == season) { //If it's 0, it's a general link
			const walkthroughEmbed = new MessageEmbed() //Creation of the embed
				walkthroughEmbed.setTitle("Summary of all the season")
				for (let index = 0; index < Math.ceil(walkthrougharray.length/2); index++) { //We take half of the season
					walkthroughEmbed.addFields({name: "\u200B", value: "[season "+walkthrougharray[index][0]+"]("+walkthrougharray[index][1]+")", inline: true}) //And create a field, with the name of the season with a link to the guide

					if(0 == index%3){ //To create jump line
						walkthroughEmbed.addFields({name: "\u200B", value: "\u200B", inline: false});
					}

				}
			const walkthroughEmbed2 = new MessageEmbed() //We send it
			for (let index = Math.ceil(walkthrougharray.length/2); index < walkthrougharray.length; index++) {
				console.log("Chapter :"+index)
				walkthroughEmbed2.addFields({name: "\u200B", value: "[season "+walkthrougharray[index][0]+"]("+walkthrougharray[index][1]+")", inline: true})

				if(0 == index%3){
					walkthroughEmbed2.addFields({name: "\u200B", value: "\u200B", inline: false});
				}

			}
			interaction.user.send({embeds: [walkthroughEmbed]});
			interaction.user.send({embeds: [walkthroughEmbed2]});
			return interaction.reply({content: "Walktrough sent", ephemeral: true}); //Ephemeral message so he knows it's on
		}

		//In this case, it's a number different than 0
		let counter = 0;
		let arraySeason=-1;
		for(counter; counter < walkthrougharray.length; counter++) { //For loop to find it
			if(walkthrougharray[counter][0] == season) { //If it correspond, then we save
				arraySeason = counter;
			}
			if((135==season && 13.5 == walkthrougharray[counter][0])|| (225==season && 22.5 == walkthrougharray[counter][0])) { //Case of the season 13.5 and 22.5, cause we use an integer, we have to make another test
				arraySeason = counter;
			}
		}

		if(-1 == arraySeason) { //If it's not found, then we warn the user
			interaction.reply("You must have made an error in the season you selected.\n*Big thanks to the owner of the tumblr blog that allowed me to use his data*");
		} else { //Guide sent in dm, and message to says it has been done
			interaction.reply({content: "Walktrough sent", ephemeral: true})
			return interaction.user.send(walkthrougharray[arraySeason][1]);
		}
	},
};