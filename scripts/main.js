// const resetBtn = document.querySelector(".btn-reset");
// resetBtn.style.background = "red";

// const resetBt = document.querySelector(".btn-reset");
// const gameGrid = document.querySelector(".game-grid");

// resetBt.addEventListener("click", function () {
//   //   console.log("hi");
//   alert("if you want to change the color");
//   gameGrid.style.backgroundColor = "red";
// });

// resetBt.addEventListener("click", function () {
//   resetBt.classList.remove("active");
// });
// const color = ["orange", "green", "red", "yellow", "purple"];

// let count = 0;
// resetBt.addEventListener("click", function () {
//   if (count > 5) {
//     count = count - 6;
//   }

//   gameGrid.style.backgroundColor = color[count];
//   count = count + 1;
// });
// const fruit = ["apple", "mango", "gava", "bhajiya", "samosa"];
// // push,pop,shift,unshift
// const x = fruit.pop();
// console.log(x);

// const fruit = ["apple", "mango", "gava", "bhajiya", "samosa"];
// const x = fruit.join("_")
// console.log(x)

// function table(num) {
//   for (let i = 0; i <= 10; i *= 2) {
//     // console.log(i)
//     console.log(num + "x" + i + "=" + num * i);
//   }
// }
// table(3);

// const num=[2,4,6,8,9]
// for (let j=0; j<num.length;j++){
//   num[j]=num[j]*2
// }
// console.log(num)
// const num=[2,4,6,8,9]
// num.forEach(function(a){
// console.log(a*2)
// });
// const nums=[2,4,6,8,9]
// nums.forEach(function(nums,index){
// nums[index]=nums*2
// });
// console.log(nums)

const nums=[2,4,6,8,9]
// numsEven=[false,true,true,false]

// const x=nums.map(function(){
//   return 1;
// })
// console.log(x)

// const x=nums.map(function(value){
// return value % 2 ==0;
// })
// console.log(x)
const numsEven=[];
const x=nums.map(function(value){
  return value % 2 ==0;
  })
  console.log(x)
