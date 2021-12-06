const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('election')
		.setDescription('command restricted for the election period.'),
	async execute(interaction) {
		const ownerID="221352736657113088";
		if(ownerID === interaction.user.id){
			interaction.reply('Hi everyone, it has been 4 months now.\nSo for the people who forgot, or the new one in the back.\nIt\'s time for a new election !To make it simple, you will have 1 week to present your candidature, and to do you will just need to react to this message with this reaction: <:JeanneBurrito:871433127212511292>\nSo you will have till the 11th December 11am (GMT+1).');
		}
	},
};