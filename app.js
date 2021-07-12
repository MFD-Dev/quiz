
// Project 6: Build a three-question quiz.

// Requirements:
// -Create a Github repository for this project. 
// -Create an HTML form with a three-question quiz
// -Each question should have four multiple-choice answers to choose from.
// -When the user submits the quiz, add a message underneath each question letting them know if they got it right/wrong (give them the correct answer).

const quizData = [ 
    {
    question: "Who is the best javascript mentor?",
    a: "TJ",
    b: "Al Einstein",
    c: "Nik Tesla",
    d: "John Connor",
    correct: "a"
},
    {
    question: "What is the most popular javascript library or framework?",
    a: "Angular",
    b: "Vue",
    c: "React",
    d: "Other",
    correct: "c"  
},
    {
    question: "What is the most popular front end programming language?",
    a: "Html",
    b: "JavaScript",
    c: "CSS",
    d: "Other",
    correct: "b"
}
 ];
 const questionEl = document.getElementById('question');
 const a_text = document.getElementById('a_text');
 const b_text = document.getElementById('b_text');
 const c_text = document.getElementById('c_text');
 const d_text = document.getElementById('d_text');

//keep track of current question
let currentQuiz = 0;
// load quiz and call everytime with submit
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    console.log('Hi')

    questionEl.innerText = currentQuizData.question;
    //should load with first
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    //counter for current question
    currentQuestion++
};

// loadQuiz();
// fill in the data to the ul






// var score = 0;

// // for loop to iterate through questions to ask
//  for (var i = 0; i < questions.length; i ++) {
//      // initiate prompt ask question to user and get response.
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer) {
//          alert("Your right!");
//      } else {
//          alert("Your wrong!")
//      }
//  }






















//Submit answers
// function submitAnswers() {
//     var total = 5;
//     var score = 0;
//     console.log('Hi')
//     // Get User Input
//     var q1 = document.getElementById("quiz").value;//grabs specific form name and input+value;
//     // var q2 = document.forms["quizForm"]["q2"].value;//grabs specific form name and input+value;
//     // var q3 = document.forms["quizForm"]["q3"].value;//grabs specific form name and input+value;
    
//     //test
//     alert(q1);

// }
       


//     var ele1 = document.getElementsByName("question1");

//     // var answer1 = document.getElementById('answer1');

// for (i = 0; i < ele1.length; i++) {
//     if (ele1.value === "tj") {
//         document.getElementById("answer1").innerHTML = "That is correct."
//     } else {
//         document.getElementById("answer1a").innerHTML = "That is incorrect"
//     }
//};


//     for (i = 0; i < ele1.length; i++) {
//         if (document.getElementById("answerOne").value == "tj") {
//             console.log("That's Correct!");
//         } else
//         answer1.innerHTML = "The correct answer is " + document.getElementById("answerOne").value;
//         console.log("That's incorrect") 
//     } 
// }




















// let question = {
//     title: '"Who is the best javascript mentor?',
//     alternatives: ['TJ', 'Al Einstein', 'Nik Tesla', 'John Connor'],
//     correctAnswer: 'TJ'
// };

// //3. wrap in a function
// function showQuestion(q) {         
// // 1. select dom element
// let titleDiv = document.getElementById('title')

// //2. modify it 
// titleDiv.textContent = q.title;

// // grab all class alternative**make sure to include the .
// let alts = document.querySelectorAll('.alternative')
// // console.log(alts)
// alts.forEach(function(element, index){
//     //modify to the alternative
//     element.textContent = q.alternatives[index];
//     //6. add click listener for options
//     element.addEventListener('click', function(){
//         // test to make sure click is working -- element.textContent = 'a';
//         // check correct answer -- create a if statement
//         if (q.correctAnswer == index) {
//             console.log('Correct!');
//         } else {
//             alert(q.correctAnswer);
//             console.log('Wrong!');
//         }
//         /////////////////////////////////
//         // need to convert indexOf to string for correct answer.
//         //////////////////////////////
//     });
// });
// }

// showQuestion(question)
// // 4.
// let btn = document.getElementById('btn')
// //5.
// // add a listening event for click and create a function for ea time
// btn.addEventListener('click', function(){
//     console.log('Clicked!')
// });
////////////////////////////
// var score = 0;
// var questions = [ 
//     {
//     prompt: "Who is the best javascript mentor?\n(a) TJ\n\Al Einstein\n\Nik Tesla\n\John Connor",
//     answer: "a"
 
// },
//     {
//     prompt: "What is the most popular javascript library or framework?\n(a) Angular\n\Vue\n\React\n\Other",
//     answer: "c"
// },
//     {
//     question: "What is the most popular front end programming language?\n(a) Html\n\JavaScript\n\CSS\n\Other",
//     answer: "b"
// },
//  ];

// // for loop to iterate through questions to ask
//  for (var i = 0; i < questions.length; i ++) {
//      // initiate prompt ask question to user and get response.
//      var response = window.prompt(questions[i].prompt);
//      if(response == questions[i].answer) {
//          alert("Your right!");
//      } else {
//          alert("Your wrong!")
//      }
//  }


 //////////////////////////////////



// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)


// function showQuestions(questions, quizContainer){
// 	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }

// showQuestions(questions, quizContainer);



// // For each question, find the selected answer
// // If the answer is correct, respond accordingly
// // If the answer is wrong, respond accordingly
// // Show the number of correct answers out of the total

// function showResults(questions, quizContainer, resultsContainer){
	
// 	// gather answer containers from our quiz
// 	var answerContainers = quizContainer.querySelectorAll('.answers');
	
// 	// keep track of user's answers
// 	var userAnswer = '';
// 	var numCorrect = 0;
	
// 	// for each question...
// 	for(var i=0; i<questions.length; i++){

// 		// find selected answer
// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		// if answer is correct
// 		if(userAnswer===questions[i].correctAnswer){
// 			// add to the number of correct answers
// 			numCorrect++;
			
// 			// color the answers green
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

// 	// show number of correct answers out of total
// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// }

// // on submit, show results
// submitButton.onclick = function(){
// 	showResults(questions, quizContainer, resultsContainer);
// }







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