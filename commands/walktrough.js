const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('walktrough')
		.setDescription('Walktrough command'),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};