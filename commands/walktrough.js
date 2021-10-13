const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walktrough')
		.setDescription('Walktrough command')
		.addNumberOption(option =>
			option.setName("chapter")
			.setDescription("The number of the season you want the walkthrough")
			.setRequired(true)),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};