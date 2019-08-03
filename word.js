const letter = require('./letter.js')

function Word(theWord) {
    // word constructor, uses the letter constructor to build a word out of letter objects. 
    let theArray = []
    // build the word out of an array of Letter objects
    for (let i = 0; i < theWord.length; i++) {
        let temp = new letter(theWord.charAt(i))
        theArray.push(temp)
    }
    this.myWord = theArray
    // display function for the word, taking into account spaces between for easier guessing
    this.display = () => {
        let wordString = ''
        this.myWord.forEach(elem => {
            wordString += elem + " "
        })
        return wordString
    }
    // function to guess a letter on each Letter object in the array
    this.guessLetter = (char) => {
        this.myWord.forEach(elem => elem.makeGuess(char) )
    }
}

// export the constructor 
module.exports = Word;