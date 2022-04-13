const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js');

const progressJSON = require("../array/project.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('project')
		.setDescription('To get some info on the project progress')
        .addStringOption(option =>
            option.setName('category')
            .setDescription("Which category you wish to get the progress of")
            .setRequired(true)
            .addChoice("The progress on the sprite", "sprite")
            .addChoice("The progress on the background", "background")
            .addChoice("The progress on the story", "story")
            .addChoice("The progress on the recruitment", "recruitment")
            .addChoice("The progress on the development", "development")),
	async execute(interaction) {
		let category = interaction.options.getString('category');

        let categoryIndex;
        switch (category) {
            case 'sprite':
                categoryIndex = 0;
                break;
            case 'background':
                categoryIndex = 1;
                break;
            case 'story':
                categoryIndex = 2;
                break;
            case 'recruitment':
                categoryIndex = 3;
                break;
            case 'development':
                categoryIndex = 4;
                break;
        }

        const taskLength = Object.keys(progressJSON[categoryIndex]["task"]).length;
        const embedProgress = new MessageEmbed();
        embedProgress.setTitle(progressJSON[categoryIndex]["id"]);
        embedProgress.setDescription(progressJSON[categoryIndex]["description"]);
        for(count = 0; count <taskLength; count++) {
            let task = Object.keys(progressJSON[categoryIndex]["task"])[count]
            embedProgress.addFields({
                name: task,
                value: progressJSON[categoryIndex]["task"][task][0]+ " on " + progressJSON[categoryIndex]["task"][task][1]
            })
        }

        return interaction.reply({embeds: [embedProgress]})
	},
};