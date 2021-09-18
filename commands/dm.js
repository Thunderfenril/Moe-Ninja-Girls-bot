const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dm')
		.setDescription('To give anonymous info'),
	async execute(interaction) {
		if(command === "dm"){ //If the command is |suggestion
            const text = args.join(' ') //We take the args, and do a string with a space between each args
            const creator = client.users.fetch('221352736657113088').then( user => user.send(text)) //We look for the user with this id, then we send the variable text to this user
            console.log(creator)
          }
	},
};