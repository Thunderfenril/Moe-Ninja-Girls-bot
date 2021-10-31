const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const datainfo = require("../array/data.js");
const func = require("../function/function.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ranking')
		.setDescription('Rank under a category')
    .addStringOption(option =>
      option.setName('girl')
      .setDescription("The name of the girl")
      .setRequired(true)),
	async execute(interaction) {
          let girl = interaction.options.getString('girl'); //We save the girl
          let indexGirl = func.givePositionIndex(girl); //We look for her position, to get the data later on
      
          if(indexGirl != -1){
            const embedRanking = new MessageEmbed()
              embedRanking.setTitle(datainfo[indexGirl][0]+" "+datainfo[indexGirl][1]+" ranking")
              embedRanking.setColor(datainfo[indexGirl][14])
              embedRanking.addFields({name: "__Physical information:__", value:"\u200B"})
      
              positionRank = func.givePositionRanking(datainfo[indexGirl][0], "height") //We look for her ranking through a function
              embedRanking.addFields({name: "Height:", value: positionRank+"th on "+datainfo.length, inline: true})
      
      
              positionRank = func.givePositionRanking(datainfo[indexGirl][0], "bust")
              embedRanking.addFields({name: "Bust:", value: positionRank+"th on "+datainfo.length, inline: true})
      
              embedRanking.addFields({name:"\u200B", value:"\u200B", inline:true})
      
              positionRank = func.givePositionRanking(datainfo[indexGirl][0], "waist")
              embedRanking.addFields({name: "Waist:", value: positionRank+"th on "+datainfo.length, inline: true})
      
              positionRank = func.givePositionRanking(datainfo[indexGirl][0], "hips")
              embedRanking.addFields({name: "Hips:", value: positionRank+"th on "+datainfo.length, inline: true})
      
              embedRanking.addFields({name: "\u200B", value: "\u200B"})
              embedRanking.addFields({name:"__Personal statistic:__", value:"\u200B"})
      
              for(counterPersonal=0; counterPersonal<datainfo[indexGirl][12].length; counterPersonal++){
                embedRanking.addFields({name: datainfo[indexGirl][12][counterPersonal][0], value:datainfo[indexGirl][12][counterPersonal][1]+" on 10", inline: true})
              }
            return interaction.reply({ embeds: [embedRanking]})
          }
	},
};