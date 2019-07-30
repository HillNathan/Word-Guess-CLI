
const word = require("./word.js")



let myNewWord = new word('test')

console.log(myNewWord.display())

myNewWord.guessLetter('s')

console.log(myNewWord.display())