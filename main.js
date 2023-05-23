// Variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

// Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", handleEnterPress);

// Callback fuctions
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttemps} tentativas!`;
  }

  inputNumber.value = "";
  xAttemps++;
}

function handleResetClick() {
  toggleScreen();
  xAttemps = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnterPress(event){
  if (event.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
