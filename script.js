// start the game


var startGameBtnEl = document.querySelector("#start-game-btn");

var startScreenEl = document.querySelector("#start-screen");

// Quiz content


var quizScreenEl = document.querySelector("#quiz-content");

var headerEl = document.querySelector("header");

var timeLeftEl = document.querySelector("#time-left");

// Highscore Element


var viewHighscoresAEl = document.querySelector("#view-highscores");

//finished Screen


var postGameScreenEl = document.querySelector("#post-game-screen");


//user-score
var userScoreEl = document.querySelector("#user-score");


//start over button

var playAgainBtnEl = document.querySelector("#play-again-btn");


//add-highscore button
var addHighscoreBtnEl = document.querySelector("#add-highscore-btn");


var highScoresListEl = document.querySelector("#high-scores-list");

var answerInfoEl = document.querySelector("#answer-info");

var answerInfoTextEl = document.querySelector("#answer-info-text");


//highscore stuff
var gameEndFormEl = document.querySelector("#game-end-form");

var userInitials = document.querySelector("#user-initials");

var clearHighScoresBtnEl = document.querySelector("#clear-highscore");


// Game logic begins here

// timer, score, time left
var timerIntervalId;

var score;

var secondsLeft;

var highScoresDisplayEl = document.querySelector("#high-scores-display");

var highScoresList = [];
if (localStorage.getItem("highScoresList")){
  highScoresList = JSON.parse(localStorage.getItem("highScoresList"));
}