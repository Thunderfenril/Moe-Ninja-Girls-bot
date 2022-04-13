const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription('Embed for the changelog'),
	async execute(interaction) {
		const embedChange = new MessageEmbed() //Creation of an embed
     		.setTitle("Changelog")
     		.setColor(5294200)
     		.setDescription("Changelog for the version 5.2.0.")
     		.addFields({name:"__New feature__",
     		            value:"The project command."})
     		.addFields({name:"__Change in the code__",
     		            value:"None."})
     		.addFields({name:"\u200B",
     		            value:"\u200B"})
     		.addFields({name:"__Plan to do__",
     		            value:"Look below for the corresponding category."})
     		.addFields({name: "*__Change in the code__*",
     		            value:"For the moment nothing is planned.\n",
     		            inline: true})
     		.addFields({name: "*__New Feature__*",
     		            value:"Quiz command, one day, perhaps.\ncc command.",
     		            inline: true})
     		.addFields({name: "Next work ?",
     		            value: "A side project not related to the server.",
     		            inline: true})
   		return interaction.reply({ embeds: [embedChange]});
	},
};