
function create(){
var x= Math.random();
x= 100*x;
x= Math.round(x);
//window.alert(x);
var answer = "Calculating";

if(x<10){
  answer = "The life of your high school rival as imagined by you! Be nice!";
}else if (x<20 && x>=10){
  answer = "The story of Romeo and Juliet set in 3000AD";
}else if (x<30 && x>=20){
  answer = "Write letters from a mom to her one year old child. The mom has only six months to live!!";
}else if (x<40 && x>=30){
  answer = "The tale of the apprentice of the architect of the Statue of Liberty!";
}else if (x<50 && x>=40){
  answer = "Rewrite the fabled Ugly Duckling but as a teenager in a wheelchair";
}else if (x<60 && x>=50){
  answer = "Imagine that you can read the diary of the only son of your boss! write about the confusion that would ensue!";
}else if (x<70 && x>=60){
  answer = "You can hear what cats say! Imagine your life now and start writing.";
}else if (x<80 && x>=70){
  answer = "Your list of things from Santa is coming true. You have space for two more items. What would you choose? Start writing about it!";
}else if (x<90 && x>=80){
  answer = "If babies could talk, what would you hear?";
}else if (x<=100){
  answer = "Your lead character has been cursed to only do what his mom says for a day! Consider the hilarious riot that would cause and pen them down.";
}else{
  answer = "Your lead character is suddenly twenty again for a week! What would she do?";

}

window.alert(answer);
}