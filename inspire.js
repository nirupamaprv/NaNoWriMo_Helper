
function create1(){
var x= Math.random();
x= 100*x;
x= Math.round(x);
//window.alert(x);
var answer = "Calculating";

if(x<10){
  answer = "Clock, mouse, book, chocolate, yellow";
}else if (x<20 && x>=10){
  answer = "Story, Romeo, mom, telephone, pink";
}else if (x<30 && x>=20){
  answer = "Letter, car, rain, door, satin";
}else if (x<40 && x>=30){
  answer = "statue, pink, boat, truth, coffee";
}else if (x<50 && x>=40){
  answer = "duck, teenager, black, wheel, soft";
}else if (x<60 && x>=50){
  answer = "Purple, bank, hair, sink, diary";
}else if (x<70 && x>=60){
  answer = "Cats, cash, brown, term, rag";
}else if (x<80 && x>=70){
  answer = "Santa, lock, green, bird, stairs";
}else if (x<90 && x>=80){
  answer = "Baby, ear, red, cushion, headphones";
}else if (x<=100){
  answer = "Pen, apple, soup, handbag, love";
}else{
  answer = "Your lead character is suddenly twenty again for a week! What would she do?";

}

window.alert(answer);
}