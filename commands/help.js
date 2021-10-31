const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const datahelp=require("../array/dataHelp.js");


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
			case "birthday":
				indexHelp=0;
				break;
			case "changelog":
				indexHelp=1;
				break;
			case "congrats":
				indexHelp=2;
				break;
			case "data":
				indexHelp=3;
				break;
			case "fm":
			case "fight master":
				indexHelp=4;
				break;
			case "gacha":
				indexHelp=5;
				break;
			case "github":
				indexHelp=6;
				break;
			case "hug":
				indexHelp=7;
				break;
			case "ninjutsu":
				indexHelp=8;
				break;
			case "pat":
				indexHelp=9;
				break;
			case "profile":
				indexHelp=10;
				break;
			case "ranking":
				indexHelp=11;
				break;
			case "revive":
				indexHelp=12;
				break;
			case "roll":
				indexHelp=13;
				break;
			case "serverinfo":
				indexHelp=14;
				break;
			case "versus":
				indexHelp=15;
				break;
			case "guide":
			case "walkthrough":
				indexHelp=16;
				break;
			case "whip":
				indexHelp=17;
				break;
			case "zap":
				indexHelp=18;
				break;
    	  
    	  default:
    	    indexHelp=datahelp.length-1;
    	}
    	  embedHelp.setTitle(datahelp[indexHelp][0])
    	  embedHelp.setDescription(datahelp[indexHelp][1])
    	  embedHelp.addFields({name: datahelp[indexHelp][2][0], value: datahelp[indexHelp][2][1]})
    	  embedHelp.addFields({name: datahelp[indexHelp][3][0], value: datahelp[indexHelp][3][1]})
    	  embedHelp.addFields({name: datahelp[indexHelp][4][0], value: datahelp[indexHelp][4][1]})
    	  embedHelp.addFields({name: datahelp[indexHelp][5][0], value: datahelp[indexHelp][5][1]})
    	interaction.user.send({embeds: [embedHelp]});
		return interaction.reply({content:"Help sent", ephemeral: true})
	},
};