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
		let nameTarget = interaction.options.getString('name');
		const date = new Date();
		const month=date.getMonth(); //We retrieve the current day, and we save it in a var
  		const day=date.getDate(); //We retrieve the current month as an int from 0 to 11, and we save it in a var
  		const year=date.getFullYear(); //We retrieve the current year and we save it in a var
		let todayDate = new Date(year, month, day); //Today date

		if(null !== nameTarget) {

			let birthdayCandidate = func.givePositionIndex(args);

  			if(birthdayCandidate===-1) {return interaction.reply("Are you sure you didn't made a mistake in the name ?")} //In case she hasn't been found

  			let girlDate = new Date(year, datainfo[birthdayCandidate][2][1]-1, datainfo[birthdayCandidate][2][0]); //Date of her birthday
			
			//Operation to set the closest birthday in the future
			if((datainfo[birthdayCandidate][2][1] == month +1) && (datainfo[birthdayCandidate][2][0] < day)) { //If we are in the month of her birthday, and her birthday is already over
  		   		girlDate.setFullYear(girlDate.getFullYear() +1) //We increase the next birthday year by 1
  			} else if (datainfo[birthdayCandidate][2][1] < month+1) { // if we are already past her birthday month
  		   		girlDate.setFullYear(girlDate.getFullYear() +1) //We increase by one
  			}
		
  			let oneDay = 1000*60*60*24 //Number of millisecond in 1 day
		
  			let numberOfDaysLeft = Math.floor((girlDate.getTime() - todayDate.getTime() )/ oneDay) //Operation for the difference of days between 2 dates
		
  			return interaction.reply("There is "+numberOfDaysLeft+" days left before "+datainfo[birthdayCandidate][0]+" birthday.")
		} else {

			let counterArray = 0;
			let nearBirthday = todayDate.setFullYear(todayDate.getFullYear() +1).getTime();
			let nearbyBirthdayCharacter;
			let girldBirthdayDate;
			let daysLeft;
			let daysLeftBeforeBirthday;

			for(counterArray; counterArray <datainfo.length(); counterArray++) {
				girldBirthdayDate = new Date(year, datainfo[counterArray][2][1]-1, datainfo[counterArray][2][0]);

				if((datainfo[birthdayCandidate][2][1] == month +1) && (datainfo[birthdayCandidate][2][0] < day)) { //If we are in the month of her birthday, and her birthday is already over
					girldBirthdayDate.setFullYear(girlDate.getFullYear() +1) //We increase the next birthday year by 1
			 	} else if (datainfo[birthdayCandidate][2][1] < month+1) { // if we are already past her birthday month
					girldBirthdayDate.setFullYear(girlDate.getFullYear() +1) //We increase by one
			 	}

				if(nearBirthday > girldBirthdayDate){
					nearBirthday = girldBirthdayDate;
					nearbyBirthdayCharacter = counterArray;
				}
			}

			daysLeft = func.daysLeftInMonth(day, month, year); //We calculate how much days is left in this month...
  		    daysLeftBeforeBirthday = birthdayArray[nearbyBirthdayCharacter][1][0] + daysLeft; //...and we add it to the day of the birthday
			
			if(daysLeftBeforeBirthday === 0){
				return interaction.reply("Happy birthday "+birthdayArray[nearbyBirthdayCharacter][0]+" !🍰");
			} else {
				return interaction.reply("There is "+daysLeftBeforeBirthday+" days before "+birthdayArray[nearbyBirthdayCharacter][0]+" birthday!"); //Message that will be sent, where the numbers of days is saved in each category, and the name is looked in the array
			}

		}
	},
};