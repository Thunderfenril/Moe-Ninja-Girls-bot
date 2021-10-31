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
		let index=-1;
	   	target=interaction.options.getUser('target') //We get the mention

		if(deadlist.length == 0){ //Check if someone is dead
			return interaction.reply("Nobody is dead so far.");
		}

		if(target == interaction.user.id) { //Check if the person mentionned himself
			return interaction.reply("You can't revive yourself.");
		}

	   	for (counter=0; counter<deadlist.length; counter++) { //For loop through the dead people
	   	  	if (deadlist[counter] === target.id) { //Test if we found the person in the list or not
	   	    	index=counter;
	   	  	}
	   	}

	   	if (index === -1) { //If not found, the person isn't dead yet
	   	  return interaction.reply("<@"+target+">"+" isn't dead *yet*");
	   	} else { //The person has been found
		  deadlist.splice(index, 1); //We delete this person from the list
	   	  return interaction.reply("<@"+target+">"+" has been ressurected !");
	   	}
	},
};