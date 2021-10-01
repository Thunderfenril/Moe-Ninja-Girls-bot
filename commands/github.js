const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('The github command'),
	async execute(interaction) {
		return interaction.reply("https://github.com/SeibaUrufu/Moe-Ninja-Girls-bot")
	},
};