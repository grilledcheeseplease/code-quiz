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
        correctAnswer: "3"
    }
];


function makeQuestion() {
    var currentQuestionEl = document.createElement('h2');
    currentQuestionEl.innerHTML = qAndA[0].question;

    for(i = 0; i < Object.keys(qAndA[0].answers).length; i++) {
        var currentAnswerEl = document.createElement('h3');
        currentAnswerEl.innerHTML = qAndA[0].answers[i+1];
        currentAnswerEl.addEventListener('click',function(event) {
            var rightAnswer = qAndA[0].question[0].answers[1].correctAnswer[0];
            if(!rightAnswer) {
                timeLeft -10;
            }
        })
        currentQuestionEl.appendChild(currentAnswerEl);
    }
    
    
    //add event listener before append to currentAnswerEl if it is wrong answer 10 sec from timer if right answer clear question. call makeQuestion with newQuestion 
    
    
    
    
    questionsEl.appendChild(currentQuestionEl); 
}



// event listeners here
startEl.addEventListener("click", function(event) {
    setTime();
    if(setTime) {
        topEl.style.display = "none";
        gameoverEl.style.display = "none";
    }
    makeQuestion();
});

// submit.addEventListener("click", scoreBoard);


