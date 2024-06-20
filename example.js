const input = require('readline-sync');

let candidateName;
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride ";
let candidateAnswer = "";

candidateName = input.question("What is your name? ");
question = input.question(question);

if(candidateAnswer) {
    console.log("Good job! You are correct!");
  } else {
    console.log("Sorry try again");
  }