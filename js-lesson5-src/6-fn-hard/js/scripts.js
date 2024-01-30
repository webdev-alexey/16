window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    fadeToggle(this.nextElementSibling, 700);
  });
});

function fadeToggle(el, time) {
  animation(el, [{ opacity: 0 }, { opacity: 1 }], time);
}

function animation(el, keyframes, time) {
  if (el.classList.contains("open")) {
    const animation = el.animate(keyframes, {
      duration: time,
      direction: "reverse",
    });

    animation.addEventListener("finish", function () {
      el.classList.remove("open");
    });
  } else {
    el.classList.add("open");
    el.animate(keyframes, { duration: time });
  }
}

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}
