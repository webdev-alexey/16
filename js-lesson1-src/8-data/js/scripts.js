document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", setRandomColor);
  }
});

function setRandomColor() {
  //this.style.color = this.dataset.color;
}
