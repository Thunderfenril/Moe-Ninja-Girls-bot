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