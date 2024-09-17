// const resetBtn = document.querySelector(".btn-reset");
// resetBtn.style.background = "red";

const resetBt = document.querySelector(".btn-reset");
const gameGrid = document.querySelector(".game-grid");

// resetBt.addEventListener("click", function () {
//   //   console.log("hi");
//   alert("if you want to change the color");
//   gameGrid.style.backgroundColor = "red";
// });

// resetBt.addEventListener("click", function () {
//   resetBt.classList.remove("active");
// });
const color = ["orange", "green", "red", "yellow", "purple"];

let count = 0;
resetBt.addEventListener("click", function () {
  if (count > 5) {
    count = count - 6;
  }

  gameGrid.style.backgroundColor = color[count];
  count = count + 1;
});
