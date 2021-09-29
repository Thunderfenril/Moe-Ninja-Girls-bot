const { SlashCommandBuilder } = require('@discordjs/builders');
const dataInfo = require('../array/data.js');
const func = require("../function/function.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('birthday')
		.setDescription('Send a string related to next birthday'),
	async execute(interaction) {
		const month=date.getMonth(); //We retrieve the current day, and we save it in a var
  		const day=date.getDate(); //We retrieve the current month as an int from 0 to 11, and we save it in a var
  		const year=date.getFullYear(); //We retrieve the current year and we save it in a var
  		 if (args[0]=== undefined) {
  		  let testSameMonth = -1; //We create a var that will be used to indicate if a girl in the list has a birthday this month, and after the current day
  		  var indexBirthday = -1; //Index used at the end to indicate in the array the girl with the next birthday
  		  var tempDayVar = 100; //Var used to calculate which girl has a day that is  near the start of the month, or of the current day
		
  		  let birthdayArray = []; //Empty array that will be filled with the girl meeting the criteria of not having their birthday yet
		
  		  if((month==11) && (day>6) ){ //Test to see if we are the 7th December or after, there is no birthday after the 6th December atm
  		    daysLeft=func.daysLeftInMonth(day, month, year); //We calculate how many days are left in this month with this function
  		    daysLeftBeforeBirthday = daysLeft+23; //We send add the 23 days of the first anniversary of the year
  		    message.channel.send("There is "+daysLeftBeforeBirthday+" days before Yamabuki birthday !");
  		  }
		
  		  for (counterBirthday=0; counterBirthday<dataInfo.length; counterBirthday++) {
  		    if (((dataInfo[counterBirthday][2][1]==(month+1))&&(dataInfo[counterBirthday][2][0]>=day))||(dataInfo[counterBirthday][2][1]==(month+2))) { //We look for girls that have their birthday after the current day
  		      var tempArray=[]; //We create a temporary array, where we will stock ...
  		      tempArray.push(dataInfo[counterBirthday][0]); //... the name of the girl...
  		      tempArray.push(dataInfo[counterBirthday][2]); //... and the date of her birthday
  		      birthdayArray.push(tempArray); //Then we push it in the cetral array
  		      if(dataInfo[counterBirthday][2][1]==(month+1)) { //We do a small test if the girl has her birthday this month or not
  		        testSameMonth=1; //If yes, then we change the value to 1
  		      }
  		    }
  		  }
		
  		  if(testSameMonth==1){ //If a girl has her birthday this month, then we enter here
  		    for(counterBirthdaySameMonth=0; counterBirthdaySameMonth<birthdayArray.length; counterBirthdaySameMonth++){ //We do a for loop in order to find which girl has her birthday the closest this month
  		      if((birthdayArray[counterBirthdaySameMonth][1][1]==(month+1))&&(birthdayArray[counterBirthdaySameMonth][1][0]<tempDayVar)){ //We ask, is it the same month than this and if the day is smaller than the one saved in tempDayVar
  		        tempDayVar=birthdayArray[counterBirthdaySameMonth][1][0]; //If yes, then we change the day saved in tempDayVar with the new one
  		        indexBirthday=counterBirthdaySameMonth; //And we save her position in the index
  		      }
  		    }
  		    daysLeftBeforeBirthday = tempDayVar - day; //Then we calculate the difference between the value saved in tempDayVar and the current day
  		  } else { //No girls have a birthday this month
  		    var tempMonthVar=100; //We create a local temporary variable to look for the next month where there is a birthday
  		    for(counterBirthdayDifferentMonth=0; counterBirthdayDifferentMonth<birthdayArray.length; counterBirthdayDifferentMonth++){
  		      if(birthdayArray[counterBirthdayDifferentMonth][1][1]<tempMonthVar) { //If it is smaller than the one saved in the variable
  		        tempMonthVar=birthdayArray[counterBirthdayDifferentMonth][1][1]; //Then we save it inside the variable
  		      }
  		    }
  		    for(counterBirthdayDifferentMonth=0; counterBirthdayDifferentMonth<birthdayArray.length; counterBirthdayDifferentMonth++){ //New for loop to look for the smallest day in the month saved inside tempMonthVar
  		      if((birthdayArray[counterBirthdayDifferentMonth][1][1]==tempMonthVar)&&(birthdayArray[counterBirthdayDifferentMonth][1][0]<tempDayVar)){
  		        tempDayVar=birthdayArray[counterBirthdayDifferentMonth][1][0];
  		        indexBirthday=counterBirthdayDifferentMonth;
  		      }
  		    }
  		    daysLeft = func.daysLeftInMonth(day, month, year); //We calculate how much days is left in this month...
  		    daysLeftBeforeBirthday = birthdayArray[indexBirthday][1][0] + daysLeft; //...and we add it to the day of the birthday
  		  }
		
  		  message.channel.send("There is "+daysLeftBeforeBirthday+" days before "+birthdayArray[indexBirthday][0]+" birthday!"); //Message that will be sent, where the numbers of days is saved in each category, and the name is looked in the array
  		 } else {
  		   let birthdayCandidate = func.givePositionIndex(args[0]);
  		   if(birthdayCandidate===-1) return message.channel.send("Are you sure you didn't made a mistake in the name ?")
  		   let todayDate = new Date(year, month, day); //Today date
  		   let girlDate = new Date(year, dataInfo[birthdayCandidate][2][1]-1, dataInfo[birthdayCandidate][2][0]);
		
  		   if((dataInfo[birthdayCandidate][2][1] == month +1) && (dataInfo[birthdayCandidate][2][0] < day)) {
  		    girlDate.setFullYear(girlDate.getFullYear() +1)
  		   } else if (dataInfo[birthdayCandidate][2][1] < month+1) {
  		    girlDate.setFullYear(girlDate.getFullYear() +1)
  		   }
		 
  		   let oneDay = 1000*60*60*24 //Number of millisecond in 1 day
		 
  		   let numberOfDaysLeft = Math.floor((girlDate.getTime() - todayDate.getTime() )/ oneDay)
		 
  		   message.channel.send("There is "+numberOfDaysLeft+" days left before "+dataInfo[birthdayCandidate][0]+" birthday.")
  		 }
	},
};