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