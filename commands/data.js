const { SlashCommandBuilder } = require('@discordjs/builders');

const dataInfo = require("../array/data");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('dataInfo')
		.setDescription('Give info on the height and 3 sizes'),
	async execute(interaction) {
		if (args[0]==="height") {
            dataInfo.sort(function(a,b){return b[4]-a[4]}); //We sort the array based on the height
            let embedHeight = new Discord.MessageEmbed()
          embedHeight.setTitle("Ranking based on the height") //We create the title for the embed
          for(counterdataInfo=0; counterdataInfo<dataInfo.length; counterdataInfo++){ //For loop to create all the addFields needed
            embedHeight.addFields({name: "\u200B", value: (counterdataInfo+1)+") "+dataInfo[counterdataInfo][0]+" "+dataInfo[counterdataInfo][4]+"cm\n"})
          }
    
        message.channel.send({ embeds: [embedHeight]})
    
        } else if (args[0]=="bust") {
            dataInfo.sort(function(a,b){return b[5][0]-a[5][0]});
            let embedBust = new Discord.MessageEmbed()
          embedBust.setTitle("Ranking based on the bust")
          for(counterdataInfo=0; counterdataInfo<dataInfo.length; counterdataInfo++){
            embedBust.addFields({name: "\u200B", value: (counterdataInfo+1)+")  "+dataInfo[counterdataInfo][0]+" "+dataInfo[counterdataInfo][5][0]+"cm\n"})
          }
        message.channel.send({ embeds: [embedBust]});
    
        } else if (args[0]=="waist") {
            dataInfo.sort(function(a,b){return b[5][1]-a[5][1]});
        let embedWaist = new Discord.MessageEmbed()
          embedWaist.setTitle("Ranking based on the waist")
          for(counterdataInfo=0; counterdataInfo<dataInfo.length; counterdataInfo++){
            embedWaist.addFields({name: "\u200B", value: (counterdataInfo+1)+")  "+dataInfo[counterdataInfo][0]+" "+dataInfo[counterdataInfo][5][1]+"cm\n"})
          }
        message.channel.send({ embeds: [embedWaist]});
    
        } else if (args[0]=="hips") {
            dataInfo.sort(function(a,b){return b[5][2]-a[5][2]});
        let embedHips = new Discord.MessageEmbed()
          embedHips.setTitle("Ranking based on the hips")
          for(counterdataInfo=0; counterdataInfo<dataInfo.length; counterdataInfo++){
            embedHips.addFields({name: "\u200B", value: (counterdataInfo+1)+")  "+dataInfo[counterdataInfo][0]+" "+dataInfo[counterdataInfo][5][2]+"cm\n"})
          }
        message.channel.send({ embeds: [embedHips]});
    
        } else { //We sort before each category, making it a more general and easier code
            const embeddataInfo=new Discord.MessageEmbed()
          embeddataInfo.setTitle("Summary on the dataInfo.")
                embeddataInfo.setColor(5294200)
                embeddataInfo.setFooter("You big hentai")
    
          dataInfo.sort(function(a,b){return b[4]-a[4]});
                embeddataInfo.addFields({name:"The 3 tallest girls", value:"1. "+dataInfo[0][0]+" "+dataInfo[0][4]+"cm\n2. "+dataInfo[1][0]+" "+dataInfo[1][4]+"cm\n3. "+dataInfo[2][0]+"  "+dataInfo[2][4]+"cm"})
                embeddataInfo.addFields({name:"\u200B", value:"\u200B"})
    
          dataInfo.sort(function(a,b){return b[5][0]-a[5][0]});
                embeddataInfo.addFields({name: "The largest bust", value:"1. "+dataInfo[0][0]+" "+dataInfo[0][5][2]+"cm\n2. "+dataInfo[1][0]+" "+dataInfo[1][5][2]+"cm\n3. "+dataInfo[2][0]+" "+dataInfo[2][5][2]+"cm", inline:true})
    
          dataInfo.sort(function(a,b){return b[5][1]-a[5][1]});
                embeddataInfo.addFields({name: "The largest waist", value:"1. "+dataInfo[0][0]+" "+dataInfo[0][5][1]+"cm\n2. "+dataInfo[1][0]+" "+dataInfo[1][5][1]+"cm\n3. "+dataInfo[2][0]+" "+dataInfo[2][5][1]+"cm", inline:true})
    
          dataInfo.sort(function(a,b){return b[5][2]-a[5][2]});
                embeddataInfo.addFields({name: "The largest hips", value:"1. "+dataInfo[0][0]+" "+dataInfo[0][5][2]+"cm\n2. "+dataInfo[1][0]+" "+dataInfo[1][5][2]+"cm\n3. "+dataInfo[2][0]+" "+dataInfo[2][5][2]+"cm", inline:true})
            message.channel.send({ embeds: [embeddataInfo]});
         }
	},
};