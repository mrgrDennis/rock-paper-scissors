
let score1 = 0
let score2 = 0

console.log('enter your choice')

ch = prompt('rock, paper or scissors... make a choice')
let choices = ch.toLowerCase()

let comp_choice = " "

let value = Math.floor(Math.random() * 3)

function computer() {
  if (value == 0) {
    comp_choice = 'rock'
  }
  else if (value == 1){
    comp_choice = 'paper'
  }
  else if (value == 2){
    comp_choice = 'scissors'
  }
  console.log("computer plays:"+comp_choice +' ' + "player plays:"+choices);
}
function pick() {
  computer()
  if (comp_choice == choices) {
    console.log('draw')
  }
  else if (comp_choice == 'paper' && choices == 'rock') {
    console.log('computer win');
  }
  else if (comp_choice == 'rock' && choices == 'scissors') {
    console.log('computer win');
  }
  else if (comp_choice == 'scissors' && choices == 'paper') {
    console.log('computer win');
  }
  else if (choices == 'paper' && comp_choice == 'rock') {
    console.log('player win');
  }
  else if (choices == 'rock' && comp_choice == 'scissors') {
    console.log('player win');
  }
  else if (choices == 'scissors' && comp_choice == 'paper') {
    console.log('player win');
  }
  else {
    console.log('error')
  }
}
for (var i = 0; i < 3; i++) {
  choices = prompt('rock, paper or scissors... make a choice').toLowerCase()
  comp_choice = ""
  value = Math.floor(Math.random() * 3)
  computer()
  pick()
}
pick()
