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
		let target = interaction.options.getUser("target"); //We get the argument

		return interaction.reply("<a:CyPat:655100389779308565>\n*Pat at <@"+ target + ">*") //We send the message, with a mention of the target
	},
};