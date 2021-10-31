const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');


const dataroll = require("../array/dataRoll.js");
const func = require("../function/function.js");
const datacharac = require("../array/data.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('The gacha simulator')
    .addStringOption(option =>
      option.setName("category")
      .setDescription("The category you wish to roll for")
      .setRequired(true)
      .addChoice("The body category", "body")
      .addChoice("The tools category", "tools"))
    .addIntegerOption(option =>
      option.setName("quantity")
      .setDescription("The number of rolls")
      .setRequired(true)
      .addChoice("Single roll", 1)
      .addChoice("Multi roll", 10)),
	async execute(interaction) {
		//if(message.channel.name==="spam-only"||message.channel.name==="cy’s-playground"){

            const numberOfRoll = interaction.options.getInteger("quantity"); //We save the number of roll the user want to do
      
            if((numberOfRoll>1 && numberOfRoll<10) || numberOfRoll>10){ //If it isn't 1 or 10, we say no
              message.reply({content: "You have to input either 1 or 10 in order to roll, not "+numberOfRoll+".", allowedMentions: { repliedUser: true}});
            } else {
      
              let tabPity = []; //Array that will own the value of the random rarity for the pity system
              let tabResult = []; //Array that will own the result of the rolls
      
              let currentRoll = 1; //We track at which roll we are
              var randomRarity; //Random rarity
              var randomObject; //Random object taken from the rarity
              let randomCharacter = Math.floor(Math.random()*datacharac.length); //A random character in the data array
              let randomColor = Math.floor(Math.random()*16777214)+1; //Random color between 1 and 16777215
      
              let indexPity = 0;
              let indexRarity = -1;
      
              let pityBool = true; //Boolean to know if we can have access to the pity or not.
      
              let category = interaction.options.getString("category"); //We save which category it is
      
              while (currentRoll<=numberOfRoll) { //Loop until we have done the same amount of roll than the one chosen
                if(pityBool){ //It's the normal case
                  randomRarity = Math.floor(Math.random()*100);
                }
      
                if(currentRoll == 10) { //If we are at the tenth roll...
                  for(indexPity; indexPity < tabPity.length; indexPity++){ //We will loop through the array tabPity...
                    if(tabPity[indexPity] < 20){ //We look if we have an object with a rarity at 3* or 4*
                      pityBool=false; //If we have one, then we will won't change the value of pityBool
                    }
                  }
                  if(pityBool){ //If we don't have one, we will reroll randomRarity with an int between 0 and 19
                    randomRarity = Math.floor(Math.random()*20);
                  }
                }
      
                if(randomRarity<5){
                  indexRarity=0; //4*
                } else if(randomRarity<20){
                  indexRarity=1; //3*
                } else {
                  indexRarity=2; //2*
                }
      
                tabPity.push(randomRarity); //We push the value in the tab for the pity.
      
                switch (category) {
                  case "tool":
                  case "tools":
                    randomObject= Math.floor(Math.random()*dataroll[0][indexRarity].length); //Random number between 0 and the number of item in the array
                    tabResult.push(dataroll[0][indexRarity][randomObject]); //We push the texte in the array of the result
                    break;
                  case "body":
                    randomObject= Math.floor(Math.random()*dataroll[1][indexRarity].length); //Random number between 0 and the number of item in the array
                    tabResult.push(dataroll[1][indexRarity][randomObject]); //We push the texte in the array of the result
                    break;
      
                }
                currentRoll++; //We incremente the value because we go to the next roll
              }
      
              if(numberOfRoll==10){
                func.shuffle(tabResult); //We shuffle if we made 10 rolls
              }
              const embedRoll = new MessageEmbed()
                embedRoll.setAuthor("Salt Dispenser")
                embedRoll.setTitle("Result of your roll")
                embedRoll.setThumbnail(datacharac[randomCharacter][13])
                embedRoll.setColor(randomColor)
                for(counterRoll=0; counterRoll < tabResult.length; counterRoll++){ //We will create as many fields as there is of item in tabResult
                  embedRoll.addFields({name: "Roll number "+(counterRoll+1)+":", value: tabResult[counterRoll]})
                }
              return interaction.reply({ embeds: [embedRoll]})
            }
          //}
	},
};