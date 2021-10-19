const { SlashCommandBuilder } = require('@discordjs/builders');
const func = require("../function/function.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ninjutsu')
		.setDescription('Random ninjutsu string'),
	async execute(interaction) {
		if (!args.length) { //We look if there is an argument
			return interaction.reply("There is no target <@"+interaction.member.id+">"); //if there isn't, we send this message
		  } else {
			let target = args; //We save the argument there
			let isMention = message.mentions.users.first(); //We save the first mention in the argument list. no mention = undefined
			let randomNinjutsu = Math.round(Math.random()*(150-1)+1); //We create a random number, that is used to choose which ninjutsu is used
			let randomNinjutsuSuccess = Math.round(Math.random()*(150-1)+1); //New variable that will indicate if the ninjutsu was a success or a failure
			if(randomNinjutsuSuccess<60){ //If it's even, it's a success
			  if(randomNinjutsu < 11) {
				string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" suffer from small burn of it, but survive.";
			  } else if (randomNinjutsu < 13) {
				string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" suffer from heavy burn of it, but survive.";
			  } else if (randomNinjutsu < 20) {
				string = "You used a fire jutsu on "+target.join(' ')+".\n"+target.join(' ')+" has been killed from it.";
				func.death(isMention); //We use the death function to add the mention to the deadList array
			  } else if (randomNinjutsu < 35) {
				string = "You used a shadow jutsu on "+target.join(' ')+", this person can't move anymore.";
			  } else if (randomNinjutsu < 46) {
				string = "You used a shadow jutsu on "+target.join(' ')+".\nThis person is now imprisoned in the shadow world.";
			  } else if (randomNinjutsu < 57) {
				string = "You used a water jutsu on "+target.join(' ')+".\nYou healed "+target.join(' ')+".";
			  } else if (randomNinjutsu < 63) {
				string = "You used a water jutsu on "+target.join(' ')+".\nThe water blade made some small cut on "+target.join(' ')+".";
			  } else if (randomNinjutsu < 74) {
				string = "You used a water jutsu on "+target.join(' ')+".\nThe swift water blade kill "+target.join(' ')+".";
				func.death(isMention);
			  } else if (randomNinjutsu < 84) {
				string = "You used a genjutsu technique on "+target.join(' ')+".\n"+target.join(' ')+" now think he/she changed his/her gender.";
			  } else if (randomNinjutsu < 94) {
				string = "You used a wind jutsu on "+target.join(' ')+".\n"+target.join(' ')+" is now levitating in the sky.";
			  } else if (randomNinjutsu < 104) {
				string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack "+target.join(' ')+".\n"+target.join(' ')+" ran away.";
			  } else if (randomNinjutsu < 115) {
				string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack "+target.join(' ')+".\n"+target.join(' ')+" got killed by it.";
				func.death(isMention);
			  } else if (randomNinjutsu < 125) {
				randomVTuberSimp=Math.round(Math.random()*vTuberSimp.length-1); //Random variable to pick a random vTuber from the list
				string = "You used a genjutsu technique on "+target.join(' ')+".\n"+target.join(' ')+" is now the biggest simp of "+vTuberSimp[randomVTuberSimp]+".";
			  } else if (randomNinjutsu < 136) {
				string = "You used a special ninjutsu on "+target.join(' ')+".\n"+target.join(' ')+" is now a pepega.";
			  } else if (randomNinjutsu < 141) {
				string = "You used a special ninjutsu on "+target.join(' ')+".\n"+target.join(' ')+" feel compulsed to go in the horny jail.";
			  } else if (randomNinjutsu < 146) {
				string = "You used a forbidden ninjutsu on "+target.join(' ')+".\nYou both started to hear some truck noise nearby.\nThe truck drive towards "+target.join(' ')+".\n"+target.join(' ')+" just got isekaied.";
			  } else if (randomNinjutsu < 148) {
				string = "You used a lightning ninujtsu on "+target.join(' ')+".\n"+target.join(' ')+" got shocked to func.death.";
				func.death(isMention);
			  } else if (randomNinjutsu < 149) {
				string = "You used an earth jutsu on "+target.join(' ')+".\n"+target.join(' ')+" got crushed to func.death by the rocks.";
				func.death(isMention);
			  } else {
				string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
			  }
			} else { //If it's odd, it's a failure
			  if(randomNinjutsu < 11) {
				string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou suffer from small burn of it, but survive.";
			  } else if (randomNinjutsu < 13) {
				string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou suffer from heavy burn of it, but survive.";
			  } else if (randomNinjutsu < 20) {
				string = "You used a fire jutsu on "+target.join(' ')+", but you made a mistake.\nYou has been killed from it.";
				deadList.push(interaction.member.id) //We add the author of the message in the deadList array
			  } else if (randomNinjutsu < 35) {
				string = "You used a shadow jutsu on "+target.join(' ')+", but you made a mistake.\nYou can't move anymore.";
			  } else if (randomNinjutsu < 46) {
				string = "You used a shadow jutsu on "+target.join(' ')+", but you made a mistake.\nYou are now imprisoned in the shadow world.";
			  } else if (randomNinjutsu < 57) {
				string = "You used a water healing jutsu on "+target.join(' ')+", but you made a mistake.\nYou killed "+target.join(' ')+".";
				func.death(isMention);
			  } else if (randomNinjutsu < 63) {
				string = "You used a water jutsu on "+target.join(' ')+", but you made a mistake.\nThe water blade made some small cut on yourself.";
			  } else if (randomNinjutsu < 74) {
				string = "You used a water jutsu on "+target.join(' ')+", but you made a mistake.\nThe swift water blade kill you.";
				deadList.push(interaction.member.id)
			  } else if (randomNinjutsu < 84) {
				string = "You used a genjutsu technique on "+target.join(' ')+", but you made a mistake.\nYou now think you are of the opposite gender.";
			  } else if (randomNinjutsu < 94) {
				string = "You used a wind jutsu on "+target.join(' ')+", but you made a mistake.\nYou are now levitating in the sky.\nCan you see "+target.join(' ')+" house from there ?";
			  } else if (randomNinjutsu < 104) {
				string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+interaction.member.id+">.\nYou ran away.";
			  } else if (randomNinjutsu < 115) {
				string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+interaction.member.id+">.\nYou got killed by it.";
				deadList.push(interaction.member.id)
			  } else if (randomNinjutsu < 125) {
				randomVTuberSimp=Math.round(Math.random()*vTuberSimp.length-1);
				string = "You used a genjutsu technique on "+target.join(' ')+", but you made a mistake.\nYou are now the biggest simp of "+vTuberSimp[randomVTuberSimp]+".";
			  } else if (randomNinjutsu < 136) {
				string = "You used a special ninjutsu on "+target.join(' ')+", but you made a mistake.\nYou are now a pepega.";
			  } else if (randomNinjutsu < 141) {
				string = "You used a special ninjutsu on "+target.join(' ')+", but you made a mistake.\nYou feel compulsed to go in the horny jail.";
			  } else if (randomNinjutsu < 146) {
				string = "You used a forbidden ninjutsu on "+target.join(' ')+".\nYou both started to hear some truck noise nearby.\nThe truck drive towards you.\nYou got isekaied.";
			  } else if (randomNinjutsu < 148) {
				string = "You used a lightning ninujtsu on "+target.join(' ')+", but you made a mistake.\nYou got shocked to func.death.";
				deadList.push(interaction.member.id)
			  } else if (randomNinjutsu < 149) {
				string = "You used an earth jutsu on "+target.join(' ')+", but you made a mistake.\nYou got crushed to func.death by the rocks.";
				deadList.push(interaction.member.id)
			  } else {
				string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
			  }
			}
			return interaction.reply(string.toString());
		  }
	},
};