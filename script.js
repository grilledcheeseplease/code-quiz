// variables needed 
var mainEl = document.getElementById("main");
var timerEl = document.querySelector(".timer");
var topEl = document.getElementById("top");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var gameoverEl = document.getElementById("gameover");
var submitEl = document.getElementById("submit");

// Timer that will start when button is pushed 
var timeLeft = 75;

function displayTime() {

    timerEl.textContent = timeLeft + " Tick Tock";
}


function setTime() {

    displayTime();

    var timerInterval = setInterval(function () {
        timeLeft--;
        displayTime();
        
        if (timeLeft < 1) {
            clearInterval(timerInterval);
            //add action for gameover content 
        }

    }, 1000);
    
}

var qAndA =[
    {
        question : "Around how many coding languages are there?", 
        answers: {
            1: "50",
            2: "600",
            3: "450",
            4: "700"
        },
        correctAnswer : "4"
    },
    {
        question : "The world's first computer programmer was a renowned female mathematician. What is her name?",
        answers: {
            1: "Ada Lovelace",
            2: "Mary Barnes",
            3: "Joanna Fields",
            4: "Karen Mays"
        },
        correctAnswer : "1"
    },
    {
        question : "What war was computer programming instumental in helping end?",
        answers: {
            1: "Cold war",
            2: "World War II",
            3: "World War I",
            4: "The Mexican-American War"
        },
        correctAnswer : "2"
    },
    {
        question : "The first computer virus was created in 1986 and was given what moniker?",
        answers: {
            1: "Scorpion",
            2: "Alien",
            3: "Brain",
            4: "Pork"
        },
        correctAnswer : "3"
    },
    {
        question : "How many times did I cry while creating this?",
        answers: {
            1: "Big girls don't cry.",
            2: "I lost count",
            3: "Only one time!",
            4: "Probably still crying."
        },
        correctAnswer : "3"
    }
];
// event listeners here
startEl.addEventListener("click", setTime);



