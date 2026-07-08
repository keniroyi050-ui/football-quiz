let title = document.getElementById("title");
let options = document.getElementById("option-list");
let startBtn = document.getElementById("start-btn");
let optionList = document.querySelectorAll("#option-list li");
let startScreen = document.querySelector(".start-screen");

let players = ["messi", "mbappe", "di maria", "kolo muani"];

const quiz = [
  {
    question: "Who scored the winning goal at World Cup Final 2022?",
    options: ["Messi", "Mbappe", "Di Maria", "Kolo Muani"],
  },
  {
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["France", "Argentina", "Brazil", "Croatia"],
  },
  {
    question: "Who won the Golden Boot at the 2022 World Cup?",
    options: ["Messi", "Mbappe", "Giroud", "Alvarez"],
  },
  {
    question: "Which country hosted the 2022 World Cup?",
    options: ["Qatar", "USA", "Russia", "Germany"],
  },
  {
    question: "How many players does each team have on the field?",
    options: ["10", "11", "12", "9"],
  },
  {
    question: "Which player is known as CR7?",
    options: ["Messi", "Ronaldo", "Neymar", "Benzema"],
  },
  {
    question: "Which club has won the most Champions League titles?",
    options: ["Barcelona", "Liverpool", "Real Madrid", "Bayern Munich"],
  },
  {
    question: "What color card sends a player off?",
    options: ["Yellow", "Blue", "Red", "Green"],
  },
  {
    question: "How long is a normal football match?",
    options: ["80", "90", "100", "120"],
  },
  {
    question: "Which country has won the most World Cups?",
    options: ["Germany", "Brazil", "Italy", "Argentina"],
  },
  {
    question: "Who is Barcelona's all-time top scorer?",
    options: ["Suarez", "Messi", "Ronaldinho", "Xavi"],
  },
  {
    question: "How many yellow cards equal a red card?",
    options: ["1", "2", "3", "4"],
  },
  {
    question: "Who won Euro 2020?",
    options: ["England", "Italy", "Spain", "France"],
  },
  {
    question: "Who won the Ballon d'Or 2023?",
    options: ["Haaland", "Mbappe", "Messi", "De Bruyne"],
  },
  {
    question: "Which position can use hands?",
    options: ["Goalkeeper", "Defender", "Midfielder", "Striker"],
  },
  {
    question: "How many points is a league win worth?",
    options: ["1", "2", "3", "4"],
  },
  {
    question: "The Premier League belongs to which country?",
    options: ["Spain", "England", "Germany", "Italy"],
  },
  {
    question: "Who scored the Hand of God goal?",
    options: ["Pele", "Maradona", "Messi", "Ronaldo"],
  },
  {
    question: "Which club does Erling Haaland play for?",
    options: ["Barcelona", "PSG", "Manchester City", "Real Madrid"],
  },
  {
    question: "A foul inside the penalty area results in what?",
    options: ["Corner", "Penalty", "Throw In", "Goal Kick"],
  },
];

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
