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
} else {
  alert('I actually do like to hike');
}

var answer2 = prompt('Did I go to college in Washington State?').toUpperCase();
console.log('Does ' + userName + ' think I went to college in Washington? ' + answer2);
if(answer2 === 'N' || answer2 === 'no') {
  alert('You\'re right ' + userName + ', I went to school in California, at Pomona College.');
  numCorrect += 1;
} else {
  alert('Actually, I went to college in California, at Pomona College.');
}

var answer3 = prompt('Am I attempting to grow my first garden this summer?').toUpperCase();
console.log('Does ' + userName + ' think I\'m growing my first garden this season? ' + answer3);
if(answer3 === 'Y' || answer3 === 'YES') {
  alert('I am! So far the squirrels have dug up everything I\'ve planted, but I\'m still hopeful.');
  numCorrect += 1;
} else {
  alert('I am trying to grow my first garden this year-- I\'ve never done it before!');
}

var answer4 = prompt('Do I have a dog named Piper?').toUpperCase();
console.log('Does ' + userName + ' think I have a dog named Piper? ' + answer4);
if(answer4 === 'Y' || answer4 === 'YES') {
  alert('Correct ' + userName + ', she is a black lab and husky mix');
  numCorrect += 1;
} else {
  alert('Incorrect, I do have a dog named Piper');
}

var answer5 = prompt('Do I like coffee more than tea?').toUpperCase();
console.log('Does ' + userName + ' think I prefer coffee over tea? ' + answer5);
if(answer5 === 'Y' || answer5 === 'YES') {
  alert('Bingo! I am very addicted to coffee and rarely drink tea.');
  numCorrect += 1;
} else {
  alert('No, I actually much prefer coffee to tea.');
}

var answer = 8;
var numGuesses = 0;
alert('Let\'s play a guessing game. You have four chances to guess my favorite number. It is between 1 and 10.');

while(numGuesses < 4) {
  var userAnswer = parseInt(prompt('Enter your guess'));
  if (isNaN(userAnswer)) {
    alert('Please enter a whole number');
    console.log(userAnswer);
  } else {
    if(userAnswer === answer) {
      alert('Correct!');
      numGuesses = 4;
      numCorrect += 1;
    } else {
      if(userAnswer > 8) {
        alert('Too high');
        numGuesses += 1;
        console.log(numGuesses);
      } else if(userAnswer < 8) {
        alert('Too low');
        numGuesses += 1;
        console.log(numGuesses);
      }
    }
  }
}
