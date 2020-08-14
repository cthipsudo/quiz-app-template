/* eslint-disable indent */
/* eslint-disable no-undef, quotes, no-console */

import STORE from './store.js';

function generateQuestionsString(question) {
  // Here we will make the questions string to put in the form.
  // -------------------------------------------------------------THIS IS WHERE WE WOULD CHANGE HOW IT TEMPLATES.------------------------------------------
  return `<input type="radio" id="A" name="questionOne" aria-pressed="false" value="${question[STORE.currentQuestion].answers[0]}" required>
  <label for="A"> ${question[STORE.currentQuestion].answers[0]} </label>
  <br>
  <input type="radio" id="B" name="questionOne" aria-pressed="false" value="${question[STORE.currentQuestion].answers[1]}">
  <label for="B"> ${question[STORE.currentQuestion].answers[1]} </label>
  <br>
  <input type="radio" id="C" name="questionOne" aria-pressed="false" value="${question[STORE.currentQuestion].answers[2]}">
  <label for="C"> ${question[STORE.currentQuestion].answers[2]} </label>
  <br>
  <input type="radio" id="D" name="questionOne" aria-pressed="false" value="${question[STORE.currentQuestion].answers[3]}">
  <label for="D"> ${question[STORE.currentQuestion].answers[3]} </label>
  <br>

  <button type="submit" id="submit-button" aria-pressed="false">NEXT</button>`;
}

function generateStartScreenString(store) {
  return `<div class="start-screen ">
  <h1>${store.startScreen.title}</h1>
  <img src="${store.startScreen.image}">
  <span>Image Should Go Here, Remove this text</span>
  <button type="button" label="start">START</button>
  <h2>${store.startScreen.header}</h2>
</div>`;
}

function generateQuestionScreenString(database) {
  return `<div class="question-screen fade-in-right">
  <h2>${database.questions[database.currentQuestion].name}</h2>
      <form class="options">
        ${generateQuestionsString(database.questions)}
      </form>
</div>`;
}
/*
function generateResponseScreenString(database) {
  handleNextQuestion();
  // Response will be two choices, if they get it right, if they get it wrong
  // So do a check for that. 
  let responseCollection = STORE.responses;
  let currentReponseIndex = STORE.currentQuestion - 1;
  if (STORE.questionsRightOrWrong === true) {
    return `<div class="answer-screen" id="">
    <h2> Correct! </h2>
    <img src="${STORE.responses[currentReponseIndex].image}">
    <h3 id="answer-binary">${responseCollection[currentReponseIndex].responses[0]}</h3>
    <button id="next-question">Next Question</button>
</div>`;
  } else {
    return `<div class="answer-screen" id="">
    <h2> Incorrect! </h2>
    <img src="${STORE.responses[currentReponseIndex].image}">
    <h3 id="answer-binary">${STORE.responses[STORE.currentQuestion - 1].responses[1]}</h3>
    <button id="next-question">Next Question</button>
</div>`;
  }
}
*/
function generateResultScreenString(database) {
  // -------------------------------------------------------The conditionals for this string should change----------------------------------------------------
  // -------------------------------------------------------according to what you want your result to be...--------------------------------------------------- 
  if (database.result.resultOneCounter === 5) {
    return `<div class="result-screen" id="">
  <h2> Perfect! </h2>
  <img src="${database.result.image[0]}">
  <span>Image Should Go Here, Remove this text</span>
  <h3 id="answer-binary"> ${database.result.response[0]}</h3>
  <button>Try Again?</button>
</div>`;
  } else if (database.result.resultOneCounter >= 1) {
    return `<div class="result-screen" id="">
    <h2> TOTAL SCORE </h2>
    <img src="${database.result.image[1]}">
    <span>Image Should Go Here, Remove this text</span>
    <h3 id="answer-binary"> ${database.result.response[1]}</h3>
    <button>Try Again?</button>
  </div>`;
  } else {
    return `<div class="result-screen" id="">
  <h2> TOTAL SCORE </h2>
  <img src="${database.result.image[2]}">
  <span>Image Should Go Here, Remove this text</span>
  <h3 id="answer-binary"> ${database.result.response[2]}</h3>
  <button>Try Again?</button>
</div>`;
  }
}


function generateStartScreen() {
  // render the start screen in the DOM
  // it will take the string from generateStartScreenString
  // and put that in the dom.
  let html = generateStartScreenString(STORE);
  $(`main`).html(html);
  handleQuizStartButton();
  // ---------------------------------------------------------------We need to reset these values anytime we start or startover!-------------------------
  STORE.currentQuestion = 0;
  STORE.questionsCorrect = 0;
  STORE.resultOneCounter = 0;
}
function generateQuestionScreen() {
  let html = generateQuestionScreenString(STORE);
  $(`main`).html(html);
  handleKeyPressSpace();
  handleAnswerSubmit();
}
/*
function generateResponseScreen() {
  // render the response screen in the DOM
  // it will take the string from generateResponseScreenString
  // and put that in the dom.
  let html = generateResponseScreenString(STORE);
  $(`main`).html(html);
}
*/
function generateResultsScreen() {
  let html = generateResultScreenString(STORE);
  $(`main`).html(html);
  handleStartOver();
}

function handleQuizStartButton() {
  //when the userStarts the quiz, render the first question. 
  //console.log("you called handleQuizStartButton the Function");
  $(`main`).on('click', '.start-screen button', function () {
    generateQuestionScreen();
  });
}

function handleAnswerSubmit() {
  // Takes the value from getValueFromCheckedAnswer function
  $(`main form button[type="submit"]`).on('click', function (event) {
    event.preventDefault();
    let userAnswer = getValueFromCheckedAnswer();
    if (userAnswer === undefined) {
      alert("Please choose an answer!");
    } else {
      // checks that value against the actual correct answer
      // changed the value of questionsRightOrWrong to either true or false

      if (STORE.questions[STORE.currentQuestion].correctAnswer.includes(userAnswer)) {
        //do something
        STORE.questionsRightOrWrong = true;
        STORE.questionsCorrect++;
        STORE.result.resultOneCounter++;
      } else {
        STORE.questionsRightOrWrong = false;
      }
      STORE.currentQuestion++;
      if (STORE.currentQuestion < STORE.questions.length) {
        //Render the next screen.
        generateQuestionScreen();
      }
      else { generateResultsScreen(); }
    }
  });
}

// function handleNextQuestion() {
//   
//   $(`main`).on('click', ".answer-screen button#next-question", function () {
//     generateQuestionScreen();

//   });
// }

function handleStartOver() {
  $(`main`).on('click', '.result-screen button', function () {
    generateStartScreen();
  });
}

function handleKeyPressSpace() {
  //-------------------------------------------------------------------This Handles the ARIA to press space on an answer----------------------------------
  $(`main form input`).keydown(function () {
    {
      let pressedKey = $(event.which);
      if (pressedKey === 32) {
        $(this).attr("checked");
      }
    }
  });
}

function getValueFromCheckedAnswer() {
  // Find the value of a "checked" radio button
  // shound be something like this 
  // $(`input[name=answers]:checked`).val();
  let input = $(`input[name="questionOne"]:checked`).val();
  let answer = "";
  if (input === undefined) {
    answer = undefined;
  }
  else { answer = input; }
  return answer;
}


function main() {
  generateStartScreen();

}

// when the page loads, call `generateStartScreen`
$(main);
