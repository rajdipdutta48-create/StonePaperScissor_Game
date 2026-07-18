let a = ["stone", "paper", "scissor"];
let cur = Math.floor(Math.random() * a.length);
let computer = a[cur];
function choose() {
  cur = Math.floor(Math.random() * a.length);
  computer = a[cur];
}
let player = "";
let round = 0,
  computerScore = 0,
  playerScore = 0,
  totalRounds = 0;
function rounds() {
  totalRounds = Number(document.querySelector("#rnds").value);
}
window.onload = function () {
  rounds();
};
function playGame() {
  if (round >= totalRounds) {
    if (playerScore > computerScore) {
      document.querySelector("#display0").innerText =
        "Congratulation You Win 🎉🏆";
    } else if (playerScore == computerScore) {
      document.querySelector("#display0").innerText = "🤝 It's a Draw! 😐";
    } else {
      document.querySelector("#display0").innerText =
        "😢 Better Luck Next Time! 💔";
    }
    document.querySelector("#btn1").disabled = true;
    document.querySelector("#btn2").disabled = true;
    document.querySelector("#btn3").disabled = true;
  } else {
    round++;
    choose();
    document.querySelector("#rnds").disabled = true;
    if (player !== computer) {
      if (player === "stone") {
        if (computer === "scissor") {
          playerScore++;
        } else {
          computerScore++;
        }
      } else if (player === "paper") {
        if (computer === "scissor") {
          computerScore++;
        } else {
          playerScore++;
        }
      } else {
        if (computer === "paper") {
          playerScore++;
        } else {
          computerScore++;
        }
      }
    }
  }
}
function display() {
  document.querySelector("#display1").innerText = `Round ${round}`;
  document.querySelector("#display2").innerText =
    `Your Score is:${playerScore}`;
  document.querySelector("#display3").innerText =
    `Computer Score is:${computerScore}`;
}

function res() {
  document.querySelector("#btn1").disabled = false;
  document.querySelector("#btn2").disabled = false;
  document.querySelector("#btn3").disabled = false;
  document.querySelector("#rnds").disabled = false;
}
