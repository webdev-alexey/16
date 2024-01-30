window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    const el = this.nextElementSibling;

    if (el.classList.contains("showed")) {
      el.classList.remove("open");

      function hide() {
        el.classList.remove("showed");
        el.removeEventListener("transitionend", hide);
      }

      el.addEventListener("transitionend", hide);
      /* setTimeout(function(){
				el.classList.remove('showed');
			}, 2000); */
    } else {
      el.classList.add("showed");
      el.classList.add("open");
    }
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

// this.nextElementSibling later
