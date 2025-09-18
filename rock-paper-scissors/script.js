//what we need to ensure the script runs correctly
//1.A way to activate the buttons when the user clicks on the button
//2.We need a way to randomize the computer's choice
//3.A way to display the user and the computer's choices plus the results
//4.We need a way to keep track of the score makes the programme more real world like

let rockBtn=document.getElementById("rock");

let paperBtn=document.getElementById("paper");

let scissorsBtn=document.getElementById("scissors");

let playGameBtn=document.getElementById("playGame");

let playerChoiceDisplay = document.getElementById("playerChoiceDisplay");

let computerChoiceDisplay=document.getElementById("computerChoiceDisplay");

let resultsContainer=document.querySelector(".results-container");

let resultsText = document.getElementById("resultsText");

let playerChoice;

let computerChoice;

let choice;

let playerScore=0;

let playerScoreDisplay=document.getElementById("playerScore");

let computerScore=0;

let computerScoreDisplay=document.getElementById("computerScore");

function removeSelection() {
  rockBtn.classList.remove("selected");

  paperBtn.classList.remove("selected");

  scissorsBtn.classList.remove("selected");
}

function isRock() {
  removeSelection();

  rockBtn.classList.add("selected");

  playerChoice = "rock";

  playerChoiceDisplay.textContent="player choice: Rock 🪨";
}

function isPaper(){

  removeSelection();

  paperBtn.classList.add("selected");

  playerChoice="paper";

  playerChoiceDisplay.textContent = " player choice: paper 📃";
}

function isScissors(){

  removeSelection();

  scissorsBtn.classList.add("selected");

  playerChoice="scissors";

  playerChoiceDisplay.textContent = "player choice: scissors ✂️";
}

function gameIsOn(){

  choice=Math.floor(Math.random()*3);

  switch(choice){
    case 0:
      computerChoice="paper";
      computerChoiceDisplay.textContent="computer choice: paper 📃"
      break;
    case 1:
      computerChoice="scissors";

       computerChoiceDisplay.textContent = "computer choice: scissors ✂️";
      break;
    case 2:
      computerChoice="rock";

       computerChoiceDisplay.textContent = "computer choice: rock 🪨";
      break;
  }
  switch (playerChoice) {
    case "paper":
      if (computerChoice === "scissors") {
        resultsText.textContent = "Results: You loose 😭";
        computerScore++;
        computerScoreDisplay.textContent=`computer score: ${computerScore}`
      } else if (computerChoice === "rock") {
        resultsText.textContent = "Results:You win 🥳";
        playerScore++;
        playerScoreDisplay.textContent=`player score: ${playerScore}`;
      } else {
        resultsText.textContent = "Results:Its a draw ";
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        resultsText.textContent = "Results: You loose 😭";
         computerScore++;
         computerScoreDisplay.textContent = `computer score: ${computerScore}`;
      } else if (computerChoice === "paper") {
        resultsText.textContent = "Results:You win 🥳";
        playerScore++;
        playerScoreDisplay.textContent = `player score: ${playerScore}`;
      } else {
        resultsText.textContent = "Results:Its a draw ";
      }
      break;
    case "rock":
      if (computerChoice === "paper") {
        resultsText.textContent = "Results: You loose 😭";
         computerScore++;
         computerScoreDisplay.textContent = `computer score: ${computerScore}`;
      } else if (computerChoice === "scissors") {
        resultsText.textContent = "Results:You win 🥳";
        playerScore++;
        playerScoreDisplay.textContent = `player score: ${playerScore}`;
      } else {
        resultsText.textContent = "Results:Its a draw ";
      }
      break;
  }
  resultsContainer.style.display="block";
}