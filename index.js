// setting up the environment
const inquirer = require("inquirer")
const word = require("./word.js")
const fs = require("fs")

// set up the state object to track game data
let state = {
    guessesLeft: 10,
}

// set up the list of words the game will select from for the user to try to guess
let wordsArray = [  'javascript',
                    'program',
                    'script', 
                    'function',
                    'designer']

// pick a random word from the wordsArray 
let myNewWord = new word(wordsArray[Math.floor(Math.random() * wordsArray.length)])

// this is the recursive function that will serve as our primary game engine 
const guessingGame = () => {
    // display the remaining guesses and the word object. 
    console.log('\n\n')
    console.log('|=================================|')
    // use an if clause to account for the variable width of the string based on how many guesses are left
    if (state.guessesLeft === 10) console.log(`| you have ${state.guessesLeft} wrong guesses left. |`)
    else console.log(`| you have ${state.guessesLeft} wrong guesses left.  |`)
    console.log('|=================================|')
    console.log('\n')
    console.log(myNewWord.display())
    console.log('\n')
    
    // game logic.

    // if there are no guesses left, the user loses the game otherwise ask for a letter using an inquirer prompt.
    if (state.guessesLeft > 0) {
        inquirer.prompt([
            {   type: 'input',
                message: "Please guess a letter.",
                name: 'myGuess' } ])
        .then(theGuess => {
            // this method officially does the guessing within the Word object
            myNewWord.guessLetter(theGuess.myGuess)

            // if there are no blank spaces, the user has won the game and an appropriate message is displayed. 
            if ( !myNewWord.display().includes("_") ) {
                console.log(myNewWord.display())
                console.log('Congratulations, you have won the game!') 
            }
            // otherwise if it was a correct guess then do this:
            else {
                if (myNewWord.display().includes(theGuess.myGuess.toUpperCase())) {
                    // if the guess was correct then call the function with no decrement to the wrong guess counter
                    guessingGame()
                }
                else {
                    // if the guess was wrong then call the function after decrement to the wrong guess counter
                    state.guessesLeft--
                    guessingGame()
                }
            }               
        })
    }
    else {
        console.log("I'm sorry, but you are out of guesses")
    }
}
// initial function call to start the game
guessingGame()