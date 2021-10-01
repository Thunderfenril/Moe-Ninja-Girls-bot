const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription('Embed for the changelog'),
	async execute(interaction) {
		const embedChange = new MessageEmbed()
     		.setTitle("Changelog")
     		.setColor(5294200)
     		.setDescription("Changelog for the version 5.0.0.")
     		.addFields({name:"__New feature__",
     		            value:"The serverinfo command.\nThe walktrough command.\nThe github command."})
     		.addFields({name:"__Change in the code__",
     		            value:"Updated to discord V13.\nThe / commands.\nThe tips command has been removed"})
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