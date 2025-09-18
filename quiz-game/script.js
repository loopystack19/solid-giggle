const possibleQuestions = [
  {
    question: "In the Pokémon anime, what is Ash Ketchum’s first Pokémon?",
    possibleAnswers: ["pikachu", "Charmander", "Squirtle", "Bulbasaur"],
    answer: "pikachu",
  },
  {
    question: "Who created the Pokémon franchise?",
    possibleAnswers: [
      "Masashi Kishimoto",
      "Satoshi Tajiri",
      "Akira Toriyama",
      "Hayao Miyazaki",
    ],
    answer: "Satoshi Tajiri",
  },
  {
    question: "In Naruto, what is the name of Naruto’s signature technique?",
    possibleAnswers: ["Kamehameha", "Rasengan", "Spirit Bomb", "Bankai"],
    answer: "Rasengan",
  },
  {
    question: "Which Pokémon is known as the “God of Pokémon”?",
    possibleAnswers: ["Mew", "Arceus", "Mewtwo", "Rayquaza"],
    answer: "Arceus",
  },
  {
    question: "In Attack on Titan, what is Eren Yeager’s Titan form called?",
    possibleAnswers: [
      "Armored Titan",
      "Colossal Titan",
      "Founding Titan",
      "Attack Titan",
    ],
    answer: "Attack Titan",
  }
];
let currentQuestionIndex=0;

let questionContainer=document.getElementById("questionContainer");

let answerContainer=document.getElementById("answerContainer");


function updateQuestionAnswer(){

    questionContainer.innerHTML+="<p></P>"
}

