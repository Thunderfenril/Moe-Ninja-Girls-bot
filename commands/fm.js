const { SlashCommandBuilder } = require('@discordjs/builders');
const fmData = require("../array/fmData");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fm')
		.setDescription('The fight master command'),
	async execute(interaction) {
		//Creation of the variable
		let valueStage;
		let valueWeakness;
		let valueFire;
		let valueIce;
		let valueThunder;
		let valueLevel;
		let valueShuriken;
	 
		//We collect the data through the function fmCollector, to keep the command short
		message.reply("Which stage do you select ?\n*Just need to input a number, final stage is 10.*").then(message => {setTimeout(() => message.delete(), 30000)});
		const collector = new Discord.MessageCollector( message.channel, { filterFm, max: 1, time: 60000 });
		collector.on('collect', message => {
		  if ((message.content>=1) && (message.content<=10)){
			valueStage = message.content;
			message.reply("What is the weakness of the stage ? *(fire, ice or thunder only)*").then(message => {setTimeout(() => message.delete(), 30000)}); //Message will delete after 1minute
			const collector = new Discord.MessageCollector(message.channel, { filterFm, max: 1, time: 60000 });
			collector.on('collect', message => {
			  let valueWeak = message.content.toLowerCase();
			  if((valueWeak=="fire")||(valueWeak=="ice")||(valueWeak=="thunder")){
				valueWeakness = valueWeak;
				message.reply("What is the value of your fire power ?").then(message => {setTimeout(() => message.delete(), 30000)});
				const collector = new Discord.MessageCollector(message.channel, { filterFm, max: 1, time: 60000 });
				collector.on('collect', message => {
				  if (message.content < 0) { //Protection for negative answer
					message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
					return;
				  }
				  valueFire = message.content;
				  message.reply("What is the value of your ice power ?").then(message => {setTimeout(() => message.delete(), 30000)});
				  const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
				  collector.on('collect', message => {
				   if (message.content < 0) {
					 message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
					 return;
				   }
					valueIce = message.content;
					message.reply("What is the value of your thunder power ?").then(message => {setTimeout(() => message.delete(), 30000)});
					const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
					collector.on('collect', message => {
					 if (message.content < 0) {
					   message.reply("You can't have a negative power, **baka**.\nEnd of the command.");
					   return;
					 }
					  valueThunder = message.content;
					  message.reply("What is your current level ?").then(message => {setTimeout(() => message.delete(), 30000)});
					  const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
					  collector.on('collect', message => {
					   if (message.content < 1) {
						 message.reply("You can't have a negative level or a level at 0, **baka**.\nEnd of the command.");
						 return;
					   }
						valueLevel = message.content;
						message.reply("How much Shuriken do you own ?").then(message => {setTimeout(() => message.delete(), 30000)});
						const collector = new Discord.MessageCollector(message.channel,  { filterFm, max: 1, time: 60000 });
						collector.on('collect', message => {
						 if (message.content < 0) {
						   message.reply("You can't have a negative amount of shuriken, **baka**.\nEnd of the command.");
						   return;
						 }
						  valueShuriken=message.content;
	 
						  //New variable for the sake of the calcul
						  let valuePower;
						  let valuePowerJuice;
						  let stageHealth;
						  let counterLimit;
						  let numberTurn;
						  let numberTurnJuice;
	 
						  //We calcul the total power of the author based on the weakness of the stage
						  let powerFire = parseInt(valueFire, 10);
						  let powerIce = parseInt(valueIce, 10);
						  let powerThunder = parseInt(valueThunder, 10);
						  let powerLevel = parseInt(valueLevel, 10);
						  let powerShuriken = parseInt(valueShuriken, 10);
	 
						  //We make the calcul to know the power of  the user
						  if (valueWeakness == "fire") {
							valuePower = powerFire *2 + powerIce + powerThunder + powerLevel + powerShuriken;
							valuePowerJuice = powerFire *3 + powerIce + powerThunder + powerLevel + powerShuriken;
						  } else if (valueWeakness == "ice") {
							valuePower = powerFire + powerIce*2 + powerThunder + powerLevel + powerShuriken;
							valuePowerJuice = powerFire + powerIce*3 + powerThunder + powerLevel + powerShuriken;
						  } else if ( valueWeakness == "thunder" ) {
							valuePower = powerFire + powerIce + powerThunder*2 + powerLevel + powerShuriken;
							valuePowerJuice = powerFire + powerIce + powerThunder*3 + powerLevel + powerShuriken;
						  } else {
							message.channel.send("error");
							return;
						  }
	 
	 
						  //For loop so we can take the value of the selected stage
						  for(counterFor = 0; counterFor < fmData.length; counterFor++){
							if(valueStage == (counterFor+1)){
							  stageHealth = fmData[counterFor][0];
							  counterLimit = fmData[counterFor][1];
							}
						  }
	 
						  //We make the calculation of the number of turns required
						  numberTurn = Math.ceil(stageHealth/valuePower);
						  numberTurnJuice = Math.ceil(stageHealth/valuePowerJuice);
	 
						  //Return the result
						  if((numberTurn>counterLimit) && (numberTurnJuice>counterLimit)) {
							message.reply("You can't beat the stage.\nYou would need "+numberTurn+" turns without juice and "+numberTurnJuice+" turns with juice.\nThe stage has a "+counterLimit+" turns limit.")
						  } else if ((numberTurn>counterLimit) && (numberTurnJuice<=counterLimit) ) {
							message.reply("You can't beat the stage without juice.\nYou would need "+numberTurn+" turns without them, and "+numberTurnJuice+" turns with it.\nThe stage has a "+counterLimit+" turns limit.\nUse a "+valueWeakness+" juice to beat it.")
						  } else if (numberTurn<=counterLimit) {
							message.reply("You can beat the stage in "+numberTurn+" turns without juice.")
						  } else {
							message.channel.send("Error <@"+botOwnerID+">")
							message.channel.send("numberTurn: "+numberTurn+"\nnumberTurnJuice: "+numberTurnJuice+"\ncounterLimit: "+counterLimit+"\nvaluePower: "+valuePower+"\nvaluePowerJuice: "+valuePowerJuice+"\nStage: "+valueStage)
						  }
	 
						})
					  })
					})
				  })
				})
			  } else {
				message.reply("This weakness doesn't exist")
			  }
			})
		  } else {
		  message.reply("This stage doesn't exist.\nEnd of the command.");
		}
	  })
	},
};