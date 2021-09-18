const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('tips').setDescription('The tips command'),
	new SlashCommandBuilder().setName('gacha').setDescription('Send a string'),
	new SlashCommandBuilder().setName('hug').setDescription('Send a string'),
    new SlashCommandBuilder().setName('congrats').setDescription('Send a string to congrats the person mentionned'),
    new SlashCommandBuilder().setName('roll').setDescription('The gacha simulator'),
    new SlashCommandBuilder().setName('profile').setDescription('Send an embed with the information of a girl'),
    new SlashCommandBuilder().setName('data').setDescription('Give info on the height and 3 sizes'),
    new SlashCommandBuilder().setName('ranking').setDescription('Rank under a category'),
    new SlashCommandBuilder().setName('dm').setDescription('To give anonymous info'),
    new SlashCommandBuilder().setName('whip').setDescription('To whip something'),
    new SlashCommandBuilder().setName('zap').setDescription('To zap something'),
    new SlashCommandBuilder().setName('birthday').setDescription('Send a string related to next birthday'),
    new SlashCommandBuilder().setName('ninjutsu').setDescription('Random ninjutsu string'),
    new SlashCommandBuilder().setName('revive').setDescription('Ressurect someone dead'),
    new SlashCommandBuilder().setName('dead').setDescription('Allow to see the dead people'),
    new SlashCommandBuilder().setName('fm').setDescription('The fight master command'),
    new SlashCommandBuilder().setName('versus').setDescription('Embed that compare 2 characters'),
    new SlashCommandBuilder().setName('serverinfo').setDescription('Give info on the server'),
    new SlashCommandBuilder().setName('elections').setDescription('Command used for the elections time'),
    new SlashCommandBuilder().setName('test').setDescription('String to see if the bot answer'),
    new SlashCommandBuilder().setName('help').setDescription('embed send to the caller'),
    new SlashCommandBuilder().setName('changelog').setDescription('Embed for the changelog'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();