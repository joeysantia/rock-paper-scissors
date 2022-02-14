
let playerWins = 0
  , computerWins = 0
  , playerSelection


function computerPlay() { //Randomly chooses rock, paper, or scissors
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerPlay) {

        if (playerSelection === 'rock') {
            if (computerPlay() === 'rock') {
                resultsRound.textContent = 'Tie.'
            } else if (computerPlay() === 'paper') {
                computerWins++;
                resultsRound.textContent = 'Paper beats rock.'
            } else {
                playerWins++;
                resultsRound.textContent = 'Rock beats scissors.'
                
            }
        } else if (playerSelection === 'paper') {
            if (computerPlay() === 'rock') {
                playerWins++;
                resultsRound.textContent = 'Paper beats rock.'
            } else if (computerPlay() === 'paper') {
                resultsRound.textContent = 'Tie.'
            } else {
                computerWins++;
                resultsRound.textContent = 'Scissors beats paper.'
            }
        } else if (playerSelection === 'scissors') {
            if (computerPlay() === 'rock') {
                computerWins++;
                resultsRound.textContent = 'Rock beats scissors.'
            } else if (computerPlay() === 'paper') {
                playerWins++;
                resultsRound.textContent = 'Scissors beats paper.'
            } else {
                resultsRound.textContent = 'Tie.'
            }
        } else {
        }

    tallyDisplay() 

    resultDisplay()

    }

function tallyDisplay() {
    if (playerWins !== 0 || computerWins !== 0) {
        playerTally.textContent = `You: ${playerWins}`
        computerTally.textContent = `Computer: ${computerWins}`
    }
}

function resultDisplay () {
    if (playerWins === 3) {
        finalResult.textContent = 'You win!'
        results.appendChild(replayButton)
    } else if (computerWins === 3) {
        finalResult.textContent = 'You lose.'
        results.appendChild(replayButton)
    } else {

    }
}


const rock = document.querySelector('#rock')
rock.addEventListener('click', (e) => {
    playRound('rock', computerPlay)
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', (e) => { 
    playRound('paper', computerPlay)
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', (e) => { 
    playRound('scissors', computerPlay)
})

const results = document.querySelector('#results')

const resultsRoundLine = document.querySelector('#round-result')
const resultsRound = document.createElement('p')
resultsRoundLine.appendChild(resultsRound)

const playerTally = document.createElement('p')
tallies.appendChild(playerTally)

const computerTally = document.createElement('p')
tallies.appendChild(computerTally)

const finalResult = document.createElement('p')
results.appendChild(finalResult)

const replayButton = document.createElement('button')
replayButton.setAttribute('id', 'replay-button')
replayButton.textContent = 'Play Again?'
replayButton.addEventListener('click', (e) => {
    location.reload()
});







