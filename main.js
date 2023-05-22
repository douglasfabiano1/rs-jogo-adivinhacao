const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

// Callback fuction
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
    screen2.querySelector("h2")
        .innerText = `Acertou em ${xAttemps} tentativas!`;
  }
  inputNumber.value = "";
  xAttemps++;
}

// Events
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  xAttemps = 1;
});
