const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gacha')
		.setDescription('Send a string'),
	async execute(interaction) {
		return interaction.reply("Rate up is a lie");
	},
};