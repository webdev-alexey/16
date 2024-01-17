document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", setRandomColor);
  }
});

function setRandomColor() {
  let colors = ["red", "green", "blue"];
  let num = Math.floor(Math.random() * colors.length);
  this.style.color = colors[num];
}
