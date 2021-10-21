const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Embed sent to give info on the commands')
		.addStringOption(option =>
			option.setName('command')
			.setDescription("The name of the command you want the help. If there is no name, it will be a summary of all.")
			.setRequired(false)),
	async execute(interaction) {
		const help = interaction.options.getString('command'); //We get the argument if it exist
    	let indexHelp = -1;
    	const embedHelp = new MessageEmbed() //We will create a new embed
    	  embedHelp.setColor(5294200) //We set the color of the embed
    	switch (help) { //We look for the value stored in help
    	  case "changelog":
    	    indexHelp=0;
    	    break;
    	  case "gacha":
    	    indexHelp=1
    	    break;
    	  case "hug":
    	    indexHelp=2;
    	    break;
    	  case "congrats":
    	    indexHelp=3;
    	    break;
    	  case "roll":
    	    indexHelp=4;
    	    break;
    	  case "profile":
    	    indexHelp=5;
    	    break;
    	  case "data":
    	    indexHelp=6;
    	    break;
    	  case "ranking":
    	    indexHelp=7
    	    break;
    	  case "dm":
    	    indexHelp=8;
    	    break;
    	  case "whip":
    	  case "zap":
    	    indexHelp=9;
    	    break;
    	  case "birthday":
    	    indexHelp=10;
    	    break;
    	  case "ninjutsu":
    	    indexHelp = 11;
    	    break;
    	  case "fight master":
    	  case "fm":
    	    indexHelp = 12 ;
    	    break;
    	  case "versus":
    	    indexHelp = 13;
    	    break;
		  case "github":
			indexHelp=14;
			break;
    	  default:
    	    indexHelp=dataHelp.length-1;
    	}
    	  embedHelp.setTitle(dataHelp[indexHelp][0])
    	  embedHelp.setDescription(dataHelp[indexHelp][1])
    	  embedHelp.addFields({name: dataHelp[indexHelp][2][0], value: dataHelp[indexHelp][2][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][3][0], value: dataHelp[indexHelp][3][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][4][0], value: dataHelp[indexHelp][4][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][5][0], value: dataHelp[indexHelp][5][1]})
    	message.author.send(embedHelp);
	},
};