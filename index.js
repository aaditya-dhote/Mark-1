var readlineSync = require('readline-sync');
var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right");
    score = score + 1;
    console.log(score);
  }
  else {
    console.log("Galat jawaab");
    score = score;
    console.log(score);
  }

}
var list = ["What is my nickname? ", "Where do i live? ", "Where did i go for pursuing engineering? ", "In which subject i did my engineering? ", "Which is my favourite fruit? "];
var listans = ["Prince", "Betul", "Indore", "Mechanical", "Mango"]
for (var i = 0; i < list.length; i++)
  play(list[i], listans[i]);
console.log("Yay your Total score is: " + score);
console.log("Highest score is 4")