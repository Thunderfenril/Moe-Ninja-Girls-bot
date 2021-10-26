const { SlashCommandBuilder } = require('@discordjs/builders');
const func = require("../function/function.js")
const vtuber = require("../array/vTuberSimp");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ninjutsu')
		.setDescription('Random ninjutsu string')
		.addUserOption(option =>
			option.setName('target')
			.setDescription("The target")
			.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		if (null === target) { //We look if there is an argument
			return interaction.reply("There is no target <@"+interaction.member.id+">"); //if there isn't, we send this message
		  } else {
			let randomNinjutsu = Math.round(Math.random()*(150-1)+1); //We create a random number, that is used to choose which ninjutsu is used
			let randomNinjutsuSuccess = Math.round(Math.random()*(150-1)+1); //New variable that will indicate if the ninjutsu was a success or a failure
			if(randomNinjutsuSuccess<60){ //If it's even, it's a success
			  if(randomNinjutsu < 11) {
				string = "You used a fire jutsu on <@"+target+">.\n<@"+target+"> suffer from small burn of it, but survive.";
			  } else if (randomNinjutsu < 13) {
				string = "You used a fire jutsu on <@"+target+">.\n<@"+target+"> suffer from heavy burn of it, but survive.";
			  } else if (randomNinjutsu < 20) {
				string = "You used a fire jutsu on <@"+target+">.\n<@"+target+"> has been killed from it.";
				func.death(target); //We use the death function to add the mention to the deadList array
			  } else if (randomNinjutsu < 35) {
				string = "You used a shadow jutsu on <@"+target+">, this person can't move anymore.";
			  } else if (randomNinjutsu < 46) {
				string = "You used a shadow jutsu on <@"+target+">.\nThis person is now imprisoned in the shadow world.";
			  } else if (randomNinjutsu < 57) {
				string = "You used a water jutsu on <@"+target+">.\nYou healed <@"+target+">.";
			  } else if (randomNinjutsu < 63) {
				string = "You used a water jutsu on <@"+target+">.\nThe water blade made some small cut on <@"+target+">.";
			  } else if (randomNinjutsu < 74) {
				string = "You used a water jutsu on <@"+target+">.\nThe swift water blade kill <@"+target+">.";
				func.death(target);
			  } else if (randomNinjutsu < 84) {
				string = "You used a genjutsu technique on <@"+target+">.\n<@"+target+"> now think he/she changed his/her gender.";
			  } else if (randomNinjutsu < 94) {
				string = "You used a wind jutsu on <@"+target+">.\n<@"+target+"> is now levitating in the sky.";
			  } else if (randomNinjutsu < 104) {
				string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack <@"+target+">.\n<@"+target+"> ran away.";
			  } else if (randomNinjutsu < 115) {
				string = "You used a summon ninjutsu. You summoned a dog.\nThe dog started to attack <@"+target+">.\n<@"+target+"> got killed by it.";
				func.death(target);
			  } else if (randomNinjutsu < 125) {
				randomVTuberSimp=Math.round(Math.random()*vtuber.length-1); //Random variable to pick a random vTuber from the list
				string = "You used a genjutsu technique on <@"+target+">.\n<@"+target+"> is now the biggest simp of "+vtuber[randomVTuberSimp]+".";
			  } else if (randomNinjutsu < 136) {
				string = "You used a special ninjutsu on <@"+target+">.\n<@"+target+"> is now a pepega.";
			  } else if (randomNinjutsu < 141) {
				string = "You used a special ninjutsu on <@"+target+">.\n<@"+target+"> feel compulsed to go in the horny jail.";
			  } else if (randomNinjutsu < 146) {
				string = "You used a forbidden ninjutsu on <@"+target+">.\nYou both started to hear some truck noise nearby.\nThe truck drive towards <@"+target+">.\n<@"+target+"> just got isekaied.";
			  } else if (randomNinjutsu < 148) {
				string = "You used a lightning ninujtsu on <@"+target+">.\n<@"+target+"> got shocked to death.";
				func.death(target);
			  } else if (randomNinjutsu < 149) {
				string = "You used an earth jutsu on <@"+target+">.\n<@"+target+"> got crushed to death by the rocks.";
				func.death(target);
			  } else {
				string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
			  }
			} else { //If it's odd, it's a failure
			  if(randomNinjutsu < 11) {
				string = "You used a fire jutsu on <@"+target+">, but you made a mistake.\nYou suffer from small burn of it, but survive.";
			  } else if (randomNinjutsu < 13) {
				string = "You used a fire jutsu on <@"+target+">, but you made a mistake.\nYou suffer from heavy burn of it, but survive.";
			  } else if (randomNinjutsu < 20) {
				string = "You used a fire jutsu on <@"+target+">, but you made a mistake.\nYou has been killed from it.";
				func.death(interaction.member.id) //We add the author of the message in the deadList array
			  } else if (randomNinjutsu < 35) {
				string = "You used a shadow jutsu on <@"+target+">, but you made a mistake.\nYou can't move anymore.";
			  } else if (randomNinjutsu < 46) {
				string = "You used a shadow jutsu on <@"+target+">, but you made a mistake.\nYou are now imprisoned in the shadow world.";
			  } else if (randomNinjutsu < 57) {
				string = "You used a water healing jutsu on <@"+target+">, but you made a mistake.\nYou killed <@"+target+">.";
				func.death(target);
			  } else if (randomNinjutsu < 63) {
				string = "You used a water jutsu on <@"+target+">, but you made a mistake.\nThe water blade made some small cut on yourself.";
			  } else if (randomNinjutsu < 74) {
				string = "You used a water jutsu on <@"+target+">, but you made a mistake.\nThe swift water blade kill you.";
				func.death(interaction.member.id)
			  } else if (randomNinjutsu < 84) {
				string = "You used a genjutsu technique on <@"+target+">, but you made a mistake.\nYou now think you are of the opposite gender.";
			  } else if (randomNinjutsu < 94) {
				string = "You used a wind jutsu on <@"+target+">, but you made a mistake.\nYou are now levitating in the sky.\nCan you see <@"+target+"> house from there ?";
			  } else if (randomNinjutsu < 104) {
				string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+interaction.member.id+">.\nYou ran away.";
			  } else if (randomNinjutsu < 115) {
				string = "You used a summon ninjutsu. You summoned a dog, but you made a mistake.\nThe dog started to attack <@"+interaction.member.id+">.\nYou got killed by it.";
				func.death(interaction.member.id)
			  } else if (randomNinjutsu < 125) {
				randomVTuberSimp=Math.round(Math.random()*vtuber.length-1);
				string = "You used a genjutsu technique on <@"+target+">, but you made a mistake.\nYou are now the biggest simp of "+vtuber[randomVTuberSimp]+".";
			  } else if (randomNinjutsu < 136) {
				string = "You used a special ninjutsu on <@"+target+">, but you made a mistake.\nYou are now a pepega.";
			  } else if (randomNinjutsu < 141) {
				string = "You used a special ninjutsu on <@"+target+">, but you made a mistake.\nYou feel compulsed to go in the horny jail.";
			  } else if (randomNinjutsu < 146) {
				string = "You used a forbidden ninjutsu on <@"+target+">.\nYou both started to hear some truck noise nearby.\nThe truck drive towards you.\nYou got isekaied.";
			  } else if (randomNinjutsu < 148) {
				string = "You used a lightning ninujtsu on <@"+target+">, but you made a mistake.\nYou got shocked to death.";
				func.death(interaction.member.id)
			  } else if (randomNinjutsu < 149) {
				string = "You used an earth jutsu on <@"+target+">, but you made a mistake.\nYou got crushed to death by the rocks.";
				func.death(interaction.member.id)
			  } else {
				string = "You used a special ninjutsu.\nNothing happen, you look like an idiot."
			  }
			}
			return interaction.reply(string.toString());
		  }
	},
};