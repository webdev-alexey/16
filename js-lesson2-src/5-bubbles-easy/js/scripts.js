document.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");

  box.addEventListener("click", function (e) {
    if (e.target.classList.contains("item")) {
      let colors = ["red", "green", "blue"];
      let num = Math.floor(Math.random() * colors.length);
      e.target.style.color = colors[num];
    }
  });

  document.querySelector(".addItem").addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `Text ${Math.random()}`;
    box.appendChild(div);
  });
});
