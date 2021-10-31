const { SlashCommandBuilder } = require('@discordjs/builders');
const deadlist = require("../array/deadList.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('revive')
		.setDescription('Ressurect someone dead')
		.addUserOption(option=>
			option.setName('target')
			.setDescription("The one you wish to revive")
			.setRequired(true)),
	async execute(interaction) {
		let index=-1
	   	target=interaction.options.getUser('target')

		if(deadlist.length == 0){
			return interaction.reply("Nobody is dead so far.")
		}

		if(target == interaction.user.id) {
			return interaction.reply("You can't revive yourself.");
		}

	   	for (counter=0; counter<deadlist.length; counter++) {
	   	  	if (deadlist[counter] === target.id) {
	   	    	index=counter
	   	  	}
	   	}

	   	if (index === -1) {
	   	  return interaction.reply("<@"+target+">"+" isn't dead *yet*")
	   	} else {
		  deadlist.splice(index, 1)
	   	  return interaction.reply("<@"+target+">"+" has been ressurected !")
	   	}
	},
};