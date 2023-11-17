let questiontext = document.querySelector(".heading");
let atext = document.querySelector("#a");
let btext = document.querySelector("#b");
let ctext = document.querySelector("#c");
let dtext = document.querySelector("#d");
let nextbtn = document.querySelector(".btn");
let subbtn = document.querySelector(".btn1");
let answer = document.querySelector("#input");
let text = document.querySelector("#check");
let val = document.querySelector(".val");
let container = document.querySelector(".container");
let image = document.querySelector(".img");

const Quizdata = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "a:<javascript>",
    b: "b:scripting",
    c: "c:<js>",
    d: "d:<script>",
    correct: "d",
  },
  {
    question: "Javascript is an _______ language?",
    a: "a:Object Oriented",
    b: "b:Project Based",
    c: "c:Procedural",
    d: "d:None of these",
    correct: "a",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "a:var",
    b: "b:let",
    c: "c:both A and B",
    d: "d:None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    a: "a:document.write()",
    b: "b:console.log()",
    c: "c:window.alert()",
    d: "d:All of the above",
    correct: "d",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a: "a:const",
    b: "b:var",
    c: "c:let",
    d: "d:constant",
    correct: "a",
  },
];
let currentQuestion = 0;
loadquiz();
function loadquiz() {
  questiontext.innerText = Quizdata[currentQuestion].question;
  atext.innerText = Quizdata[currentQuestion].a;
  btext.innerText = Quizdata[currentQuestion].b;
  ctext.innerText = Quizdata[currentQuestion].c;
  dtext.innerText = Quizdata[currentQuestion].d;

  currentQuestion++;
}

nextbtn.addEventListener("click", function () {
  if (currentQuestion < Quizdata.length) {
    loadquiz();
    text.innerText = "";
    answer.value = "";
    val.innerText = "";
  } else {
    container.innerText = `You have finished the quiz and your score is ${score}/${Quizdata.length}`;
    image.style.display = "block";
    image.style.marginTop = "19rem";
    image.style.position = "absolute";
  }
});
let score = 0;
let j = 0;
function checkinganswer() {
  if (answer.value === Quizdata[j].correct) {
    text.innerText = "Correct Answer";
    text.style.color = "green";
    score++;
  } else if (answer.value != Quizdata[j].correct && answer.value != "") {
    text.innerText = "Wrong Answer";
    text.style.color = "red";
  }
  j++;
}

subbtn.addEventListener("click", function () {
  if (answer.value === "") {
    val.innerText = "Please Enter your value";
  } else {
    checkinganswer();
  }
});
