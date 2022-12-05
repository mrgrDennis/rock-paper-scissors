function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    if (value == 0) {
        comp_choice = 'rock'
      }
      else if (value == 1){
        comp_choice = 'paper'
      }
      else if (value == 2){
        comp_choice = 'scissors'
      }
    return comp_choice
}

let computerSelection = getComputerChoice()

function playround(){

    let select = prompt('rock, paper or scissors... make a choice')
    let playerSelection = select.toLowerCase()

    if (computerSelection === playerSelection) {
        return 'draw'
      }
    else if (computerSelection == 'paper' && playerSelection == 'rock' || computerSelection == 'rock' && playerSelection == 'scissors' || computerSelection == 'scissors' && playerSelection == 'paper') {
    return'computer win'
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'player win'
    }

    else {
    return 'error 001 : you didnt play by the rules!'
    }   
}

function game(){
    let score = 0
    for (let i = 0; i < 5; i++){
        playround()
        console.log(playround())
    }
}
game()
