let title = document.getElementById("title");
let options = document.getElementById("option-list");
let startBtn = document.getElementById("start-btn");
let optionList = document.querySelectorAll("#option-list li");
let startScreen = document.querySelector(".start-screen");

const quiz = [
  {
    question: "Who scored the winning goal at the 2022 FIFA World Cup Final?",
    options: [
      "Lionel Messi",
      "Kylian Mbappé",
      "Ángel Di María",
      "Randal Kolo Muani",
    ],
    answer: "Ángel Di María",
  },
  {
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["France", "Argentina", "Croatia", "Brazil"],
    answer: "Argentina",
  },
  {
    question: "Who won the Golden Boot at the 2022 World Cup?",
    options: [
      "Lionel Messi",
      "Julián Álvarez",
      "Kylian Mbappé",
      "Olivier Giroud",
    ],
    answer: "Kylian Mbappé",
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Qatar", "Russia", "UAE", "Saudi Arabia"],
    answer: "Qatar",
  },
  {
    question: "How many players are on the field for one team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question: "Which player is known as CR7?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Luka Modrić"],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Which club has won the most UEFA Champions League titles?",
    options: ["Barcelona", "Liverpool", "Real Madrid", "Bayern Munich"],
    answer: "Real Madrid",
  },
  {
    question: "What color card means a player is sent off?",
    options: ["Yellow", "Blue", "Red", "Green"],
    answer: "Red",
  },
  {
    question: "How long is a regular football match?",
    options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
    answer: "90 minutes",
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Italy", "Brazil"],
    answer: "Brazil",
  },
  {
    question: "Who is Barcelona's all-time top scorer?",
    options: ["Luis Suárez", "Ronaldinho", "Lionel Messi", "Xavi"],
    answer: "Lionel Messi",
  },
  {
    question:
      "What is the maximum number of yellow cards before a red in one match?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Which country won Euro 2020?",
    options: ["England", "Spain", "Italy", "Portugal"],
    answer: "Italy",
  },
  {
    question: "Who won the Ballon d'Or in 2023?",
    options: [
      "Erling Haaland",
      "Kylian Mbappé",
      "Lionel Messi",
      "Kevin De Bruyne",
    ],
    answer: "Lionel Messi",
  },
  {
    question: "Which position is allowed to use hands?",
    options: ["Defender", "Midfielder", "Goalkeeper", "Striker"],
    answer: "Goalkeeper",
  },
  {
    question: "How many points is a win worth in football leagues?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "Which country is home to the Premier League?",
    options: ["Spain", "Germany", "England", "France"],
    answer: "England",
  },
  {
    question: "Who scored the 'Hand of God' goal?",
    options: ["Pelé", "Diego Maradona", "Ronaldinho", "Ronaldo Nazário"],
    answer: "Diego Maradona",
  },
  {
    question: "Which club does Erling Haaland play for?",
    options: ["Real Madrid", "Manchester City", "PSG", "Barcelona"],
    answer: "Manchester City",
  },
  {
    question: "What is awarded when a foul occurs inside the penalty box?",
    options: ["Corner Kick", "Free Kick", "Penalty Kick", "Throw-in"],
    answer: "Penalty Kick",
  },
];

let currentQuestionIndex = 0;

let userAnswers = new Array(quiz.length).fill(null);
let quizSubmitted = false;

let button2;
let navDiv;
let resultScreen;
let scoreText;
let viewAnswersBtn;
let restartBtn;

function start() {
  options.style.display = "block";

  startBtn.style.display = "none";

  navDiv = document.createElement("div");

  startScreen.appendChild(navDiv);

  let button = document.createElement("button");
  button.classList.add("prev-btn");
  navDiv.appendChild(button);
  button.textContent = "previous";

  button2 = document.createElement("button");
  button2.classList.add("next-btn");
  navDiv.appendChild(button2);
  button2.textContent = "Next";

  resultScreen = document.createElement("div");
  resultScreen.classList.add("result-screen");
  resultScreen.style.display = "none";
  startScreen.appendChild(resultScreen);

  scoreText = document.createElement("h2");
  resultScreen.appendChild(scoreText);

  viewAnswersBtn = document.createElement("button");
  viewAnswersBtn.classList.add("view-answers-btn");
  viewAnswersBtn.textContent = "View Answers";
  resultScreen.appendChild(viewAnswersBtn);

  restartBtn = document.createElement("button");
  restartBtn.classList.add("restart-btn");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.style.display = "none";
  startScreen.appendChild(restartBtn);

  showQuestion();

  button2.addEventListener("click", function () {
    if (currentQuestionIndex === quiz.length - 1) {
      quizSubmitted = true;
      showResults();
    } else if (currentQuestionIndex < quiz.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
  });

  button.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  });

  viewAnswersBtn.addEventListener("click", function () {
    resultScreen.style.display = "none";
    title.style.display = "block";
    options.style.display = "block";
    navDiv.style.display = "block";
    restartBtn.style.display = "inline-block";

    currentQuestionIndex = 0;
    showQuestion();
  });

  restartBtn.addEventListener("click", function () {
    currentQuestionIndex = 0;
    userAnswers = new Array(quiz.length).fill(null);
    quizSubmitted = false;

    resultScreen.style.display = "none";
    title.style.display = "block";
    options.style.display = "block";
    navDiv.style.display = "block";
    restartBtn.style.display = "none";

    showQuestion();
  });
}

function calculateScore() {
  let score = 0;
  quiz.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });
  return score;
}

function showResults() {
  title.style.display = "none";
  options.style.display = "none";
  navDiv.style.display = "none";

  let score = calculateScore();
  scoreText.textContent = `You scored ${score} out of ${quiz.length}`;

  resultScreen.style.display = "block";
  restartBtn.style.display = "inline-block";
}

const showQuestion = () => {
  title.textContent = `Question ${currentQuestionIndex + 1}: ${quiz[currentQuestionIndex].question}`;

  button2.textContent =
    currentQuestionIndex === quiz.length - 1 ? "Submit" : "Next";

  optionList.forEach((option, index) => {
    option.textContent = quiz[currentQuestionIndex].options[index];

    option.classList.remove("selected");

    option.classList.remove("correct", "wrong");

    if (quizSubmitted) {
      const optionText = quiz[currentQuestionIndex].options[index];
      const currentAnswer = quiz[currentQuestionIndex].answer;
      const savedPick = userAnswers[currentQuestionIndex];

      if (optionText === currentAnswer) {
        option.classList.add("correct");
      } else if (optionText === savedPick && savedPick !== currentAnswer) {
        option.classList.add("wrong");
      }

      option.onclick = null;
      return;
    }

    if (
      userAnswers[currentQuestionIndex] ===
      quiz[currentQuestionIndex].options[index]
    ) {
      option.classList.add("selected");
    }

    option.onclick = function () {
      optionList.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");

      userAnswers[currentQuestionIndex] =
        quiz[currentQuestionIndex].options[index];
    };
  });
};

startBtn.addEventListener("click", start);