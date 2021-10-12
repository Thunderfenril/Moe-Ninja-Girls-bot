module.exports = {
    daysLeftInMonth,
    death,
    givePositionIndex,
    givePositionRanking,
    monthToString,
    shuffle,
    versusFight,
}

const data = require("../array/data")

/*
  Function: daysLeftInMonth
  Parameter: 3 int that correspond to the current day, the month-1 and the year
  Return: The number of days left in the current month of the current year
*/
function daysLeftInMonth(day, month, year) {
    month+=1; //We increase it to make it a bit easier to work with
    var daysInMonth; //We create a var that will save the number of days in a month
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12) { //January, March, May, July, August, October and December
      daysInMonth=31;
    } else if (month!=2) { //All the other month except February
      daysInMonth=30;
    } else {
      if(((year%4==0)&&(year%100!=0))||(year%400==0)){ //February has 29 days, if we can divide the year by 4 but not by 100 or if we can divide it by 400. That means, division without any rest
        daysInMonth=29;
      } else {
        daysInMonth=28;
      }
    }
    var daysLeft=daysInMonth-day;
    return daysLeft;
  }

/*
  Function: death
  Parameter: A variable
  Effect: If the variable is a mention, put the id in the array deadList, else do nothing
*/
function death(target){
    if(target!=undefined) {//We look if it's a mention or not, if it isn't, it's undefined
      let toBury = target.id; //We save the id of the mention in a variable
      if (deadList.length == 0) { //We check if the array is empty
        deadList.push(toBury); //We push this value in the array deadList if it's empty
        return;
      } else {
        let deadCounter=0; //We initialize a variable to 0
        for (deadCounter; deadCounter < deadList.length; deadCounter++){ //We do a for loop in the array
          if(deadList[deadCounter] == toBury){ //If the target is already in the list
            return; //We stop, we are humans, not cats
          }
        }
      }
      deadList.push(toBury); //We push this value in the array deadList if the target isn't in the list
    }
  }

/*
  Function: givePositionIndex
  Parameter: A name
  Return: The position in the array data
*/
function givePositionIndex(name){
    let targetName = name; //We save the nbame in a variable
    let indexGirl = -1; //We initialize a variable to -1 if not found
    let nameTarget = targetName.charAt(0).toUpperCase() + targetName.substr(1, 10); //We change the name so it start with a major letter
  
    for(counter = 0; counter < data.length; counter ++){ //For loop
      if(nameTarget === data[counter][0]){ //If to check if the name correspond
        indexGirl = counter; //If yes, then we save the position in a variable
      }
    }
    return indexGirl;
  }

/*
  Function: givePositionRanking
  Parameter: 2 string
  Return: An int, the ranking of the girl in the chosen category
*/
function givePositionRanking(name, category){ //Change, add all, then  sort, and for from end
    let index=-1;
    let indexGirl = -1;
    for(counter = 0; counter<data.length; counter++){
      if(name == data[counter][0]){
        indexGirl=counter;
      }
    }
  
    let rankingArray=[];
  
    switch (category) {
      case "height":
        for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
          rankingArray.indexOf(data[counterRankingArray][4]) === -1 ? rankingArray.push(data[counterRankingArray][4]) : index = -1;
        }
        rankingArray.sort(function(a, b){return b-a});
        for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
          if(data[indexGirl][4]==rankingArray[counterIndexRanking]){
            index=counterIndexRanking;
          }
        }
        break;
      case "bust":
        for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
          rankingArray.indexOf(data[counterRankingArray][5][0]) === -1 ? rankingArray.push(data[counterRankingArray][5][0]) : index = -1;
        }
        rankingArray.sort(function(a, b){return b-a});
        for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
          if(data[indexGirl][5][0]==rankingArray[counterIndexRanking]){
            index=counterIndexRanking;
          }
        }
        break;
      case "waist":
        for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
          rankingArray.indexOf(data[counterRankingArray][5][1]) === -1 ? rankingArray.push(data[counterRankingArray][5][1]) : index = -1;
        }
        rankingArray.sort(function(a, b){return b-a});
        for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
          if(data[indexGirl][5][1]==rankingArray[counterIndexRanking]){
            index=counterIndexRanking;
          }
        }
        break;
      case "hips":
        for(counterRankingArray = 0; counterRankingArray<data.length; counterRankingArray++){
          rankingArray.indexOf(data[counterRankingArray][5][2]) === -1 ? rankingArray.push(data[counterRankingArray][5][2]) : index = -1;
        }
        rankingArray.sort(function(a, b){return b-a});
        for(counterIndexRanking=0; counterIndexRanking<rankingArray.length; counterIndexRanking++){
          if(data[indexGirl][5][2]==rankingArray[counterIndexRanking]){
            index=counterIndexRanking;
          }
        }
        break;
      default:
        message.channel.send("Error in givePositionRanking")
    }
    index++;
    return index;
  }

/*
Function : monthToString
Parameter : an int
Return : A string corresponding to the month of the int
*/
function monthToString(monthInt) {
    switch (monthInt) {
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June";
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default: return "Error";
    }
  }

/*
  Function: shuffle
  Parameter: 1 array
  Return: The array with the value being in random place
*/
function shuffle(array){
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
  
    while(0!== currentIndex){ //While we still have things to shuffle
      randomIndex=Math.floor(Math.random() * currentIndex); //We create a random number that will serve for the shuffle
      currentIndex-=1; //We decremente the value
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue; //And we swap
    }
  
    return array;
  }

/*
  Function: versusFight
  Parameter: Position of the 2 fighter in data and in which round they compete
  Return: The position of the winner
*/
function versusFight(right, left, round, subRound){
    if(round == 5) {
      if(data[right][round][subRound] > data[left][round][subRound]){
        return right;
      } else if(data[right][round][subRound] < data[left][round][subRound]) {
        return left;
      } else {
        return -1;
      }
    } else if(round == 12) {
      if(data[right][round][subRound][1] > data[left][round][subRound][1]){
        return right;
      } else if(data[right][round][subRound][1] < data[left][round][subRound][1]) {
        return left;
      } else {
        return -1;
      }
    } else {
      if (data[right][round] > data[left][round]) {
        return right;
      } else if(data[right][round] < data[left][round]) {
        return left;
      } else {
        return -1;
      }
    }
  }