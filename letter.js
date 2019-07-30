
function Letter(string) {
    this.theLetter = string.toUpperCase()
    this.isGuessed = false
    this.toString = () => {
        if (!this.isGuessed) return "_"
        else return this.theLetter
    }
    this.makeGuess = function(theGuess) {
        if (theGuess.toUpperCase() === this.theLetter) this.isGuessed = true
    }
}


module.exports = Letter;
