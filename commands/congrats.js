const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('congrats')
		.setDescription('Send a string to congrats the person mentionned')
    .addUserOption(option =>
      option.setName("target")
      .setDescription("The one you wish to congratulate")
      .setRequired(true)),
	async execute(interaction) {
		const taggedUser = interaction.options.getUser("target"); //We get the mention
    const randomCongrats = Math.round(Math.random()*(100-1)+1); //Random number for the random message
    if (null !== taggedUser){ //If there is a mention
      if(randomCongrats%2==0){ //We test if the random message is even or not
        await interaction.reply("Congratulation "+"<@"+taggedUser+">"+", I will hire the best cook to celebrate it !"); //message
        await wait(10000); //Timer
        await interaction.editReply("W-what ? There is no need to go to such length ? W-well, fine so, I won't."); //Edit the message
        return;
      } else {
        await interaction.reply("Congratulation "+"<@"+taggedUser+">, if you want we can celebrate it in the club room.");
        await wait(10000);
        await interaction.editReply("D-Don't get any wrong idea about this.\nHentai.");
        return;
      }
      } else {
        return interaction.reply("You forgot to mention someone");
      }
	},
};