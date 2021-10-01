const { SlashCommandBuilder } = require('@discordjs/builders');
const botownerid=221352736657113088;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		if (interaction.member.id==botownerid){
            interaction.client.channels.cache.get('697617573394776114').send('Good night everybody');
            interaction.client.channels.cache.get('697617573394776114').send('<:NanaoBlanket:706704532742078557> ').then(() => {
            return process.exit(1);
           })
	    }
    }
}