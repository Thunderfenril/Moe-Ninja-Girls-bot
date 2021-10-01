const { SlashCommandBuilder } = require('@discordjs/builders');
const deadlist = require("../array/deadList.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('revive')
		.setDescription('Ressurect someone dead'),
	async execute(interaction) {
		let index=-1
	   	target=message.mentions.users.first().id
	   	if (target == undefined) return; //Stop the command if no target
	   	for (counter=0; counter<deadList.length; counter++) {
	   	  if (deadlist[counter] === target) {
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