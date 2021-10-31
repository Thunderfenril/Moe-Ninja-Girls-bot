const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');


const datainfo = require("../array/data");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('datainfo')
		.setDescription('Give info on the height and 3 sizes')
    .addStringOption(option =>
      option.setName('category')
      .setDescription("The category you wish to see the ranking.")
      .setRequired(false)
      .addChoice("height")
      .addChoice("bust")
      .addChoice("hips")
      .addChoice("waist")),
	async execute(interaction) {

    let category = interaction.options.getString('category');

		if (category==="height") {
            datainfo.sort(function(a,b){return b[4]-a[4]}); //We sort the array based on the height
            let embedHeight = new MessageEmbed()
          embedHeight.setTitle("Ranking based on the height") //We create the title for the embed
          for(counterdatainfo=0; counterdatainfo<datainfo.length; counterdatainfo++){ //For loop to create all the addFields needed
            embedHeight.addFields({name: "\u200B", value: (counterdatainfo+1)+") "+datainfo[counterdatainfo][0]+" "+datainfo[counterdatainfo][4]+"cm\n"})
          }
    
        return interaction.reply({ embeds: [embedHeight]})
    
        } else if (category=="bust") {
            datainfo.sort(function(a,b){return b[5][0]-a[5][0]});
            let embedBust = new MessageEmbed()
          embedBust.setTitle("Ranking based on the bust")
          for(counterdatainfo=0; counterdatainfo<datainfo.length; counterdatainfo++){
            embedBust.addFields({name: "\u200B", value: (counterdatainfo+1)+")  "+datainfo[counterdatainfo][0]+" "+datainfo[counterdatainfo][5][0]+"cm\n"})
          }
        return interaction.reply({ embeds: [embedBust]});
    
        } else if (category=="waist") {
            datainfo.sort(function(a,b){return b[5][1]-a[5][1]});
        let embedWaist = new MessageEmbed()
          embedWaist.setTitle("Ranking based on the waist")
          for(counterdatainfo=0; counterdatainfo<datainfo.length; counterdatainfo++){
            embedWaist.addFields({name: "\u200B", value: (counterdatainfo+1)+")  "+datainfo[counterdatainfo][0]+" "+datainfo[counterdatainfo][5][1]+"cm\n"})
          }
        return interaction.reply({ embeds: [embedWaist]});
    
        } else if (category=="hips") {
            datainfo.sort(function(a,b){return b[5][2]-a[5][2]});
        let embedHips = new MessageEmbed()
          embedHips.setTitle("Ranking based on the hips")
          for(counterdatainfo=0; counterdatainfo<datainfo.length; counterdatainfo++){
            embedHips.addFields({name: "\u200B", value: (counterdatainfo+1)+")  "+datainfo[counterdatainfo][0]+" "+datainfo[counterdatainfo][5][2]+"cm\n"})
          }
        return interaction.reply({ embeds: [embedHips]});
    
        } else { //We sort before each category, making it a more general and easier code
            const embeddatainfo=new MessageEmbed()
          embeddatainfo.setTitle("Summary on the datainfo.")
                embeddatainfo.setColor(5294200)
                embeddatainfo.setFooter("You big hentai")
    
          datainfo.sort(function(a,b){return b[4]-a[4]});
                embeddatainfo.addFields({name:"The 3 tallest girls", value:"1. "+datainfo[0][0]+" "+datainfo[0][4]+"cm\n2. "+datainfo[1][0]+" "+datainfo[1][4]+"cm\n3. "+datainfo[2][0]+"  "+datainfo[2][4]+"cm"})
                embeddatainfo.addFields({name:"\u200B", value:"\u200B"})
    
          datainfo.sort(function(a,b){return b[5][0]-a[5][0]});
                embeddatainfo.addFields({name: "The largest bust", value:"1. "+datainfo[0][0]+" "+datainfo[0][5][2]+"cm\n2. "+datainfo[1][0]+" "+datainfo[1][5][2]+"cm\n3. "+datainfo[2][0]+" "+datainfo[2][5][2]+"cm", inline:true})
    
          datainfo.sort(function(a,b){return b[5][1]-a[5][1]});
                embeddatainfo.addFields({name: "The largest waist", value:"1. "+datainfo[0][0]+" "+datainfo[0][5][1]+"cm\n2. "+datainfo[1][0]+" "+datainfo[1][5][1]+"cm\n3. "+datainfo[2][0]+" "+datainfo[2][5][1]+"cm", inline:true})
    
          datainfo.sort(function(a,b){return b[5][2]-a[5][2]});
                embeddatainfo.addFields({name: "The largest hips", value:"1. "+datainfo[0][0]+" "+datainfo[0][5][2]+"cm\n2. "+datainfo[1][0]+" "+datainfo[1][5][2]+"cm\n3. "+datainfo[2][0]+" "+datainfo[2][5][2]+"cm", inline:true})
            return interaction.reply({ embeds: [embeddatainfo]});
         }
	},
};