//
document.querySelector("#guess").value = "";
let guess = document.querySelector(".my_btn");
let msg1 = document.querySelector("#messege1");
let msg2 = document.querySelector("#messege2");
let msg3 = document.querySelector("#messege3");
let answer = Math.trunc(Math.random() * 100) + 1;
let noGuess = 0;
let gussedNum = [];

guess.addEventListener("click", () => {
    let num = document.querySelector("#guess").value;
    if (num > 100 || num < 1) {
        alert("please enter a number between 1 and 100!");
    } else {
        gussedNum.push(num);
        noGuess++;

        if (num < answer) {
            msg1.textContent = "Your guess is too low!";
            msg2.textContent = "No. of gusses:" + noGuess;
            msg3.textContent = "Gessed number are:" + gussedNum;
            document.querySelector("#guess").value = "";
        } else if (num > answer) {
            msg1.textContent = "Your guess is too high!";
            msg2.textContent = "No. of gusses:" + noGuess;
            msg3.textContent = "Gessed number are:" + gussedNum;
            document.querySelector("#guess").value = "";
        } else if (num == answer) {
            msg1.textContent = "Yippie You Win";
            msg2.textContent = "the number was:" + answer;
            msg3.textContent = "You guessed it in" + noGuess + "guesses";
            document.querySelector("#guess").value = "";
            document.getElementById("my_btn").disabled = true;
        }
    }
});