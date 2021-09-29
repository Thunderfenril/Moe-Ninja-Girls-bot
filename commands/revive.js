const { SlashCommandBuilder } = require('@discordjs/builders');
const deadList = require("../array/deadList.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('revive')
		.setDescription('Ressurect someone dead'),
	async execute(interaction) {
		let index=-1
	   	target=message.mentions.users.first().id
	   	if (target == undefined) return; //Stop the command if no target
	   	for (counter=0; counter<deadList.length; counter++) {
	   	  if (deadList[counter] === target) {
	   	    index=counter
	   	  }
	   	}
	   	if (index === -1) {
	   	  message.channel.send("<@"+target+">"+" isn't dead *yet*")
	   	} else {
	   	  message.channel.send("<@"+target+">"+" has been ressurected !")
	   	  deadList.splice(index, 1)
	   	}
	},
};