import chances from "./chances.js";
// console.log(chances);

const headingEl = document.querySelector(".heading");
const currPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

// ======Game Variable=====
const players = ["O", "X"];
let currPlayer;
let virtualgrid;

function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return players[rn];
}

function swapPlayer() {
  const newPlayer = currPlayer === "O" ? "X" : "O";
  currPlayer = newPlayer;
  currPlayerEl.textContent = currPlayer;
}

// ===start game====
function startGame() {
  currPlayer = getPlayer();
  virtualgrid = new Array(9).fill("");
  currentPlayer.textContent = currPlayer;
}

function handleBoxClick(input) {
  if (virtualgrid[input] === "") {
    console.log("input");
    boxes[input].textContent = currPlayer;
    boxes[input].style.cursor = "auto";
    virtualgrid[input] = currPlayer;
    console.log(virtualgrid);
    swapPlayer();
  }
}

// console.log("boxs");
boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  alert("hello");
}
resetBtn.addEventListener("click", handleReset);

document.addEventListener("DOMContentLoaded", startGame);
