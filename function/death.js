const death1 = require("../array/deadList");

/*
  Function: death
  Parameter: A variable
  Effect: If the variable is a mention, put the id in the array deadList, else do nothing
*/
function death(target){
  if(target!=undefined) {//We look if it's a mention or not, if it isn't, it's undefined
    if(typeof target == "string") {
      if(death1.length == 0){
        death1.push(target);
        return;
      } else {
        let deadCounter = 0;
        for(deadCounter; deadCounter < death1.length; deadCounter++) {
          if(death1[deadCounter] == target) {
            return;
          }
        }
      }
      return death1.push(target);
    }

    let toBury = target.id; //We save the id of the mention in a variable
    if (death1.length == 0) { //We check if the array is empty
      death1.push(toBury); //We push this value in the array deadList if it's empty
      return;
    } else {
      let deadCounter=0; //We initialize a variable to 0
      for (deadCounter; deadCounter < death1.length; deadCounter++){ //We do a for loop in the array
        if(death1[deadCounter] == toBury){ //If the target is already in the list
          return; //We stop, we are humans, not cats
        }
      }
    }
    death1.push(toBury); //We push this value in the array deadList if the target isn't in the list
  }
}
