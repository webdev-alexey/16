document.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");

  box.addEventListener("click", function (e) {
    const item = e.target.closest(".item");

    if (item !== null && box.contains(item)) {
      let colors = ["red", "green", "blue"];
      let num = Math.floor(Math.random() * colors.length);
      item.style.color = colors[num];
    }
  });

  document.querySelector(".addItem").addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `Text ${Math.random()}`;
    box.appendChild(div);
  });
});
