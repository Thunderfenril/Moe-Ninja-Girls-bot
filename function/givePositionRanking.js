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