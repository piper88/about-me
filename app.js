var numCorrect = 0;
var numWrong = 0;

alert('Hi! Let\'s play a guessing game about me!');
var userName = prompt('To begin, tell me your name');
console.log('User name is ' + userName);

alert('Okay ' + userName + ' , let\'s begin!');

var answer1 = prompt('Do I like to code?').toUpperCase();
if(answer1 === 'Y' || answer1 === 'YES') {
  alert('Correct!');
  numCorrect += 1;
} else {
  alert('WRONG you big dummy');
  numWrong += 1;
}

var answer2 = prompt('Is my favorite number 47?').toUpperCase();
if(answer2 === 'Y' || answer2 === 'YES') {
  alert('Good Job ' + userName);
  numCorrect += 1;
} else {
  alert('WRONG');
  numWrong += 1;
}

var answer3 = prompt('Is my favorite food salad?').toUpperCase();
if(answer3 === 'Y' || answer3 === 'YES') {
  alert('Of course not!');
  numWrong += 1;
} else {
  alert('Correct! My favorite food is french fries');
  numCorrect += 1;
}

var answer4 = prompt('Do I have a dog named Piper?').toUpperCase();
if(answer4 === 'Y' || answer4 === 'YES') {
  alert('Correct ' + userName);
  numCorrect += 1;
} else {
  alert('Incorrect, I do have a dog named Piper');
  numWrong += 1;
}

var answer5 = prompt('Is this a good game?').toUpperCase();
if(answer5 === 'Y' || answer5 === 'YES') {
  alert('Bingo!');
  numCorrect += 1;
} else {
  alert('WHAT???? Wrong answer');
  numWrong += 1;
}

if(numCorrect >= 3){
  alert('Good Job ' + userName + ' , you got ' + numCorrect + ' correct!');
} else {
  alert('You did pretty well ' + userName + ' , you got ' + numCorrect + ' correct' + ' and ' + numWrong + ' wrong.');
}
