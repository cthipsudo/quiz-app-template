/* eslint-disable indent */
/* eslint-disable no-undef, quotes, no-console */



function generateQuestionsString(question) {
  // Here we will make the questions string to put in the form. 
  let value = "";
  let value2nd = "";
  /*
  if (STORE.currentQuestion === 2-1) {
    value = "true";
    value2nd = "false";
  } else if (STORE.currentQuestion === 6-1) {
    value = "false";
    value2nd = "true";
  } else {
    value = "false";
    value2nd = "false";
  }
  */
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
  // Here we will return some similar to generateItemElement() function.
  //console.log(store);
  return `<div class="start-screen ">
  <h1>${store.startScreen.title}</h1>
  <img src="${store.startScreen.image}">
  <button type="button" label="start">START</button>
  <h2>${store.startScreen.header}</h2>
</div>`;
}

function generateQuestionScreenString(database) {
  // Here we will return some similar to generateItemElement() function.
  // Takes the value from generateQuestionsString and puts it in the form spot.
  //console.log(STORE.questions[database.currentQuestion].name);
  return `<div class="question-screen">
  <h2>${database.questions[database.currentQuestion].name}</h2>
      <form class="options">
        ${generateQuestionsString(database.questions)}
      </form>
</div>`;
}
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
function generateResultScreenString(database) {

  if (database.result.zachCounter === 5) {
    return `<div class="result-screen" id="">
  <h2> Perfect! </h2>
  <img src="${database.result.image[0]}">
  <h3 id="answer-binary"> ${database.result.response[0]}</h3>
  <button>Try Again?</button>
</div>`;
  } else if (database.result.zachCounter >= 1 ){
    return `<div class="result-screen" id="">
    <h2> TOTAL SCORE </h2>
    <img src="${database.result.image[1]}">
    <h3 id="answer-binary"> ${database.result.response[1]}</h3>
    <button>Try Again?</button>
  </div>`;
  } else {
    return `<div class="result-screen" id="">
  <h2> TOTAL SCORE </h2>
  <img src="${database.result.image[2]}">
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
  // we need to reset these values anytime we start or startover!
  STORE.currentQuestion = 0;
  STORE.questionsCorrect = 0;
}
function generateQuestionScreen() {
  // render the Question screen in the DOM
  // it will take the string from generateQuestionScreenString
  // and put that in the dom.
  //let html =generateQuestionsString(STORE);
  let html = generateQuestionScreenString(STORE);
  //$(`main form input[type="radio"]`).attr('required', true);
  $(`main`).html(html);
  console.log(html);
  handleKeyPressSpace();
  handleAnswerSubmit();
}

function generateResponseScreen() {
  // render the response screen in the DOM
  // it will take the string from generateResponseScreenString
  // and put that in the dom.
  let html = generateResponseScreenString(STORE);
  $(`main`).html(html);
}

function generateResultsScreen() {

  // render the result screen in the DOM
  // it will take the string from generateResultsScreenString
  // and put that in the dom.
  let html = generateResultScreenString(STORE);
  $(`main`).html(html);
  handleStartOver();
}

function handleQuizStartButton() {
  //when the userStarts the quiz, render the first question. 
  //console.log("you called handleQuizStartButton the Function");
  $(`main`).on('click', '.start-screen button',function () {
    //console.log("This button is working");
    generateQuestionScreen();
  });
}

function handleAnswerSubmit() {
  // takes the value from getValueFromCheckedAnswer function
  //console.log("you called the submit function!");
  //console.log(generateQuestionScreenString());
  $(`main form button[type="submit"]`).on('click', function (event) {
    event.preventDefault();
    let userAnswer = getValueFromCheckedAnswer();
   //console.log(`userAnswer is ${userAnswer}`);
   if (userAnswer === undefined){
     alert("Please choose an answer!");
   } else {
     // increment the currentQuestion counter
    STORE.currentQuestion++;
    //console.log(STORE.currentQuestion);
    // checks that value against the actual correct answer
    // changed the value of questionsRightOrWrong to either true or false

    if (STORE.questions[STORE.currentQuestion-1].correctAnswer.includes(userAnswer)) {
      //do something
      STORE.questionsRightOrWrong = true;
      //console.log("user has the right answer");
      STORE.questionsCorrect++;
      STORE.result.zachCounter++;
    } else {
      console.log("user has the wrong answer");
      STORE.questionsRightOrWrong = false;
    }
    if (STORE.currentQuestion < STORE.questions.length) {

      generateQuestionScreen();
    }

    else { generateResultsScreen(); }
   }
  });

  // then render the responseScreen
}

function handleNextQuestion() {
  //console.log("handle next question");
  $(`main`).on('click', ".answer-screen button#next-question", function () {
    generateQuestionScreen();

  });
}

function handleStartOver(){
  $(`main`).on('click', '.result-screen button', function(){
    generateStartScreen();
  });
}

function handleKeyPressSpace(){
  $(`main form input`).keydown(function(){
    {
      //console.log(`You pressed this key ${event.which}`);
      let pressedKey = $(event.which);
      if(pressedKey === 32){
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
  console.log(`${input} test test`);
  let answer = "";
  if (input === undefined){
    answer = undefined;
  }
  else { answer = input; }
  //console.log(`${input} this is type of ${answer}`);
  //console.log(($(`input[name="questionOne"]:checked`).val()).parseBoolean());
  return answer;
}


function main() {
  generateStartScreen();

}

// when the page loads, call `generateStartScreen`
$(main);
