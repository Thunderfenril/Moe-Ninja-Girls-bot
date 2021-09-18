const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('versus')
		.setDescription('Embed that compare 2 characters'),
	async execute(interaction) {
		if (args[1] === undefined) { //If the second argument is empty, then we reply that he forgot to add an opponent
			return message.reply({content: "You didn't provided an opponent baka !", allowedMentions: { repliedUser: true}});
		  }
	   
		  let rightCharacter = givePositionIndex(args[1]); //We save the position of 1 of the character in a variable
		  let leftCharacter = givePositionIndex(args[0]); //We save the position of the second character in another variable
	   
		  if((rightCharacter === -1) || (leftCharacter === -1)){ //We do a test to see if one of the character hasn't been found
		   return message.channel.send("You made an error in one of the name");
		  } else if (((rightCharacter == 2) || (leftCharacter == 2)) || ((rightCharacter == 3) || (leftCharacter == 3)) || ((rightCharacter == 8) || (leftCharacter == 8)) || ((rightCharacter == 9) || (leftCharacter == 9)) || ((rightCharacter == 10) || (leftCharacter == 10))) { //Temporary stop until we get the info on the RPG cast
			return message.channel.send("We don't have all the info for one of the person, so we can't do the fight.");
		  } else if (rightCharacter === leftCharacter) { //Test to see if the same character is on the 2 side
			return message.channel.send("That's the same character, aho !")
		  }
	   
		  //Declaration of variable
		  let rightCharacterScore = 0; //Score of the right character
		  let leftCharacterScore = 0; //Score of the left character
	   
		  let winnerRound = undefined; //Just a small variable that will change for every round
		  let announcementWinner = undefined; //Will be used to say who won the round
	   
		  const versusEmbed = new Discord.MessageEmbed()
		   versusEmbed.setTitle(data[rightCharacter][0]+" "+data[rightCharacter][1]+" versus "+data[leftCharacter][0]+" "+data[leftCharacter][1])
	   
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})
	   
		   //Height round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 4, 0); //We search for the winner
	   
		   if(winnerRound == rightCharacter){ //If the winner is the right character
			 rightCharacterScore+=1; //We increase the score
			 announcementWinner = data[rightCharacter][0]+" won the round"; //We say she won the round
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else { //Tie case
			 announcementWinner = "It's a tie" //We just announce it's a tie
		   }
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
		   versusEmbed.addFields({name: data[rightCharacter][4]+"    height    "+data[leftCharacter][4], value:announcementWinner, inline: true})
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
	   
		   //Small jump
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})
	   
		   //Breast round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 5, 0);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][5][0]+"    bust    "+data[leftCharacter][5][0], value:announcementWinner, inline: true})
	   
		   //Waist round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 5, 1);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][5][1]+"    waist    "+data[leftCharacter][5][1], value:announcementWinner, inline: true})
	   
		   //Hips round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 5, 2);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][5][2]+"    hips    "+data[leftCharacter][5][2], value:announcementWinner, inline: true})
	   
		   //Small jump
	   
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})
	   
		   //Strength round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 12, 0);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][12][0][1]+"    Strength    "+data[leftCharacter][12][0][1], value:announcementWinner, inline:true})
	   
		   //Shinobi round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 12, 1);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][12][1][1]+"    Shinobi/Spiritual    "+data[leftCharacter][12][1][1], value:announcementWinner, inline:true})
	   
		   //Small Jump
	   
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})
	   
		   //Intelligence round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 12, 2);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][12][2][1]+"    Intelligence    "+data[leftCharacter][12][2][1], value:announcementWinner, inline:true})
	   
		   //Agility round
	   
		   winnerRound = versusFight(rightCharacter, leftCharacter, 12, 3);
	   
		   if(winnerRound == rightCharacter){
			 rightCharacterScore+=1;
			 announcementWinner = data[rightCharacter][0]+" won the round";
		   } else if (winnerRound == leftCharacter){
			 leftCharacterScore+=1;
			 announcementWinner = data[leftCharacter][0]+" won the round";
		   } else {
			 announcementWinner = "It's a tie"
		   }
		   versusEmbed.addFields({name: data[rightCharacter][12][3][1]+"    Agility    "+data[leftCharacter][12][3][1], value:announcementWinner, inline:true})
	   
		   //Small Jump
	   
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: false})
	   
		 //Results announcement
		 versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
		 if(rightCharacterScore > leftCharacterScore){ //Right character wins
		   versusEmbed.addFields({name:"Victory", value: data[rightCharacter][0]+" won with "+rightCharacterScore+" points🏆", inline: true})
		   versusEmbed.setImage(data[leftCharacter][15][0])
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
		   message.channel.send({ embeds: [versusEmbed]})
		 } else if(rightCharacterScore < leftCharacterScore){ //Left character wins
		   versusEmbed.addFields({name:"Victory", value: data[leftCharacter][0]+" won with "+leftCharacterScore+" points🏆", inline: true})
		   versusEmbed.setImage(data[rightCharacter][15][0])
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
		   message.channel.send({ embeds: [versusEmbed]})
		 } else {
		   versusEmbed.addFields({name: "End of the fight", value:"It's a tie with "+rightCharacterScore+" points.", inline: true})
		   versusEmbed.setThumbnail(data[leftCharacter][15][0])
		   versusEmbed.setImage(data[rightCharacter][15][0])
		   versusEmbed.addFields({name: "\u200B", value:"\u200B", inline: true})
		   message.channel.send({ embeds: [versusEmbed]})
		 }
	},
};