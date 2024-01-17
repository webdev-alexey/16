document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelector(".some");
  let btn = document.querySelector(".btnAddColor");
  let colors = ["red", "green", "blue"];

  div.addEventListener("mouseenter", function () {
    let num = Math.floor(Math.random() * colors.length);
    div.style.color = colors[num];
  });

  btn.addEventListener("click", function () {
    colors.push(
      `rgb(${randColorChannel()}, ${randColorChannel()}, ${randColorChannel()})`,
    );
  });
});

function randColorChannel() {
  return Math.floor(Math.random() * 256);
}
