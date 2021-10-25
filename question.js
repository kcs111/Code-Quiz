// quiz timer
var timerEl = document.querySelector(".timer")
// creating quiz timer
var timerId
//  The actual questions
var questions = [
    new Questions("What is the capital of Illinois?", ["Austin", "Chicago", "Springfield", "Norman"], "Springfield"),
    new Questions("How many states are in the United States?", ["25", "50", "51", "13"], "50"),
    new Questions("Which state has the highest population in the U.S.?", ["New York", "Texas", "Illinois", "California"], "California"),
    new Questions("Which of the following was the last State to join the U.S.?", ["Alaska", "Hawai'i", "Puerto Rico", "Costa Rica"], "Alaska"),
    new Questions("What is the smallest State in the U.S.?", ["New Jersey", "Delaware", "Washington D.C.", "Rhode Island"], "Rhode Island"),
];
var quiz = new Quiz(questions);
// 75 second timer
var timer  =quiz.questions.length*15


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
}
Quiz.prototype.getQuestionsIndex = function() {
    return this.questions[this.questionsIndex];
}
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionsIndex(). isCorrectAnswer(answer)){
        this.score++;
    }

    this.questionsIndex++;
 }
 Quiz.prototype.isEnded = function() {
     return this.questionsIndex === this.questions.length;
 }
 function Questions(text, choices, answer) {
     this.text = text;
     this.choices = choices;
     this.answer = answer;
 }
 Questions.prototype.isCorrectAnswer = function(choice) {
     return this.answer === choice;
 }
 const buttonEl= document.querySelector(".buttons")
//  const  quizzes = new Quiz ()
 function populate(){
     if(quiz.isEnded()){
         showScores();
     }
     else {
        //  Question shown and Buttons
        
      var choices = quiz.getQuestionsIndex().choices;

        buttonEl.innerHTML = `   
        <p id="question">${quiz.getQuestionsIndex().text}</p>

        <button class="choice-btn" id="btn0"><span id="choice0">${choices[0]} </span></button>
        <button class="choice-btn" id="btn1"><span id="choice1">${choices[1]}</span></button>
        <button class="choice-btn" id="btn2"><span id="choice2">${choices[2]}</span></button>
        <button class="choice-btn" id="btn3"><span id="choice3">${choices[3]}</span></button>`


        var choiceBtnEl = document.querySelectorAll(".choice-btn")

        for (let i = 0; i < choiceBtnEl.length; i++) {
            
            choiceBtnEl[i].addEventListener("click", function (){
              
                var answer= quiz.getQuestionsIndex().answer
                if ( this.textContent === answer ) {
                    alert("Correct")
                }
                else {
                    alert("Incorrect")
                }
              
                quiz.guess()
                populate()
            })
            
        }

        // var element = document.getElementById("question");
        // element.innerHTML = quiz.getQuestionsIndex().text;

        // // SHows the other answers
  
        // for(var i = 0; i < choices.length; i++) {
        //     var element = document.getElementById("choice" + i);
        //     element.innerHTML = choices[i];
        //     quiz.guess("btn" + i, choices[i]);
        // }
        // showProgress();
     }
 };

 function showProgress() {
     var currentQuestionsNumber = quiz.questionIndex + 1;
     var element = document.getElementById("progress");
     element.innerHTML = "Question " + currentQuestionsNumber + "of" + quiz.questions.length;
 };
 function showScores() {
     var gameOverHTML = "<h1>Results</h1>";
     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
     var element = document.getElementById("quiz");
     element.innerHTML = gameOverHTML;
 }


console.log(questions)


console.log(quiz)
function countdown(){
     timerEl.textContent=timer
     timer--
}
    
function init (){
  timerId =setInterval(countdown, 1000)
// showing the quiz
populate();
}
function gameOver(){
    clearInterval(timerEl);
    countdown() = "Finished";
    displayScore();
    savedScore ();
}

function displayScore () {
    questionConEl.replaceWith(scorePageEl);
    scoreAreaEl.innerText = "Final Score:" + score;
     // Create an input element for initials 
    initTextEl = document.createElement("input"); 
    initTextEl.setAttribute("id", "initails-input"); 
    initTextEl.setAttribute("type", "text"); 
    initTextEl.setAttribute("name", "iniatials"); 
    initTextEl.setAttribute("placeholder", "Enter Initials here"); 
      
    inNameEl.appendChild(initTextEl);


    // create save button elemetn
    saveButtonEl = document.createElement("button");
    saveButtonEl.setAttribute("id" , "save-btn");
    saveButtonEl.setAttribute("class" ,"save-btn");
    saveButtonEl.setAttribute("type" , "submit");
    saveButtonEl.textContent = "Save Score";

    inNameEl.appendChild(saveButtonEl);

    inNameEl.addEventListener("submit", viewHighScores);
}

function viewHighScores (e) { 
  e.preventDefault();
    var name = document.querySelector("#initails-input").value;
    savedInit(name);
    
    scorePageEl.replaceWith(highScoreEl)
    loadSaveScores();
  
}


//function to save to local storage
var savedScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}
var savedInit = function(initails) {
    localStorage.setItem("initails", JSON.stringify(initails));
}

// gets tasks from local storage load
function loadSaveScores() {
    var savedScore = localStorage.getItem("score");
    var savedInit = localStorage.getItem("initails");

    savedScore  = JSON.parse(savedScore);
    savedInit = JSON.parse(savedInit);

    document.getElementById("highScores").innerHTML = savedInit + " - " + savedScore;
   
}   

init()

