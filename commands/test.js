const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('String to see if the bot answer'),
	async execute(interaction) {
        if (message.author.id==botOwnerID){
            await interaction.reply('Yes ?');
          }
	},
};