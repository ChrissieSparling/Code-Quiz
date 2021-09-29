//quizQuestions[0].title = "Commonly used data types etc"
quizQuestions = [

     {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
     },
     {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
     },

    ]
    //add variables to point to html elements and keep timer state
var questionIndex = 0;
var time = quizQuestions.length * 15;
var timerState;
var questions = document.getElementById("questions");
var timerDisplay = document.getElementById("time");
var answerchoices = document.getElementById("choices");
var startbutton = document.getElementById("startBtn");
var startScreen = document.getElementById ("start-screen")
var questionTitle = document.getElementById ("question-title")

function add (num1, num2){
var total = num1 + num2
return total
}
add(3, 4)

 //start quiz function that hides start screen starts timer and unhides questions
 function startQuiz(){
     startScreen.setAttribute("class","hide");
     questions.removeAttribute("class");
     timerState=setInterval(function(){
          time=time-1;
          timerDisplay.textContent=time;

     },1000)
//place cycle questions here
cycleQuestions()
 }




   

    //function to cycle questions
function cycleQuestions(){
     var displayQuestion = quizQuestions[questionIndex]
     questionTitle.textContent=displayQuestion.title

     displayQuestion.choices.forEach((choice, i) => {
          // create new button for each choice
          var answerbutton = document.createElement("button");
          answerbutton.setAttribute("class", "choice");
          answerbutton.setAttribute("value", choice);
          answerbutton.textContent = choice;
     //check answer function here


          // display on the page
          answerchoices.appendChild(answerbutton);
        });
}
    //function to check right or wrong

    //function to end quiz hide question screen, unhide end sceen, and 
    //stop timer.clearInterval(timerState)

//start button
startbutton.onclick=startQuiz