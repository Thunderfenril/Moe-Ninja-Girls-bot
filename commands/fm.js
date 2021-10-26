const { SlashCommandBuilder } = require('@discordjs/builders');
const fmdata = require("../array/datafm");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fm')
		.setDescription('The fight master command')
		.addIntegerOption(option =>
			option.setName("stage")
			.setDescription("Select the stage. Final is 10")
			.setRequired(true)
			.addChoice("Stage 1", 1)
			.addChoice("Stage 2", 2)
			.addChoice("Stage 3", 3)
			.addChoice("Stage 4", 4)
			.addChoice("Stage 5", 5)
			.addChoice("Stage 6", 6)
			.addChoice("Stage 7", 7)
			.addChoice("Stage 8", 8)
			.addChoice("Stage 9", 9)
			.addChoice("Final stage", 10))
		.addStringOption(option =>
			option.setName("weakness")
			.setDescription("The weakness of the stage")
			.setRequired(true)
			.addChoice("The stage is weak to fire", "fire")
			.addChoice("The stage is weak to ice", "ice")
			.addChoice("The stage is weak to thunder", "thunder"))
		.addIntegerOption(option =>
			option.setName("fire")
			.setDescription("The value of your fire power")
			.setRequired(true))
		.addIntegerOption(option =>
			option.setName("ice")
			.setDescription("The value of your ice power")
			.setRequired(true))
		.addIntegerOption(option =>
			option.setName("thunder")
			.setDescription("The value of your thunder power")
			.setRequired(true))
		.addIntegerOption(option =>
			option.setName("shuriken")
			.setDescription("The number of shuriken you own")
			.setRequired(true))
		.addIntegerOption(option =>
			option.setName("level")
			.setDescription("The current level of your account")
			.setRequired(true)),
	async execute(interaction) {
		//Creation of the variable
		let valueStage = interaction.options.getInteger("stage");
		let stageWeakness = interaction.options.getString("weakness");
		let valueFire = interaction.options.getInteger("fire");
		let valueIce = interaction.options.getInteger("ice");
		let valueThunder = interaction.options.getInteger("thunder");
		let valueLevel = interaction.options.getInteger("level");
		let valueShuriken = interaction.options.getInteger("shuriken");

		if(valueFire < 0 || valueIce < 0|| valueThunder < 0 || valueLevel < 0 || valueShuriken < 0) {
			return interaction.reply("One of the value is impossible");
		}

		let stageHP = fmdata[valueStage-1][0];
		let stageLimit = fmdata[valueStage-1][1];
		let fightingPowerWithoutJuice;
		let fightingPowerWithJuice;

		switch (stageWeakness) {
			case "fire":
				fightingPowerWithJuice = valueFire * 3 + valueIce + valueThunder + valueLevel + valueShuriken;
				fightingPowerWithoutJuice = valueFire * 2 + valueIce + valueThunder + valueLevel + valueShuriken;
				break;

			case "ice":
				fightingPowerWithJuice = valueFire + valueIce * 3 + valueThunder + valueLevel + valueShuriken;
				fightingPowerWithoutJuice = valueFire + valueIce * 2 + valueThunder + valueLevel + valueShuriken;
				break;

			case "thunder":
				fightingPowerWithJuice = valueFire + valueIce + valueThunder * 3 + valueLevel + valueShuriken;
				fightingPowerWithoutJuice = valueFire + valueIce + valueThunder * 2 + valueLevel + valueShuriken;
				break;

			default:
				interaction.reply("There is a problem, contact the creator of the bot");
				break;
		}

		let numberOfRoundWithoutJuice = Math.ceil(stageHP/fightingPowerWithoutJuice);
		let numberOfRoundWithJuice = Math.ceil(stageHP/fightingPowerWithJuice);

		if (numberOfRoundWithJuice > stageLimit) {
			return interaction.reply("You won't be able to beat the stage, you will need "+ (numberOfRoundWithJuice - stageLimit) + " more round to beat it.");
		} else if (numberOfRoundWithoutJuice > stageLimit) {
			return interaction.reply("You won't be able to beat the stage without juice. You will need "+ numberOfRoundWithoutJuice+ " round to beat it.\nTry to use juice, you will need "+ numberOfRoundWithJuice+" round to beat the stage.");
		} else {
			return interaction.reply("You can beat the stage in "+numberOfRoundWithoutJuice+" round without juice.\nIf you use juice, you will beat it in "+numberOfRoundWithJuice+" rounds instead.");
		}
	},
};