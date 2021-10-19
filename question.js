// The code work

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
 Question.prototype.isCorrectAnswer = function(choice) {
     return this.answer === choice;
 }

 function populate(){
     if(Quiz.isEnded()){
         showScores();
     }
     else {
        //  Question shown
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionsIndex().text;

        // SHows the other answers
        var choices = quiz.getQuestionsIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
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

//  The actual questions
var questions = [
    new Question("What is the capital of Illinois?", ["Austin", "Chicago", "Springfield", "Norman"], "Springfield"),
    new Question("How many states are in the United States?", ["25", "50", "51", "13"], "50"),
    new Question("Which state has the highest population in the U.S.?", ["New York", "Texas", "Illinois", "California"], "California"),
    new Question("Which of the following was the last State to join the U.S.?", ["Alaska", "Hawai'i", "Puerto Rico", "Costa Rica"], "Alaska"),
    new Question("What is the smallest State in the U.S.?", ["New Jersey", "Delaware", "Washington D.C.", "Rhode Island"], "Rhode Island"),
];

// creating quiz
var quiz = new Quiz(questions);

// showing the quiz
populate();
    
