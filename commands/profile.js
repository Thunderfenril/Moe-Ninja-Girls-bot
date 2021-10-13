const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');


const datainfo = require("../array/data.js");
const func = require("../function/function.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Send an embed with the information of a girl')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Name of the person you want the profile')
        .setRequired(true)),
	async execute(interaction) {
    
		if (!args.length) { //Test if there is an argument or not
            return interaction.reply( //Send an reply to the author of the command call
              `You didn't provide any arguments, baka, ${message.author}!`
            );
          }
      
          let indexPosition = func.givePositionIndex(args[0]); //We use a function to get the position of the girl in the list
      
          if(indexPosition === -1){
            return interaction.reply("Are you sure you didn't made a mistake in the name ?")
            return; //If not found, then we stop the execution
          }
      
          const monthString = func.monthToString(datainfo[indexPosition][2][1]) //Call to the function monthToString, to get a String with the name of the month
      
          if(indexPosition!=-1){ //If the girl was found, then we create an embed
            const embedTest = new MessageEmbed()
              .setTitle(datainfo[indexPosition][0]+ " "+ datainfo[indexPosition][1])
              .setColor(datainfo[indexPosition][14])
              .setFooter(datainfo[indexPosition][0]+" "+datainfo[indexPosition][1]+" profile page")
              .setThumbnail(datainfo[indexPosition][13])
              .setImage(datainfo[indexPosition][13])
              .addFields({name: "Unique gift:",
                          value: datainfo[indexPosition][6][0]})
              .addFields({name: "Normal gifts:",
                          value: datainfo[indexPosition][6][1]})
              .addFields({name:"\u200B",
                          value:"\u200B"})
              .addFields({name:"Trivia",
                          value:"\nSeyuu: "+datainfo[indexPosition][7]+"\nThree sizes: "+datainfo[indexPosition][5][0]+"/"+datainfo[indexPosition][5][1]+"/"+datainfo[indexPosition][5][2]+"\nBust Size: "+datainfo[indexPosition][5][3]+"\nBirthday: "+datainfo[indexPosition][2][0]+" "+monthString+"\nZodiac sign: "+datainfo[indexPosition][3]+"\nEye color: "+datainfo[indexPosition][8]+"\nHair color: "+datainfo[indexPosition][9]+"\nHobbies: "+datainfo[indexPosition][10]+"\nLikes: "+datainfo[indexPosition][11]})
            return interaction.reply({ embeds: [embedTest]})
          }
	},
};