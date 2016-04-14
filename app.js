var numCorrect = 0;

alert('Hi! Let\'s play a guessing game about me!');
var userName = prompt('To begin, tell me your name');
console.log('User\'s name is ' + userName);

alert('Okay ' + userName + ', let\'s begin!');

var answer1 = prompt('Do I like to go hiking?').toUpperCase();
console.log('Does ' + userName + ' think I like hiking? ' + answer1);
if(answer1 === 'Y' || answer1 === 'YES') {
  alert('Correct! Hiking and backpacking are some of my favorite activities.');
  numCorrect += 1;
  console.log(numCorrect);
} else {
  alert('I actually do like to hike');
}

var answer2 = prompt('Did I go to college in Washington State?').toUpperCase();
console.log('Does ' + userName + ' think I went to college in Washington? ' + answer2);
if(answer2 === 'N' || answer2 === 'NO') {
  alert('You\'re right ' + userName + ', I went to school in California, at Pomona College.');
  numCorrect += 1;
  console.log(numCorrect);
} else {
  alert('Actually, I went to college in California, at Pomona College.');
}

var answer3 = prompt('Am I attempting to grow my first garden this summer?').toUpperCase();
console.log('Does ' + userName + ' think I\'m growing my first garden this season? ' + answer3);
if(answer3 === 'Y' || answer3 === 'YES') {
  alert('I am! So far the squirrels have dug up everything I\'ve planted, but I\'m still hopeful.');
  numCorrect += 1;
  console.log(numCorrect);
} else {
  alert('I am trying to grow my first garden this year-- I\'ve never done it before!');
}

var answer4 = prompt('Do I have a dog named Piper?').toUpperCase();
console.log('Does ' + userName + ' think I have a dog named Piper? ' + answer4);
if(answer4 === 'Y' || answer4 === 'YES') {
  alert('Correct ' + userName + ', she is a black lab and husky mix');
  numCorrect += 1;
  console.log(numCorrect);
} else {
  alert('Incorrect, I do have a dog named Piper');
}

var answer5 = prompt('Do I like coffee more than tea?').toUpperCase();
console.log('Does ' + userName + ' think I prefer coffee over tea? ' + answer5);
if(answer5 === 'Y' || answer5 === 'YES') {
  alert('Bingo! I am very addicted to coffee and rarely drink tea.');
  numCorrect += 1;
  console.log(numCorrect);
} else {
  alert('No, I actually much prefer coffee to tea.');
}

//start of guessing game
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

alert('Now we\'re going to play another guessing game. This time, try and guess which state besides Washington I\'ve lived in.');
var numGuesses7 = 0;
var states = ['CALIFORNIA', 'OREGON', 'HAWAII'];

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

alert('Good Job ' + userName + ', you got ' + numCorrect + ' out of 7 correct. I hope you enjoyed learning about me!');
