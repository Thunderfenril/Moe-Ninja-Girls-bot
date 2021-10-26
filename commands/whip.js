const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('To whip something')
    .addUserOption(option =>
      option.setName("target")
      .setDescription("The one you wish to zap")
      .setRequired(false))
    .addStringOption(option =>
      option.setName("text")
      .setDescription("Some text you want, I don't know I'm a description")
      .setRequired(false)),
	async execute(interaction) {
		const taggedUser = interaction.options.getUser('target'); //We get the mention
    const stringOption = interaction.options.getString('text');
            if (taggedUser!==null) { //If taggedUser is not undefined...
        if (taggedUser.id === interaction.member.id) { //If the author of the message tagged himself...
          interaction.reply("<@"+interaction.member.id+"> is a masochistic pervert."); //We send this message
          return interaction.followUp('<a:RanExposed:745341250852356186>')
        } else if(taggedUser.id === '758252653435944970' ||taggedUser.id === '720943363679059979') { //If he tag the bot or another bot then...
          await interaction.reply("*Focus*")
          await wait(1000);
          await intereaction.editReply("Mega whip on <@"+interaction.member.id+">")
          return;
        } else {
          interaction.reply("Whip at <@"+taggedUser+">")
          return interaction.followUp("<a:LMyuWhip1:676408951537139732><a:LMyuWhip2:676409245263986731>")
        }
        } else if(null === taggedUser && null !== stringOption){
        return interaction.reply("Whip at "+stringOption)
        } else {
        return interaction.reply("Whip on everybody")
        } 
	},
};