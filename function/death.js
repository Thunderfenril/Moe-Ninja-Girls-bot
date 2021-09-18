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