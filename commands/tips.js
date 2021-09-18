const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tips')
		.setDescription('The tips command'),
	async execute(interaction) {
		const embedTips= new Discord.MessageEmbed() //We create an embed that will the info on which choice will show which info later
		.setTitle("Tips Command")
		.addFields({name: "Want some tips ?",
					value: "Here are some, just select one with the correponding number"})
		.addFields({name: "\u200B",
					value: "1.Gacha\n2.Reroll\n3.Bait strat\n4.Niney from friends\n5.Bond Breakthrough",
					inline: true})
		.addFields({name: "\u200B",
					value: "6.Body Breakthrough\n7.Strong and early 3* weapons\n8.Training\n9.Enemies attack type",
					inline: true})
	message.channel.send({ embeds: [embedTips]})
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { max: 1, time: 20000 }); //We will collect the answer of the author of the command
    collector.on('collect', message => {
      if (message.content==="1"){
		const embedTipsSend= new Discord.MessageEmbed()
			.setTitle("Gacha")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "You can complete the daily mission of creation with the 2 free creation and the tool creation."})
			.addFields({name:"\u200B",
	  			        value:"\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
        return
      }
      else if (message.content==="2"){
		const embedTipsSend= new Discord.MessageEmbed()
			.setTitle("Reroll")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "1) Go to Menu->Options/Support-> Data transfer/Other \n2) Select Data Transfer/Data Link \n3) Select Transfer Data \n4) Select Transfer Data again \n5) Set a password\n6) Screenshot/Write down the password and the Transfer ID \n",
						inline: true})
			.addFields({name:"\u200B",
						value:"7) Close the game \n8) On the second device, launch the game, choose Data Transfer/Link Account On the Title Screen \n9) Select Data Transfer and fill the blank text \n10) Go back to the first device \n11) Fresh start, enjoy your salt",
						inline: true})
			.addFields({name:"\u200B",
						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
        return
      }
      else if (message.content==="3"){
		const embedTipsSend=new Discord.MessageEmbed()
			.setTitle("Bait strat")
			.setFooter("Tips Command")
			.addFields({name: "\u200B",
						value: "The bait strat is to use a strong friend with several weak body. \nYou need that the strong friend has skills like aoe damage and heal. \nYou don't need to mend the bait body after the battle."})
			.addFields({name: "\u200B",
						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
        return
      }
      else if (message.content==="4") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Niney from friends")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "Every time someone use one of your unit as a support, you get 100 niney. \nThat's an easy to get some niney, so add lot's of friends"})
			.addFields({name: "\u200B",
						value: "<:EnjuHappy:534157250550562847>"})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]});
      }
      else if (message.content==="5") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Bond Breakthrough")
  			.setFooter("Tips Command")
  			.addFields({name: "When you reach the max level of a bond, you can breakthrough this bond, to increase the max level.\nThe breakthrough are available at level 20, 40, 60 and 80, each requiring different materials and niney to proceed.",
						value:"\u200B"})
			.addFields({name: "__Level 20:__",
						value: "10 branches,\n 5 fluffy sheep,\n 5 roses hairpin,\n 5 luscious lipstick,\n 50k niney",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "20 branches,\n 10 strong branches,\n 10 fluffy sheep,\n 10 Roses hairpin,\n 10 luscious lipsticks,\n 5 fashion magazines,\n 100K niney",
						inline: true})
			.addFields({name: "\u200B",
			  			value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "30 branches,\n 20 strong branches,\n 10 unyielding branches,\n 20 fluffy sheep,\n 20 roses hairpin,\n 20 luscious lipstick,\n 10 fashion magazines,\n 5 tea set for two,\n 200k niney",
						inline:true})
			.addFields({name:"__Level 80:__",
						value: "40 branches,\n 30 strong branches,\n 20 unyielding branches,\n 30 fluffy sheep,\n 30 roses hairpin,\n 20 luscious lipstick,\n 20 fashion magazines,\n 10 tea set for two,\n 400k niney",
						inline: true})

  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name:"\u200B",
						value:"All the materials are collecteable, except the branches, to know where they can drop, please go look at Shiro guide, and thank him."})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="6") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Body Breakthrough")
  			.setFooter("Tips Command")
  			.addFields({name:"Once you manage to reach the level cap, you get the option to perform an outfit breakthrough, thus raising the max level and earning a new skill.\nThe breakthrough are possible when the outfit reach level 20,40,60 and 80.",
						value:"You will need materials for each breakthrough, and here is the list I kindly prepared for you:"})
			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Level 20:__",
						value: "5 Master's hammer,\n 10 silvers keys",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "5 Sacred hammers,\n 20 silver keys,\n 10 gold keys",
						inline: true})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "5 Amaterasu's hammers,\n 30 silver keys,\n 20 gold keys,\n 10 rainbow keys",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "5 Amaterasu's hammers,\n 40 silver keys,\n 30 gold keys,\n 20 rainbow keys",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "For each breakthrough you will need this amount of materials, but the cost in niney and of duplicate or Komainu will be different based on the rarity of the outfit.",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 4, you will need for each breakthrough:",
						value: "\u200B"}) //4
			.addFields({name: "__Level 20:__",
						value: "52k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "104k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "208k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "416k niney and 1 similar outfit of the same character or a 4 star Komainu",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 3, you will need for each breakthrough:",
						value: "\u200B"}) //3
			.addFields({name: "__Level 20:__",
						value: "35k niney and 1 similar outfit of the same character or a 3 star Komainu",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "70K niney and 2 similar outfit of the same character or 2 3 star Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "140k niney and 2 similar outfit of the same character or 2 3 star Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "*Missing for the moment*",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


		 const embedTipsSend2=new Discord.MessageEmbed()
			.addFields({name: "For an outfit of rarity 2, you will need for each breakthrough:",
						value: "\u200B"}) //2
			.addFields({name: "__Level 20:__",
						value: "7k niney and 2 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "14k niney and 2 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "28k niney and 3 similar outfits of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "*Missing for the moment*",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})


			.addFields({name: "For an outfit of rarity 1, you will need for each breakthrough:",
						value: "\u200B"}) //1
			.addFields({name: "__Level 20:__",
						value: "3,5k niney and 3 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "__Level 40:__",
						value: "7k niney and 3 similar outfit of the same character or 2 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "__Level 60:__",
						value: "14k niney and 3 similar outfit of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "__Level 80:__",
						value: "28k niney and 3 similar outfit of the same character or 3 Komainus",
						inline: true})
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "Now about the materials.",
						value: "\u200B"}) //Materials
			.addFields({name: "__**The Hammer**__",
						value: "You can get them during the daily stage.\nYou can get the master hammer from all the difficulty, the Sacred from the Chunin and Jounin, and the Amaterasu hammer only from the Jounin"}) //Hammer
			.addFields({name: "__**The keys**__",
						value: "You can get the silver keys from almost all the stage in season 1, except on the stage 'Front of the School', please be aware that not all the difficulty can give you a key.\nThe gold and rainbows keys, can drop on a few stages in season 2, but also from the daily stage Full of coins"}) //Key
			.addFields({name: "__**The similar outfit and the Komainus**__",
						value: "For each breakthrough, you have to use a similar outfit. By example if you want to breakthrough my dress <:EnjuTsun:535534059300978688> , you will need to prepare the same dress. If you unfortunately don't have one, or want to keep another one, you can use a Komainus.\nYou can get Komainus from the exchange shop, for 1 keystone, you can get a normal Komainu, for 3 keystone, you will get a 3 star Komainu, and for the small price of 8 keystone, you will own a 4 star Komainu."}) //Similar outfit
			.addFields({name: "\u200B",
						value: "\u200B"})
			.addFields({name: "\u200B",
						value: "I'm sorry "+"<@"+message.author.id+">"+" I don't know every thing about the breakthrough, please wait a few days, and I might know everything"})

        message.channel.send({ embeds: [embedTipsSend]})
		    message.channel.send({ embeds: [embedTipsSend2]})
      }
      else if (message.content==="7") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Strong and early 3* weapons")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "You can have access to some of the strongest 3* weapons very early in the game. They are the weapons in the exchange shop. They have in fact, better stats than the equivalent in the tools gacha."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="8") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Training")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value : "You can train your outfits in the training. You can put a level 30 outfits and a level 1 in the 4h, and do something similar with the 8h."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
        message.channel.send({ embeds: [embedTipsSend]})
      }
      else if (message.content==="9") {
		  const embedTipsSend=new Discord.MessageEmbed()
  			.setTitle("Enemies attack type")
  			.setFooter("Tips Command")
  			.addFields({name: "\u200B",
						value: "Just like our heroine, the enemies deal either physical or shinobi damage, based on their appearance."})
  			.addFields({name: "\u200B",
  						value: "\u200B"})
			.addFields({name: "__Shinobi:__",
						value: "Kunoichi\nFox",
						inline: true})
			.addFields({name: "__Physical:__",
						value: "Kazuki\nRobot\nRaven\nSpiders",
						inline: true})
		  message.channel.send({ embeds: [embedTipsSend]})
	  }
    })
	},
};