// variables needed 
var mainEl = document.getElementById("#main");
var timerEl = document.querySelector(".timer");
var topEl = document.getElementById("#top");
var startEl = document.getElementById("#start");
var quizEl = document.getElementById("#quiz");
var questionsEl = document.getElementById("#questions");
var gameoverEl = document.getElementById("#gameover");
var submitEl = document.getElementById("#submit");

startEl.addEventListener("click", displayTime);

var timeLeft = 75;

function displayTime() {
    timerEl.textContent = timeLeft + " Tick Tock";
}


function setTime() {
    displayTime();
    var timerInterval = setInterval(function () {
        timeLeft--;
        displayTime();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //add action for gameover content 
        }
    }, 1000);

}

setTime();



