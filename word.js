const letter = require('./letter.js')

// let temp = new letter("A")
// console.log(temp)

function Word(theWord) {
    let theArray = []
    for (let i = 0; i < theWord.length; i++) {
        let temp = new letter(theWord.charAt(i))
        theArray.push(temp)
    }
    this.myWord = theArray
    this.display = () => {
        let wordString = ''
        this.myWord.forEach(elem => {
            wordString += elem.toString()
        })
        return wordString
    }
    this.guessLetter = (char) => {
        this.myWord.forEach(elem => elem.makeGuess(char) )

    }
}

module.exports = Word;