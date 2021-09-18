const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Send a string'),
	async execute(interaction) {
		await interaction.reply("Moshi moshi, Police desu ka ?");
	},
};