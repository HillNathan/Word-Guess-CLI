
function Letter(string) {
    // Letter constructor function. Takes in an argument as a string
    this.theLetter = string.toUpperCase()
    this.isGuessed = false
    // display function, shows an underscore if the letter has been guessed, or the letter if it has. 
    this.toString = () => {
        if (!this.isGuessed) return "_"
        else return this.theLetter
    }
    // checks to see if a guess matches the letter, and if it is a match updates the isGuessed flag
    this.makeGuess = function(theGuess) {
        if (theGuess.toUpperCase() === this.theLetter) this.isGuessed = true
    }
}

// export the constructor
module.exports = Letter;


