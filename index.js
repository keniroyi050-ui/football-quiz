let title = document.getElementById("title");
let options = document.getElementById("option-list");
let startBtn = document.getElementById("start-btn");
let optionList = document.querySelectorAll("#option-list li");
let startScreen = document.querySelector(".start-screen");

let players = ["messi", "mbappe", "di maria", "kolo muani"];

function start() {
  title.textContent = "1. Who scored the winning goal at world cup final 2022";

  options.style.display = "block";

  optionList.forEach((option, index) => {
    option.textContent = players[index];
  });

  startBtn.style.display = "none";

  let myDiv = document.createElement("div");

  startScreen.appendChild(myDiv);

  console.log(startScreen);
  let button = document.createElement("button");
  button.classList.add("prev-btn");
  myDiv.appendChild(button);
  button.textContent = "previous";
  console.log(button);
  let button2 = document.createElement("button");
  button2.classList.add("next-btn");
  myDiv.appendChild(button2);
  button2.textContent = "Next";
  console.log(button2);
}

startBtn.addEventListener("click", start);
