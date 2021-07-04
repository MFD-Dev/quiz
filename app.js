
// Project 6: Build a three-question quiz.

// Requirements:
// -Create a Github repository for this project. 
// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong (give them the correct answer).

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)


function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);



// For each question, find the selected answer
// If the answer is correct, respond accordingly
// If the answer is wrong, respond accordingly
// Show the number of correct answers out of the total

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}


/////////////////////////////
const myQuestions = [ 
    {
    question: "Who is the best javascript mentor?",
    answers: {
        a: "TJ",
        b: "Al Einstein",
        c: "Nik Tesla",
        d: "John Connor"
    },
    correctAnswer: "a"
},
    {
    question: "What is the most popular javascript library or framework?",
    answers: {
        a: "Angular",
        b: "Vue",
        c: "React",
        d: "Other"
    },
    correctAnswer: "c"
},
    {
    question: "What is the most popular front end programming language?",
    answers: {
        a: "Html",
        b: "Javascript",
        c: "CSS",
        d: "Other"
    },
    correctAnswer: "b"
},
 ];




 ////////////////////////////

// // Functions
// function buildQuiz(){ 
//     // variable to store the HTML output
//     const output = [];

//     // for each question
//     myQuestions.forEach(
//         (currentQuestion, questionNumber) => {
//     // variable to store the list of possible answers
//     const answers = [];
//     //and for each available answer
//     for(letter in currentQuestion.answers) {
//         //add an HTML radio submitButton of
//         answer.push(

//         )
//     }
//         }
//     )
// }
// function showResults(){ ... }

// // Variables
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// const myQuestions = [ 
//     {
//     question: "Who is the best javascript mentor?",
//     answers: {
//         a: "TJ",
//         b: "Al Einstein",
//         c: "Nik Tesla",
//         d: "John Connor"
//     },
//     correctAnswer: "a"
// },
//     {
//     question: "What is the most popular javascript library or framework?",
//     answers: {
//         a: "Angular",
//         b: "Vue",
//         c: "React",
//         d: "Other"
//     },
//     correctAnswer: "c"
// },
//     {
//     question: "What is the most popular front end programming language?",
//     answers: {
//         a: "Html",
//         b: "Javascript",
//         c: "CSS",
//         d: "Other"
//     },
//     correctAnswer: "b"
// },
//  ];

// // Display quiz right away
// buildQuiz();

// // on submit, show results
// // Event listeners
// submitButton.addEventListener('click', showResults);