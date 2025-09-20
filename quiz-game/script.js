const possibleQuestions = [
  {
    question:
      "In Naruto, who was Naruto Uzumaki’s first teacher at the Academy?",
    possibleAnswers: ["Iruka Umino", "Kakashi Hatake", "Jiraiya", "Mizuki"],
    answer: "Iruka Umino",
  },
  {
    question:
      "In Death Note, what is the name of the Shinigami who dropped the Death Note?",
    possibleAnswers: ["Ryuk", "Rem", "Gelus", "Sidoh"],
    answer: "Ryuk",
  },
  {
    question: "In One Piece, who is the captain of the Straw Hat Pirates?",
    possibleAnswers: ["Roronoa Zoro", "Monkey D. Luffy", "Sanji", "Shanks"],
    answer: "Monkey D. Luffy",
  },
  {
    question:
      "In Attack on Titan, which military branch does Levi Ackerman belong to?",
    possibleAnswers: [
      "Military Police Brigade",
      "Survey Corps",
      "Garrison Regiment",
      "Warrior Unit",
    ],
    answer: "Survey Corps",
  },
  {
    question:
      "In Dragon Ball Z, who was the first character to go Super Saiyan?",
    possibleAnswers: ["Vegeta", "Gohan", "Goku", "Trunks"],
    answer: "Goku",
  },
];

const questionContainer=document.getElementById("questionContainer");

const answerContainer=document.getElementById("answerContainer");

let startGameBtn=document.getElementById("startGame");

let openingParagraph=document.getElementById("openingParagraph");

let currentQuestionIndex=0;

let score=0;

function startGame() {

    updateDisplay();

    startGameBtn.style.display="none";

    openingParagraph.style.display="none";

}

function updateDisplay(){

  let currentQuestion=possibleQuestions[currentQuestionIndex].question;

  const questionParagraph=document.createElement("p");


  questionParagraph.textContent=currentQuestion;

  questionContainer.append(questionParagraph);

  let currentPossibleAnswers=possibleQuestions[currentQuestionIndex].possibleAnswers;

  let currentAnswer=possibleQuestions[currentQuestionIndex].answer;

  currentPossibleAnswers.forEach(possibleAnswer=>{

    const buttons=document.createElement("button");

     buttons.textContent=possibleAnswer;

     answerContainer.append(buttons);

     buttons.addEventListener("click", (event)=>{

      if(event.target.textContent === currentAnswer){

        event.target.classList.add("correct");

        score++;
      }else{

        event.target.classList.add("wrong");
      }

      Array.from(answerContainer.querySelectorAll("button")).forEach(btn=>{
        btn.disabled=true;
      });

      if(currentQuestionIndex < possibleQuestions.length){

        const nextButton=document.createElement("button");

        nextButton.textContent="Next Question";

        nextButton.id="next-question";

        answerContainer.append(nextButton);

        nextButton.onclick=showNextButton;

      }
     })
  })
}

function showNextButton(){

  if(currentQuestionIndex < possibleQuestions.length - 1){

    questionContainer.innerHTML="";

    answerContainer.innerHTML="";

    currentQuestionIndex++;

    updateDisplay();
  }else{

    questionContainer.innerHTML="";

    answerContainer.innerHTML="";

    openingParagraph.style.display="block";

    openingParagraph.textContent=`You score is : ${score}`;

  }
}
