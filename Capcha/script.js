//
//
let submitButton = document.getElementById("submit-button");
let reloadButton = document.getElementById("reload-button");
let userInput = document.getElementById("user-input");
let textOutput = document.getElementById("text");
let canvas = document.getElementById("canvas");
let text = "";

//

const textGenerator = () => {
    let genaratedText = "";
    for (let i = 0; i < 3; i++) {
        genaratedText += String.fromCharCode(randomNumber(65, 90));

        genaratedText += String.fromCharCode(randomNumber(97, 122));

        genaratedText += String.fromCharCode(randomNumber(48, 57));
        // genaratedText+= String.fromCharCode(randomNumber())
    }
    return genaratedText;
};

const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

console.log(textGenerator());