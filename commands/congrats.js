const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('congrats')
		.setDescription('Send a string to congrats the person mentionned'),
	async execute(interaction) {
		const taggedUser = message.mentions.users.first();
    const randomCongrats = Math.round(Math.random()*(100-1)+1);
    if (taggedUser!==undefined){
      if(randomCongrats%2==0){
        return interaction.reply("Congratulation "+"<@"+taggedUser+">"+", I will hire the best cook to celebrate it !").then((msg)=>{
        setTimeout(function(){
          msg.edit("W-what ? There is no need to go to such length ? W-well, fine so, I won't.");
        }, 10000)
        })
      } else {
        return interaction.reply("Congratulation "+"<@"+taggedUser+">, if you want we can celebrate it in the club room.").then((msg) => {
          setTimeout(function() {
            msg.edit("D-Don't get any wrong idea about this.\nHentai.");}, 10000)
          })
        }
      }
	},
};