//counter-container class 가지고오기
let count_increase = document.getElementById("count");
let count_decrease = document.getElementById("count");
let count_reset = document.getElementById("count");
let count = 0;

const counter = document.querySelector(".counter");
console.dir(counter);

function INCREASE() {
  count += 1;
  count_increase.innerText = count;
  colorChange();
}

function DECREASE() {
  count += -1;
  count_decrease.innerText = count;
  colorChange();
}

function RESET() {
  count = 0;
  count_reset.innerText = count;
  colorChange();
}

//버튼 눌럿을때 색상구현
function colorChange() {
  if (count < 0) counter.style.color = "red";
  else if (count > 0) counter.style.color = "green";
  else counter.style.color = "grey";
}
