window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    this.nextElementSibling.classList.toggle("open");
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
