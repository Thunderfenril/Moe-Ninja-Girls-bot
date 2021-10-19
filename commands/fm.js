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
	},
};