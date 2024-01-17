document.addEventListener("DOMContentLoaded", function () {
  let some = document.querySelector(".some");
  let other = document.querySelector(".other");

  some.addEventListener("mouseenter", setRandomColor);
  other.addEventListener("click", setRandomColor);
});

function setRandomColor() {
  let colors = ["red", "green", "blue"];
  let num = Math.floor(Math.random() * colors.length);
  this.style.color = colors[num];
}

/* 
function a(){
	напишите у себя на лбу свой доход на 10

}

function a(){
	this.head.front.innerText = this.moneyRepMonth * 10;
}

ваш возраст * x2 + ваш рост * x + ваш вес = 0 */
