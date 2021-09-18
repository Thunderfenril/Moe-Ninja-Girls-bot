const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Embed sent to give info on the commands'),
	async execute(interaction) {
		const help = args[0]; //Look if there is an argument.
    	let indexHelp = -1;
    	const embedHelp = new Discord.MessageEmbed() //We will create a new embed
    	  embedHelp.setColor(5294200) //We set the color of the embed
    	switch (help) { //We look for the value stored in help
    	  case "tips":
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
    	  default:
    	    indexHelp=dataHelp.length-1;
    	}
    	  embedHelp.setTitle(dataHelp[indexHelp][0])
    	  embedHelp.setDescription(dataHelp[indexHelp][1])
    	  embedHelp.addFields({name: dataHelp[indexHelp][2][0], value: dataHelp[indexHelp][2][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][3][0], value: dataHelp[indexHelp][3][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][4][0], value: dataHelp[indexHelp][4][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][5][0], value: dataHelp[indexHelp][5][1]})
    	  embedHelp.addFields({name: dataHelp[indexHelp][6][0], value: dataHelp[indexHelp][6][1]})
    	message.author.send(embedHelp);
	},
};