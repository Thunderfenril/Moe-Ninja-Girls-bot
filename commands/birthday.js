const { SlashCommandBuilder } = require('@discordjs/builders');
const datainfo = require('../array/data.js');
const func = require("../function/function.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName('birthday')
		.setDescription('Send a string related to next birthday')
		.addStringOption(option =>
			option.setName('name')
			.setDescription("Name of the character you wish to see the info")
			.setRequired(false)),
	async execute(interaction) {
		
	},
};