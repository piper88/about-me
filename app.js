var numCorrect = 0;

alert('Hi! Let\'s play a guessing game about me!');
var userName = prompt('To begin, tell me your name');
console.log('User\'s name is ' + userName);

alert('Okay ' + userName + ', let\'s begin!');

var questions = ['Do I like to go hiking?','Did I go to college in Washington State?','Am I attempting to grow my first garden this summer?','Do I have a dog named Piper?','Do I like coffee more than tea?'];
var responses = ['YES', 'Y', 'NO', 'N'];
var correctAnswers = ['Correct.', 'Sorry, wrong.'];

function hiking() {
  var answer1 = prompt(questions[0]).toUpperCase();
  console.log('Does ' + userName + ' think I like hiking? ' + answer1);
  if(answer1 === responses[0] || answer1 === responses[1]) {
    alert(correctAnswers[0]);
    numCorrect += 1;
    console.log(numCorrect);
  } else {
    alert(correctAnswers[1]);
  }
}
hiking();

function college() {
  var answer2 = prompt(questions[1]).toUpperCase();
  console.log('Does ' + userName + ' think I went to college in Washington? ' + answer2);
  if(answer2 === responses[2] || answer2 === responses[3]) {
    alert(correctAnswers[0]);
    numCorrect += 1;
    console.log(numCorrect);
  } else {
    alert(correctAnswers[1]);
  }
}

college();

function garden() {
  var answer3 = prompt(questions[2]).toUpperCase();
  console.log('Does ' + userName + ' think I\'m growing my first garden this season? ' + answer3);
  if(answer3 === responses[0] || answer3 === responses[1]) {
    alert(correctAnswers[0]);
    numCorrect += 1;
    console.log(numCorrect);
  } else {
    alert(correctAnswers[1]);
  }
}

garden();

function piper() {
  var answer4 = prompt(questions[3]).toUpperCase();
  console.log('Does ' + userName + ' think I have a dog named Piper? ' + answer4);
  if(answer4 === responses[0] || answer4 === responses[1]) {
    alert(correctAnswers[0]);
    numCorrect += 1;
    console.log(numCorrect);
  } else {
    alert(correctAnswers[1]);
  }
}

piper();

function coffee() {
  var answer5 = prompt(questions[4]).toUpperCase();
  console.log('Does ' + userName + ' think I prefer coffee over tea? ' + answer5);
  if(answer5 === responses[0] || answer5 === responses[1]) {
    alert(correctAnswers[0]);
    numCorrect += 1;
    console.log(numCorrect);
  } else {
    alert(correctAnswers[1]);
  }
}
coffee();

//start of guessing game

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
