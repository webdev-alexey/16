window.addEventListener("load", function () {
  let links = document.querySelectorAll("nav a");
  let images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", linkClicked);
  }

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", imageClicked);
    images[i].addEventListener("contextmenu", cancelEvent);
    images[i].addEventListener("mousedown", cancelEvent);
  }

  function imageClicked(e) {
    if (e.ctrlKey) {
      this.classList.toggle("active");
    } else {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }

      this.classList.add("active");
    }
  }
});

function cancelEvent(e) {
  e.preventDefault();
}

function linkClicked(e) {
  if (!confirm("External site, are you sure?")) {
    e.preventDefault();
  }
}

/* document.addEventListener('keydown', function(e){
	
}); */

document.addEventListener("click", function (e) {
  console.log(e.composedPath());
});
