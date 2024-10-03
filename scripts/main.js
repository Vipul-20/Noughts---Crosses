import chances from "./chances.js";

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
  currPlayer.textContent = currPlayer;
}

function checkIfwon() {
  chances.forEach((chances) => {
    const [c1, c2, c3] = chances;
    if (
      virtualgrid[c1] === virtualgrid[c2] &&
      virtualgrid[c2] === virtualgrid[c1] &&
      virtualgrid[c3] === virtualgrid[c2] &&
      virtualgrid[c1] !== "" &&
      virtualgrid[c2] !== "" &&
      virtualgrid[c3] !== ""
    ) {
      const winner = virtualgrid[c1];
      headingEl.textContent = `winner:${winner}`;

      boxes[c1].classList.add("green");
      boxes[c2].classList.add("green");
      boxes[c3].classList.add("green");

      boxes.forEach((box) => (box.style.pointerEvents = "none"));

      resetBtn.classList.toggle("active");

      return;
    }
  });
  const x = virtualgrid.every((e) => e !== "");

  if (x) headingEl.textContent = "there is tie!";
  resetBtn.classList.toggle("active");
}

function handleBoxClick(input) {
  if (virtualgrid[input] === "") {
    console.log("input");
    boxes[input].textContent = currPlayer;
    boxes[input].style.cursor = "auto";
    virtualgrid[input] = currPlayer;
    // console.log(virtualgrid);
    checkIfwon();
    swapPlayer();
  }
}

boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  alert("Bhai ruk jaa abhi game pura nhi hua hai");
}
resetBtn.addEventListener("click", handleReset);

document.addEventListener("DOMContentLoaded", startGame);
