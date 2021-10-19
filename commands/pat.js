const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat')
		.setDescription('Pat the targetted user')
        .addUserOption(option =>
            option.setName("target")
            .setDescription("The person you want to be patted")
            .setRequired(true)),
	async execute(interaction) {
		
	},
};