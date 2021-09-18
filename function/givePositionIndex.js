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