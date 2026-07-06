let title = document.getElementById("title");
let options = document.getElementById("option-list");
let startBtn = document.getElementById("start-btn");


function start() {

    title.textContent = '1. Who scored the winning goal at world cup final 2022';

    options.style.display = 'block'
}

startBtn.addEventListener('click', start)