const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

gmailButton.addEventListener("click", function () {
    const email = gmailInput.value;
    const isValid = validateEmail(email);
    gmailResult.textContent = isValid ? "Валидный адрес Gmail" : "Невалидный адрес Gmail";
});

function validateEmail(email) {
    if (email.length < 3) {
        return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let position = 0;

function moveBlock() {
    if (position >= parentBlock.offsetWidth - childBlock.offsetWidth) {
        return;
    }

    childBlock.style.left = `${position}px`;

    position++;

    requestAnimationFrame(moveBlock)
}

moveBlock();

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const secondsDisplay = document.getElementById("seconds");

let intervalId;
let seconds = 0;

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        secondsDisplay.textContent = seconds;
    }, 1000);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(intervalId);
    startButton.disabled = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    secondsDisplay.textContent = seconds;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);