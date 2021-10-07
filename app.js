
// Project 6: Build a three-question quiz.

// Requirements:
// -Create a Github repository for this project. 
// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong (give them the correct answer).

//Declare the UI elements
let ul = document.getElementById('ul')
let nextButton = document.getElementById('btnNext')
let quizbox = document.getElementById('questionBox');
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')


var app = {
    questions:[
            {
    q: "Who is the best javascript mentor?",
    options: ['TJ', 'Al Einstein', 'Nik Tesla', 'John Connor'],
    answer: 1
},
    {
    q: "What is the most popular javascript library or framework?",
    options: ['Angular', 'Vue', 'React', 'Other'],
    answer: 3  
},
    {
    q: "What is the main front end programming language?",
    options:['Html', 'JavaScript', 'CSS', 'Other'],
    answer: 2
}
    ],
    index:0,
    load:function () {
        if(this.index <= this.questions.length - 1){
            quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            opt1.innerHTML = this.questions[this.index].options[0];
            opt2.innerHTML = this.questions[this.index].options[1];
            opt3.innerHTML = this.questions[this.index].options[2];
            opt4.innerHTML = this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML = "Quiz Completed!";
            ul.style.display = "none";
            nextButton.style.display = "none";
        }
    },
  

    next: function () {
        this.index++;
        this.load();
    },
    check: function(ele){
        var id = ele.id.split('');
        if(id[id.length - 1]===this.questions[this.index].answer){
            this.score++;
            ele.className = "correct";           
             alert('You are Right!')
            this.scoreCard();
        }
        else{
            ele.className = "wrong";
            this.score++
            alert('You are Wrong!')
        }
    },
    preventClick: function(){
        for(let i = 0; i < ul.children.length; i++){
            ul.children[i].style.pointerEvents = "none";
        }
    },
    allowClick: function() {
        for (let i = 0; i < ul.children.length; i++){
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = '';
        }
    },
    score: 0,
    scoreCard: function() {
        scoreCard.innerHTML = this.score + "/" + this.questions.length;
        console.log('hello')
    }
}

window.load = app.load();

function button(ele) {
    app.check(ele);
    app.preventClick();
}

function next() {
    app.next();
    app.allowClick();
}








