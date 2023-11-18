import quizItems from './questions.json'
console.log(quizItems);

var question = document.querySelector('#question');
var answers = [document.querySelector('#answer1'), document.querySelector('#answer2'), document.querySelector('#answer3'), document.querySelector('#answer4')];
var button1 = document.querySelector('#button1')
var button2 = document.querySelector('#button2')
var button3 = document.querySelector('#button3')
var button4 = document.querySelector('#button4');
var endButton = document.querySelector('#endButton');
var timerCounter = document.querySelector('#timer');
var quizRunning = false;
var timerValue = {
    seconds: 0,
    decimal: 0
}
var timerInt;
var checkWrongAnswers;
var currentQuestion = 0;


// Event Listeners

button1.addEventListener('click', startQuiz(1));
button2.addEventListener('click', startQuiz(2));
button3.addEventListener('click', startQuiz(3));
button4.addEventListener('click', startQuiz(4));

endButton.addEventListener('click', endQuiz());



function startQuiz(buttonNum) {
    if (quizRunning == false) {
        quizRunning = true;
        beginTimer(buttonNum);
        checkWrongAnswers = buttonNum % 2;
        takeQuiz();
    }
}

function beginTimer(timerType) {
    if (timerType < 2) {
        timerValue.seconds = 60 + (timerType * 30);
        timerInt = setInterval(countDown, 10)

        if (timerValue.seconds == 0 && timerValue.decimal == 0) {
            timerCounter.innerText = '0.00';
            clearInterval(timerInt);
        }
    } else {
        timerInt = setInterval(countUp, 10)
        if (quizRunning == false) {
            timerCounter.innerText = '0.00'
            clearInterval(timerInt)
        
        }
    }
}

function countDown() {
    if (timerValue.decimal == 0) {
        timerValue.decimal = 99;
        timerValue.seconds--;
    } else {
        timerValue.decimal--;
    }

    writeTimer();
}

function countUp() {
    if (timerValue.decimal == 99) {
        timerValue.decimal == 0;
        timerValue.seconds++;
    } else {
        timerValue.decimal++;
    }

    writeTimer();
}

function writeTimer() {
    if (timerValue.decimal < 10) {
        timerCounter.innerText = timerValue.seconds + '.0' + timerValue.decimal;
    } else {
        timerCounter.innerText = timerValue.seconds + '.' + timerValue.decimal;
    }
}

function takeQuiz() {}

function endQuiz() {
    quizRunning = false;
    clearInterval(timerInt)
}