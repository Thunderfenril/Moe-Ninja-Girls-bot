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