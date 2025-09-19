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

let currentQuestionIndex=0;

let score=0;

function updateDisplay(){

  questionContainer.innerHTML="";

  answerContainer.innerHTML="";


  let currentAnswer=possibleQuestions[currentQuestionIndex].answer;

  let currentQuestion=possibleQuestions[currentQuestionIndex].question;

  const questionParagraph=document.createElement("p");

  questionParagraph.textContent=currentQuestion;


  questionContainer.append(questionParagraph);

  let possibleCurrentAnswers=possibleQuestions[currentQuestionIndex].possibleAnswers;

  possibleCurrentAnswers.forEach(possibleAnswer=>{

    const button=document.createElement("button");

    button.textContent=possibleAnswer;

    answerContainer.append(button);

    button.addEventListener("click", (event)=>{


      if(event.target.textContent === currentAnswer){

        event.target.classList.add("correct");

        score++;

        console.log(score);

      }else{

        event.target.classList.add("wrong");

      }

      Array.from(answerContainer.querySelectorAll("button")).forEach(btn=>{
        btn.disabled=true;
      });

      showNextButton();

    })
  })
}

function showNextButton(){

  const nextBtn=document.createElement("button");

  nextBtn.textContent="Next Question";

  nextBtn.classList.add("next-button");

  answerContainer.append(nextBtn)

  nextBtn.addEventListener("click",()=>{

    currentQuestionIndex++;

    if(currentQuestionIndex < possibleQuestions.length){

      updateDisplay();
    }else{

      questionContainer.innerHTML="<p>You finished the Quiz </P>";

      answerContainer.innerHTML=`<p>You scored: ${score}</p>`;
    }
  })
}


updateDisplay();