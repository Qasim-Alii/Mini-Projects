let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawgame = () => {
  console.log("game was draw.");
  msg.innerText = "game was draw,  Play  again";
  msg.style.backgroundColor = "#081b31";
};

const ShowWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    console.log("You Win!");
    msg.innerText = `You win!, Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    console.log("You lose!");
    msg.innerText = `You lose!, ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("user choise =", userchoice);
  //Generate computer cbhoice
  const compChoice = genComChoice();
  console.log("comp choice =", compChoice);

  if (userchoice === compChoice) {
    //Draw Game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //paper, scissor
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock, scissor
      userwin = compChoice === "rock" ? false : true;
    }
    if (userchoice === "scissor") {
      //rock, paper
      userwin = compChoice === "rock" ? false : true;
    }
    ShowWinner(userwin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
