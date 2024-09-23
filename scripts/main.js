const headingEl = document.querySelector(".heading");
const currentPlayer = document.querySelector(".player-stutus");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

// ======Game Variable=====
const players = ["O", "X"];
let currPlayer = "O";

function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return players[rn];
}

function swapPlayer() {
  currPlayer = currPlayer === "O" ? "X" : "O";
}

// only the first one
function handalClick(input) {
  input.textContent = currPlayer;
  swapPlayer();
  currPlayerEl.textContent = currPlayer;
}

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    handalClick(box);
  });
});
