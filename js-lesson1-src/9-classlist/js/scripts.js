document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", setRandomColor);
  }
});

function setRandomColor() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.style.color = "inherit";
  } else {
    this.classList.add("active");
    this.style.color = this.dataset.color;
  }
}

/*
	HTMLElement
		classList
			.add(classname)
			.remove(classname)
			.contains(classname)
			.toggle(classname)

			if(contains(classname))
				remove(classname)
			else
				add(classname)
*/
