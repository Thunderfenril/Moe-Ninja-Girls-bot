const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('String to see if the bot answer'),
	async execute(interaction) {
		const ownerID="221352736657113088";
		if(ownerID === interaction.user.id){
			return interaction.reply('Yes ?');
		}
	},
};