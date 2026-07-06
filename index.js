let title = document.getElementById("title");
let options = document.getElementById("option-list");
let startBtn = document.getElementById("start-btn");
let optionList = document.querySelectorAll('#option-list li')




let players = ["messi", "mbappe", "di maria", "kolo muani"]

function start() {

    title.textContent = '1. Who scored the winning goal at world cup final 2022';

    options.style.display = 'block';

    optionList.forEach((option, index) => {
        option.textContent = players[index];
    })


}

startBtn.addEventListener('click', start)