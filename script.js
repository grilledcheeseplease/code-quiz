var state = 'quiz';

var timerEl = document.querySelector("#timer"); 
var titleEl = document.querySelector("#title");
var contentEl = document.querySelector("#content");
var gameoverEl = document.querySelector("#gameover");
var startBtn = document.querySelector("#start button");
var quizheaderEl = document.querySelector("#quizheader");
var submitBtn = document.querySelector("#submit button");

function screenStyle() {
  if (state === 'title') {
    titleEl.style.display = 'block';
    contentEl.style.display = 'null';
    gameoverEl.style.display = 'null';
  } else if (state === 'content') {
    titleEl.style.display = 'null';
    contentEl.style.display = 'block';
    gameoverEl.style.display = 'null';
  } else if (state === 'gameover') {
    titleEl.style.display = 'null';
    contentEl.style.display = 'null';
    gameoverEl.style.display = 'block';
  }
}

function init() {
  screenStyle();
}

startBtn.addEventListener("click", function() {
  state = 'content';
  displayState();
  setTime();
});

function displayTime() {
    timerEl.textContent = timeLeft;
}

var timeLeft = 75;

function setTime () {
    displayTime();
    var timerInterval = setInterval(function () {
        timeLeft--;
        displayTime();

        if(timeLeft === 0) {
            clearInterval(timerInterval);

        }
    }, 1000);

}

submitBtn.addEventListener("click", function () {
  state = 'gameover';
  displayState();
});

init();