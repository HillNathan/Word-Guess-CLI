const inquirer = require("inquirer")
const word = require("./word.js")
const fs = require("fs")


let myNewWord = new word('test')

console.log(myNewWord.display())

myNewWord.guessLetter('s')

console.log(myNewWord.display())