const { SlashCommandBuilder } = require('@discordjs/builders');

const dataInfo = require("../array/data.js");
const func = require("../function/function.js");



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ranking')
		.setDescription('Rank under a category'),
	async execute(interaction) {
		if (!args.length) { //Test if there is an argument or not
            return message.channel.send( //Send an reply to the author of the command call
              `You didn't provide any arguments, baka, ${message.author}!`
            );
          }
          let indexGirl = func.givePositionIndex(args[0]);
      
          if(indexGirl != -1){
            const embedRanking = new Discord.MessageEmbed()
              embedRanking.setTitle(dataInfo[indexGirl][0]+" "+dataInfo[indexGirl][1]+" ranking")
              embedRanking.setColor(dataInfo[indexGirl][14])
              embedRanking.addFields({name: "__Physical information:__", value:"\u200B"})
      
              positionRank = func.givePositionRanking(dataInfo[indexGirl][0], "height")
              embedRanking.addFields({name: "Height:", value: positionRank+"th on "+data.length, inline: true})
      
      
              positionRank = func.givePositionRanking(dataInfo[indexGirl][0], "bust")
              embedRanking.addFields({name: "Bust:", value: positionRank+"th on "+data.length, inline: true})
      
              embedRanking.addFields({name:"\u200B", value:"\u200B", inline:true})
      
              positionRank = func.givePositionRanking(dataInfo[indexGirl][0], "waist")
              embedRanking.addFields({name: "Waist:", value: positionRank+"th on "+data.length, inline: true})
      
              positionRank = func.givePositionRanking(dataInfo[indexGirl][0], "hips")
              embedRanking.addFields({name: "Hips:", value: positionRank+"th on "+data.length, inline: true})
      
              embedRanking.addFields({name: "\u200B", value: "\u200B"})
              embedRanking.addFields({name:"__Personal statistic:__", value:"\u200B"})
      
              for(counterPersonal=0; counterPersonal<dataInfo[indexGirl][12].length; counterPersonal++){
                embedRanking.addFields({name: dataInfo[indexGirl][12][counterPersonal][0], value:dataInfo[indexGirl][12][counterPersonal][1]+" on 10", inline: true})
              }
            message.channel.send({ embeds: [embedRanking]})
          }
	},
};