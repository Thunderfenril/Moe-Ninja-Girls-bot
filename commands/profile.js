const { SlashCommandBuilder } = require('@discordjs/builders');

const dataInfo = require("../array/data.js");
const func = require("../function/function.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription('Send an embed with the information of a girl'),
	async execute(interaction) {
		if (!args.length) { //Test if there is an argument or not
            return message.channel.send( //Send an reply to the author of the command call
              `You didn't provide any arguments, baka, ${message.author}!`
            );
          }
      
          let indexPosition = func.givePositionIndex(args[0]); //We use a function to get the position of the girl in the list
      
          if(indexPosition === -1){
            message.channel.send("Are you sure you didn't made a mistake in the name ?")
            return; //If not found, then we stop the execution
          }
      
          const monthString = func.monthToString(dataInfo[indexPosition][2][1]) //Call to the function monthToString, to get a String with the name of the month
      
          if(indexPosition!=-1){ //If the girl was found, then we create an embed
            const embedTest = new Discord.MessageEmbed()
              .setTitle(dataInfo[indexPosition][0]+ " "+ dataInfo[indexPosition][1])
              .setColor(dataInfo[indexPosition][14])
              .setFooter(dataInfo[indexPosition][0]+" "+dataInfo[indexPosition][1]+" profile page")
              .setThumbnail(dataInfo[indexPosition][13])
              .setImage(dataInfo[indexPosition][13])
              .addFields({name: "Unique gift:",
                          value: dataInfo[indexPosition][6][0]})
              .addFields({name: "Normal gifts:",
                          value: dataInfo[indexPosition][6][1]})
              .addFields({name:"\u200B",
                          value:"\u200B"})
              .addFields({name:"Trivia",
                          value:"\nSeyuu: "+dataInfo[indexPosition][7]+"\nThree sizes: "+dataInfo[indexPosition][5][0]+"/"+dataInfo[indexPosition][5][1]+"/"+dataInfo[indexPosition][5][2]+"\nBust Size: "+dataInfo[indexPosition][5][3]+"\nBirthday: "+dataInfo[indexPosition][2][0]+" "+monthString+"\nZodiac sign: "+dataInfo[indexPosition][3]+"\nEye color: "+dataInfo[indexPosition][8]+"\nHair color: "+dataInfo[indexPosition][9]+"\nHobbies: "+dataInfo[indexPosition][10]+"\nLikes: "+dataInfo[indexPosition][11]})
            message.channel.send({ embeds: [embedTest]})
          }
	},
};