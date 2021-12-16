const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('election')
		.setDescription('command restricted for the election period.')
		.addRoleOption(option =>
			option.setName("club")
			.setDescription("The club that need to be pinged")
			.setRequired(true)),
	async execute(interaction) {
		const ownerID="221352736657113088";
		if(ownerID === interaction.user.id){
			const club = interaction.options.getRole('club');
			/*
			return interaction.reply('Hi everyone from <@&' + club + '>, it has been 4 months now.\nSo for the people who forgot, or the new one in the back.\nIt\'s time for a new election !To make it simple, you will have 1 week to present your candidature, and to do you will just need to react to this message with this reaction: <:JeanneBurrito:871433127212511292>\nSo you will have till the 11th December 11am (GMT+1).');
			*/
			return interaction.reply("Time for the vote <@&" + club +">.\nSo you will have till next Saturday 11am (GMT+1) to vote.\nAgain, it will be anonymous, and there will be the same rules.\n1)Don't vote for yourself *it still happens*\n2)Put your discord tag, need it for confirmation.\n3)In case of mistake contact the demoted admin.\nHere is the link:https://forms.gle/GSwquCBn99Taerxj7")
		}
	},
};