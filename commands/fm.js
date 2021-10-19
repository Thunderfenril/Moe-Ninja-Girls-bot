const { SlashCommandBuilder } = require('@discordjs/builders');
const fmdata = require("../array/datafm");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fm')
		.setDescription('The fight master command')
		.setIntegerOption(option =>
			option.setName("stage")
			.setDescription("Select the stage. Final is 10")
			.setRequired(true)
			.addChoice(1, "Stage 1")
			.addChoice(2, "Stage 2")
			.addChoice(3, "Stage 3")
			.addChoice(4, "Stage 4")
			.addChoice(5, "Stage 5")
			.addChoice(6, "Stage 6")
			.addChoice(7, "Stage 7")
			.addChoice(8, "Stage 8")
			.addChoice(9, "Stage 9")
			.addChoice(10, "Final stage"))
		.setStringOption(option =>
			option.setName("weakness")
			.setDescription("The weakness of the stage")
			.setRequired(true)
			.addChoice("fire")
			.addChoice("ice")
			.addChoice("thunder"))
		.setIntegerOption(option =>
			option.setName("fire")
			.setDescription("The value of your fire power")
			.setRequired(true))
		.setIntegerOption(option =>
			option.setName("ice")
			.setDescription("The value of your ice power")
			.setRequired(true))
		.setIntegerOption(option =>
			option.setName("thunder")
			.setDescription("The value of your thunder power")
			.setRequired(true))
		.setIntegerOption(option =>
			option.setName("shuriken")
			.setDescription("The number of shuriken you own")
			.setRequired(true))
		.setIntegerOption(option =>
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
				fightingPowerWithoutJuice = valueFire * 1.5 + valueIce + valueThunder + valueLevel + valueShuriken;
				break;

			case "ice":
				fightingPowerWithJuice = valueFire + valueIce * 3 + valueThunder + valueLevel + valueShuriken;
				fightingPowerWithoutJuice = valueFire + valueIce * 1.5 + valueThunder + valueLevel + valueShuriken;
				break;

			case "thunder":
				fightingPowerWithJuice = valueFire + valueIce + valueThunder * 3 + valueLevel + valueShuriken;
				fightingPowerWithoutJuice = valueFire + valueIce + valueThunder * 1.5 + valueLevel + valueShuriken;
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
			return interaction.reply("You won't be able to beat the stage without juice. You will need "+ (numberOfRoundWithoutJuice - stageLimit)+ " more round to beat it.\nTry to use juice, you will need "+ numberOfRoundWithJuice+" round to beat the stage.");
		} else {
			return interaction.reply("You can beat the stage in "+numberOfRoundWithoutJuice+" round without juice.\nIf you use juice, you will beat it in "+numberOfRoundWithJuice+" rounds instead.");
		}
	},
};