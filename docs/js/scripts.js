const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const next = document.getElementById("next");
const restart = document.getElementById("restart");
const correctAnswer = document.getElementById("correctAnswer");
let form = document.forms.myForm;
let submit = document.getElementById("submit");
let table = document.querySelector(".table");
const recording = document.getElementById("recording");
const loginButton = document.getElementById("login-button");
const inputEmail = document.getElementById("inputEmail");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const tasksEleventhClass = document.getElementById("tasks-eleventh__class");
const tasksEighthClass = document.getElementById("tasks-eighth__class");
const tasksNinthClass = document.getElementById("tasks-ninth__class");
const testEleventhClass = document.getElementById("test-eleventh__class");
const testNinthClass = document.getElementById("test-ninth__class");
const testEighthClass = document.getElementById("test-eighth__class");
const person = document.getElementById("person");
const btnExitModal = document.querySelector(".btn-exit__modal");
const btnExit = document.querySelector(".btn-exit");
const teacherPage = document.getElementById("teacher-page");
const classNumber = document.querySelector(".classNumber");
const modal = document.getElementById("modal");
const buttonClose = document.querySelectorAll("[data-modal-close]");
const btnSubmit = document.querySelector(".btn-submit");
const btn = document.querySelector('.btn')
let currentQuestions;

//========================================================

let localStorageAnswers = localStorage.getItem("answers");
let localResults = localStorageAnswers ? JSON.parse(localStorageAnswers) : {};
 let parsedLocalStorageAnswers;
let localStorageContent = localStorage.getItem("content");

//===========================================================
let currentUser = inputEmail.value;
let currentClass = person.value;
let summ = [];
let arrSumm = [];
let str = [];
let arr = [];
let strResults = [];
inputEmail.value = localStorage.getItem("currentUser");
person.value = localStorage.getItem("currentClass");
changeLocation();

function renderQuestions(index) {
  renderIndicator(index + 1);
  questions.dataset.currentStep = index;

  if (currentQuestions[index].answers.length === 3) {
    const renderAnswers = () =>
      currentQuestions[index].answers
        .map((answer) => {
          return `<li>
        <label "label-radio">
        <input type="radio" class="answer-input real-radio" id=${currentQuestions[index].id} name=${index} value=${answer.id}>
        <span class="custom-radio"></span>
        ${answer.value}
        </label>
        </li>`;
        })
        .join("");

    questions.innerHTML = `
      <div class="quiz-questions-item">
      <div class="quiz-questions-item__question">
      ${currentQuestions[index].question}
      </div>
      <ul class="quiz-questions-item__answer">
      ${renderAnswers()}
      </ul>
      </div>
      `;
  }

  if (currentQuestions[index].answers.length === 1) {
    const renderAnswers1 = () =>
      currentQuestions[index].answers
        .map((answer) => {
          return `<input type="number" class="answer-input__number" id=${currentQuestions[index].id} name=${index}>`;
        })
        .join("");

    questions.innerHTML = `
        <div class="quiz-questions-item">
        <div class="quiz-questions-item__question">
        ${currentQuestions[index].question}
        </div>
        <ul class="quiz-questions-item__answer">
        ${renderAnswers1()}
        </ul>
        </div>
        `;
  }
 
}
function quantityAnswers(data) {
  for (let i = 0; i < summ.length; i++) {
    if (data.includes(summ[i])) {
      if (!arrSumm.includes(summ.indexOf(summ[i]) + 1)) {
        arrSumm.push(summ.indexOf(summ[i]) + 1);
      }
    }
  }
  for (let i = 0; i < arrSumm.length; i++) {
    if (!strResults.includes(arrSumm[i])) {
      strResults.push(arrSumm[i]);
    }
  }
}
const setValue = (event) => {
  localResults[event.target.name] = event.target.value;

  localStorage.setItem("answers", JSON.stringify(localResults));
  next.disabled = false;
  restart.disabled = false;

  for (let i = 0; i < Object.values(localResults).length; i++) {
    if (!summ.includes(Object.values(localResults)[i])) {
      summ.push(Object.values(localResults)[i]);
    }
  }

  if (person.value === "9") {
    quantityAnswers(arrayAlgebra);
  }
  if (person.value === "8") {
    quantityAnswers(arrayGeometr);
  }
  if (person.value === "11") {
    quantityAnswers(arrayData);
  }
};


function renderResults() {
  if (localStorageContent && localStorageAnswers) {
    let parsedlocalStorageContent = JSON.parse(localStorageContent);
    results.innerHTML = parsedlocalStorageContent;
  } else {
    let content = "";
    const getClassname = (answer, questionIndex) => {
      let className = "";

      if (!answer.correct && answer.id == localResults[questionIndex]) {
        className = "answer--invalid";
      } else if (answer.correct) {
        className = "answer--valid";
      }
      return className;
    };
    const getAnswers = (questionIndex) =>
      currentQuestions[questionIndex].answers
        .map(
          (answer) =>
            ` <li class=${getClassname(answer, questionIndex)}>${
              answer.value
            }</li>`
        )
        .join("");

    currentQuestions.forEach((question, index) => {
      content += `
          <div class="quiz-results-item">
          <div class="quiz-results-item__question">
          ${question.question}
          </div>
          <ul class="quiz-results-item__answer"> ${getAnswers(index)}</ul>
          </div> 
          <div></div>
          `;
    });
    results.innerHTML = content;
    localStorage.setItem("content", JSON.stringify(content));
  }
}

function outputResult() {
  questions.hidden = true;
  indicator.hidden = true;
  results.hidden = false;
  next.classList.add('hidden')
  restart.classList.add('hidden')
  correctAnswer.hidden = false;
  btnExitModal.classList.add('hidden');
  renderResults();
}
function renderIndicator(currentStep) {
  indicator.innerHTML = `${currentStep}/${currentQuestions.length}`;
}

// console.log('case 3');

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    setValue(event);
    if (localStorageAnswers) {
      parsedLocalStorageAnswers = JSON.parse(localStorageAnswers);
     if(parsedLocalStorageAnswers.length === 10) {
      outputResult()
     }
    }
  }
});

quiz.addEventListener("input", (event) => {
  if (event.target.classList.contains("answer-input__number")) {
    setValue(event);
  }
});


const clickHandler = (e) => {
  if (e.target.classList.contains("btn-next")) {
    let nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
    if (currentQuestions.length === nextQuestionIndex) {
      outputResult()
    } else {
      renderQuestions(nextQuestionIndex);
    }
    
    next.disabled = true;
  }
  
  if (e.target.classList.contains("btn-restart")) {
    let previousQuestionIndex = Number(questions.dataset.currentStep) - 1;
    if (previousQuestionIndex < 0) {
      previousQuestionIndex = 0;
      restart.disabled = true;
    }
    if (currentQuestions.length === previousQuestionIndex) {
      outputResult()
    } else {
      console.log("case 2");
      
      renderQuestions(previousQuestionIndex);
    }
    
  }
};
quiz.addEventListener("click", clickHandler);
submit.addEventListener("click", function () {
  localResults = {};
  results.innerHTML = "";
  renderQuestions(0);
});
//==================================================

btnExitModal.addEventListener("click", function () {
  modal.hidden = false;
  buttonClose.forEach((item) =>
    item.addEventListener("click", function () {
      modal.hidden = true;
    })
  );
  buttonClose[0].addEventListener("click", function () {
    localResults = {};
    summ = [];
    arrSumm = [];
    str = [];
    arr = [];
    results.innerHTML = "";
    renderQuestions(0);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {};
  obj.name = inputEmail.value;

  if (localStorageAnswers) {
    let parsedLocalStorageAnswers = JSON.parse(localStorageAnswers);
    summ = Object.values(parsedLocalStorageAnswers);
    function currentAnswer(data) {
      for (let i = 0; i < summ.length; i++) {
        if (data.includes(summ[i])) {
          arrSumm.push(summ.indexOf(summ[i]) + 1);
        }
      }
      for (let i = 0; i < arrSumm.length; i++) {
        if (!strResults.includes(arrSumm[i])) {
          strResults.push(arrSumm[i]);
        }
        console.log(strResults);
      }
    }
    if (person.value === "9") {
      currentAnswer(arrayAlgebra);
      str.push(strResults.length);
    }

    if (person.value === "8") {
      console.log(currentAnswer(arrayGeometr));
      str.push(strResults.length);
    }
    if (person.value === "11") {
      currentAnswer(arrayData);

      str.push(strResults.length);
    }
    obj.answers = str.join();
  } else {
    str.push(strResults.length);

    obj.answers = str.join();
  }
  obj.test = person.value;
  console.log(obj);
  fetch("http://157.230.108.157:3000/tests/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  summ = [];
  arrSumm = [];
  str = [];
  arr = [];
  strResults = [];
});

// ================================================================================================

loginButton.addEventListener("click", () => (location.hash = "#recording"));
logout.addEventListener("click", () => (location.hash = "#login"));
testEleventhClass.addEventListener(
  "click",
  () => (location.hash = "#tasksEleventhClass")
);
testEighthClass.addEventListener(
  "click",
  () => (location.hash = "#tasksEighthClass")
);
testNinthClass.addEventListener(
  "click",
  () => (location.hash = "#tasksNinthClass")
);
btnExit.addEventListener("click", () => (location.hash = "#exit"));
btnSubmit.addEventListener("click", () => (location.hash = "#submit"));

function changeLocation() {
  login.hidden = false;
  recording.hidden = true;
  teacherPage.hidden = true;
  logout.classList.add('hidden'); 
  tasksEleventhClass.hidden = true;
  tasksEighthClass.hidden = true;
  tasksNinthClass.hidden = true;
  btn.hidden = true;

  switch (location.hash) {
    case "#recording":
    case "#exit":
    case "#submit":
      if (inputEmail.value && person.value) {
        logout.classList.remove('hidden');
        login.hidden = true;
        recording.hidden = false;
        tasksEleventhClass.hidden = true;
        testNinthClass.classList.add('hidden');
        testEighthClass.classList.add('hidden')
        testEleventhClass.classList.add('hidden')
        
        if (person.value === "11") {
          testEleventhClass.classList.remove('hidden');
          
        }
        if (person.value === "9") {
          testNinthClass.classList.remove('hidden');
        }
        if (person.value === "8") {
          testEighthClass.classList.remove('hidden');
        }
      }
      if (location.hash === "#exit" || location.hash === "#submit") {
        localStorage.removeItem("answers");
        localStorage.removeItem("content");
        localResults = {};
        localStorageAnswers = undefined;
        questions.hidden = false;
        indicator.hidden = false;
        next.classList.remove('hidden')
        restart.classList.remove('hidden')
        btnExitModal.classList.remove('.hidden');
         results.innerHTML = "";
      }
      if (inputEmail.value === "1234" && person.value === "учитель") {
        login.hidden = true;
        recording.hidden = true;
        teacherPage.hidden = false;
        tasksEleventhClass.hidden = true;
        logout.hidden = false;
        table.addEventListener("click", function (e) {
          e.preventDefault();
          console.log(e.target.closest("tr").children);
          let id = e.target.closest("tr").children[0].innerHTML;
          fetch(`http://157.230.108.157:3000/tests/result/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
          });
          console.log(e.target.closest("td"));
          if (e.target.closest("td").innerHTML.includes("X")) {
            e.target.closest("tr").remove();
          }
        });

        fetch("http://157.230.108.157:3000/tests/result")
          .then((response) => response.json())
          .then((users) => {
            console.log(users);

            users.forEach((element) => {
              console.log(element);
              addObj(element);
            });
          });
        function addObj(element) {
          let tr = document.createElement("tr");

          let td0 = document.createElement("td");
          td0.innerHTML = element.id;
          tr.append(td0);
          let td1 = document.createElement("td");
          td1.innerHTML = element.name;
          tr.append(td1);
          let td2 = document.createElement("td");
          td2.innerHTML = element.answers;
          tr.append(td2);
          let td3 = document.createElement("td");
          td3.innerHTML = element.test;
          tr.append(td3);

          let td4 = document.createElement("td");
          td4.innerHTML = "X";
          tr.append(td4);
          table.append(tr);
        }
      }

      break;
    case "#login":
      login.hidden = false;
      recording.hidden = true;
      tasksNinthClass.hidden = true;
      logout.classList.add('hidden');
      tasksEleventhClass.hidden = true;
      tasksEighthClass.hidden = true;
      
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentClass");
      inputEmail.value = "";
      person.value = "";
      break;
    case "#tasksEighthClass":
    case "#tasksNinthClass":
    case "#tasksEleventhClass":
      if (inputEmail.value) {
        login.hidden = true;
        recording.hidden = true;
        tasksEleventhClass.hidden = false;
        logout.classList.add('hidden');
        let page;
        if (localStorageAnswers) {
          parsedLocalStorageAnswers = JSON.parse(localStorageAnswers);
          page = Object.keys(parsedLocalStorageAnswers).length;
        } else {
          page = 0;
        }

        switch (location.hash) {
          case "#tasksEighthClass":
            if (inputEmail.value && person.value === "8") {
                currentQuestions = geometr;
              if (localStorageContent && localStorageAnswers) {
                outputResult()
              } else {
                renderQuestions(page );
              }
            }
            break;
          case "#tasksNinthClass":
            if (inputEmail.value && person.value === "9") {
              console.log("case #task1");
              currentQuestions = algebra;
              if (localStorageContent && localStorageAnswers) {
                outputResult()
              } else {
                renderQuestions(page);
              }
            }

            break;
          case "#tasksEleventhClass":
            if (inputEmail.value && person.value === "11") {
              console.log("case #taskEighthClass");
              location.hash === "#tasksEleventhClass";
              currentQuestions = DATA;
              if (localStorageContent && localStorageAnswers) {
                outputResult()
                 
              } else {
                renderQuestions(page);
              }
            }
            break;
        }
      }
      break;
  }
}

inputEmail.onblur = function () {
  localStorage.setItem("currentUser", inputEmail.value);
};

person.onblur = function () {
  localStorage.setItem("currentClass", person.value);
};
window.addEventListener("hashchange", changeLocation);
if (location.hash === "") location.hash = "#login";
