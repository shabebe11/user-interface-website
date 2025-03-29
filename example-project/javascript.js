// This is the JavaScript code
// There are not many comments here, but you can play with the code and work out what it does

// These are some of the variables to make the game work:
let maxNumber = 20;
let numberToGuess = Math.ceil(Math.random() * maxNumber);
let guessesLeft = 5; 

// This line logs the random number to the developer console in the browser:
console.log(`Then number to guess is ${numberToGuess}`);

// These are variables to store references to the HTML elements:
const botMessage = document.getElementById("bot-message");
const maxDisplay = document.getElementById("max-display");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const guessesDisplay = document.getElementById("guesses-display");
const restartButton = document.getElementById("restart-button");

// This line adds the necessary numbers to the user interface:
maxDisplay.innerText = maxNumber;
guessesDisplay.innerText = guessesLeft;

// This line calls the handelUserGuess function when button clicked to run a round of game:
submitButton.addEventListener("click", handleUserGuess);

// This function has the game logic:
function handleUserGuess(){

    if (isNaN(userInput.value) || !userInput.value){
        botMessage.innerText = `Please input a number between 1 and ${maxNumber}`;
        return;
    }
    
    const userGuess = parseInt(userInput.value);

    if (userGuess < 1 || userGuess > maxNumber){
        botMessage.innerText = `Please input a number between 1 and ${maxNumber}`;
    } else if (guessesLeft == 0){
        botMessage.innerText = `NO GUESSES LEFT!!`;
    } else if (userGuess === numberToGuess){
        botMessage.innerText = `Congratulations you win! The number was ${numberToGuess}.`;
    } else if (userGuess < numberToGuess){
        botMessage.innerText = `Wrong! Guess higher!.`;
        guessesLeft -= 1;
        guessesDisplay.innerText = guessesLeft;
        if (guessesLeft == 0){
            botMessage.innerText = `NO GUESSES LEFT!!`;
        }
    } else if (userGuess > numberToGuess){
        botMessage.innerText = `Wrong! Guess lower!.`;
        guessesLeft -= 1;
        guessesDisplay.innerText = guessesLeft;
        if (guessesLeft == 0){
            botMessage.innerText = `NO GUESSES LEFT!!`;
        }
    }
}

// The code below handles restarting the game:
restartButton.addEventListener("click", restartGame);

function restartGame(){
    location.reload();
}
