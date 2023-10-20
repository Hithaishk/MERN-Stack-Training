const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
let attempts = 0;

guessButton.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low. Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high. Try again.";
    }
}
