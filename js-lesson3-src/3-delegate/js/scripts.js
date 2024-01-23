document.addEventListener("DOMContentLoaded", function () {
  let box = document.querySelector(".box");

  delegate(box, "click", ".item", function () {
    let colors = ["red", "green", "blue"];
    let num = Math.floor(Math.random() * colors.length);
    this.style.color = colors[num];
  });

  /* 	items[i].addEventListener('click', function(){
		let colors = ['red', 'green', 'blue'];	
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num];
	});
 */

  document.querySelector(".addItem").addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `Text ${Math.random()}`;
    box.appendChild(div);
  });
});

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}
