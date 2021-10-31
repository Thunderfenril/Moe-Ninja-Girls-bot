const { SlashCommandBuilder } = require('@discordjs/builders');
const botownerid="221352736657113088";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sleep')
		.setDescription('Command to put the bot to sleep'),
	async execute(interaction) {
		if (interaction.member.id==botownerid){			
            interaction.client.channels.cache.get('697617573394776114').reply('Good night everybody');
            interaction.client.channels.cache.get('697617573394776114').followUp('<:NanaoBlanket:706704532742078557> ')
			return process.exit(1)
	    }
    }
}