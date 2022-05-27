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
var timeLeft = 60;

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

        }

    }, 1000);

}

// objet array to hold questions and answers
var current = 0;

var qAndA = [
    {
        question: "Around how many coding languages are there?",
        answers: {
            1: "50",
            2: "600",
            3: "450",
            4: "700"
        },
        correctAnswer: "4"
    },
    {
        question: "The world's first computer programmer was a renowned female mathematician. What is her name?",
        answers: {
            1: "Ada Lovelace",
            2: "Mary Barnes",
            3: "Joanna Fields",
            4: "Karen Mays"
        },
        correctAnswer: "1"
    },
    {
        question: "What war was computer programming instumental in helping end?",
        answers: {
            1: "Cold war",
            2: "World War II",
            3: "World War I",
            4: "The Mexican-American War"
        },
        correctAnswer: "2"
    },
    {
        question: "The first computer virus was created in 1986 and was given what moniker?",
        answers: {
            1: "Scorpion",
            2: "Alien",
            3: "Brain",
            4: "Pork"
        },
        correctAnswer: "3"
    },
    {
        question: "How many times did I cry while creating this?",
        answers: {
            1: "Big girls don't cry.",
            2: "I lost count",
            3: "Only one time!",
            4: "Probably still crying."
        },
        correctAnswer: "4"
    }
];

function makeQuestion() {
    var currentQuestionEl = document.createElement('h2');
    currentQuestionEl.innerHTML = qAndA[current].question;

    for(i = 0; i < Object.keys(qAndA[0].answers).length; i++) {
        var currentAnswerEl = document.createElement('button');
        currentAnswerEl.innerHTML = qAndA[current].answers[i+1];
        currentAnswerEl.addEventListener('click',function(event) {
            var rightAnswer = qAndA[i].correctAnswer[i];
            if(event === !rightAnswer) {
                timeLeft -10;
            }
        })
        currentQuestionEl.appendChild(currentAnswerEl);
    }

    questionsEl.appendChild(currentQuestionEl); 
}


// event listeners here
startEl.addEventListener("click", function (event) {
    setTime();
    if (setTime) {
        topEl.style.display = "none";
        gameoverEl.style.display = "none";
    }
    makeQuestion();
});

questionsEl.addEventListener('click', function (event) {
    var answerBtns = event.target;
    if (answerBtns.matches('button')) {
        current++;
        if (current < qAndA.length && Object.keys(qAndA[current].answers).length) {
            makeQuestion();
        } else {
            gameoverEl.style.display = 'block';
            topEl.style.display = 'none';
            quizEl.style.display = 'none';
        }
    }
});
// submit.addEventListener("click", scoreBoard);


