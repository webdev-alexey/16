document.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", setRandomColor);
  }

  document.querySelector(".addItem").addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `Text ${Math.random()}`;
    box.appendChild(div);

    //div.addEventListener('click', setRandomColor);
  });
});

function setRandomColor() {
  let colors = ["red", "green", "blue"];
  let num = Math.floor(Math.random() * colors.length);
  this.style.color = colors[num];
}
