var numCorrect = 0;

alert('Hi! Let\'s play a guessing game about me!');
var userName = prompt('To begin, tell me your name');
console.log('User\'s name is ' + userName);

alert('Okay ' + userName + ', let\'s begin!');

var questions = ['Do I like to go hiking?','Did I go to college in Washington State?','Am I attempting to grow my first garden this summer?','Do I have a dog named Piper?','Do I like coffee more than tea?'];
var correctAnswer = [['YES','Y'], ['NO','N'], ['YES','Y'], ['YES','Y'], ['YES', 'Y']];
var tellUserCorrect = ['Correct!', 'Correct! I went to school in California', 'Correct!', 'Correct', 'Correct, I am not crazy about tea'];
var tellUserIncorrect = ['Incorrect', 'Incorrect', 'WRONG', 'Incorrect, I do have a dog named Piper', 'Incorrect, I am very much addicted to coffee.'];

function yesNoQuestions() {
  for (i = 0; i < questions.length; i++) {
    var userAnswer = (prompt(questions[i])).toUpperCase();
    if (userAnswer === correctAnswer[i][0] || userAnswer === correctAnswer[i][1]) {
      alert(tellUserCorrect[i]);
      numCorrect += 1;
      console.log(numCorrect);
    } else {
      alert(tellUserIncorrect[i]);
    } //end of if/else
  }//end of for
}//end of function

yesNoQuestions();

function favNumber() {
  var answer = 8;
  var numGuesses6 = 0;
  alert('Let\'s play a guessing game. You have four chances to guess my favorite number. It is between 1 and 10.');

  while(numGuesses6 < 4) {
    var userAnswer = parseInt(prompt('Enter your guess'));
    if (isNaN(userAnswer)) {
      alert('Please enter a whole number');
      console.log(userAnswer);
    } else {
      if(userAnswer === answer) {
        alert('Correct!');
        numGuesses6 = 4;
        numCorrect += 1;
        console.log(numCorrect);
      } else {
        if(userAnswer > 8) {
          alert('Too high');
          numGuesses6 += 1;
          console.log(numGuesses6);
        } else if(userAnswer < 8) {
          alert('Too low');
          numGuesses6 += 1;
          console.log(numGuesses6);
        }
      }
    }
  }
}

favNumber();

alert('Now we\'re going to play another guessing game. This time, try and guess which state besides Washington I\'ve lived in.');
var numGuesses7 = 0;
var states = ['CALIFORNIA', 'OREGON', 'HAWAII'];

function state() {
  while(numGuesses7 < 6) {
    var userAnswer7 = prompt('What state besides Washington have I lived in?').toUpperCase();
    for(var i = 0; i < states.length; i++) {
      if(userAnswer7 === states[0] || userAnswer7 === states[1] || userAnswer7 === states[2]) {
        alert('Correct!');
        numGuesses7 = 6;
        numCorrect += 1;
        console.log(numCorrect);
        break;
      } else {
        alert('Incorrect');
        numGuesses7 += 1;
        console.log(numGuesses7);
        break;
      }//end of if/else loop
    } //end of for loop
  } //end of while loop
  alert('I have lived in ' + states.toString());
}

state();

alert('Good Job ' + userName + ', you got ' + numCorrect + ' out of 7 correct. I hope you enjoyed learning about me!');
