var question = document.querySelector('#question');
var questionOptions = [document.querySelector('#option1'), document.querySelector('#option2'), document.querySelector('#option3'), document.querySelector('#option4')];

fetch('./assets/js/questions.json')
    .then((response) => response.json())
    .then((json) => console.log(json));