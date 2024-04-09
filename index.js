var readlineSync = require("readline-sync");

console.log("Maithri's Quiz");
console.log("----------------------")

var Username = readlineSync.question("What is your name? ");
console.log("")
console.log("Welcome " + Username + " how well do you know me? ");
console.log("")
console.log("Shall we begin??")
console.log("")

var highScore = {
  Name : "dummy",
  Score: 0
}
var questions = [
  {
    question: "What is my favourite color? a) Yellow b) Blue c) Pink ",
    answer: "c"
  },
  {
    question: "What is my birth place? a) Hyderabad b) Vijayawada c) Adilabad ",
    answer: "a"
  },
  {
    question: "Which is my favourite beverage ? a) Coffee b) Tea",
    answer: "a"
  },
  {
    question: "What is my favourite food? a) chicken Biryani b) Dal c) Mushroom",
    answer: "a"
  },
  {
    question: "What do i love about beaches? a) Waves b) Crowd c) Food",
    answer: "a"
  },

];
score = 0;
function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toLowerCase() === answer.toLowerCase()){
    console.log("You are correct!");
    score = score + 1;

  }else{
    console.log("You are wrong!");
    score = score - 1;

  }
  console.log("")
  console.log("Current Score = " + score);
  console.log("")
}

for(var i = 0; i < questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Your final score is " +score + " out of " + questions.length);

if(score > highScore.Score){
  highScore.Name = Username;
  highScore.Score = score;
}
console.log("")
console.log("High Score till now is by " + highScore.Name + " Score is " + highScore.Score);