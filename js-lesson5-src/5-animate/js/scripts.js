window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    const el = this.nextElementSibling;

    if (el.classList.contains("open")) {
      const animation = el.animate(
        [
          { opacity: 1, transform: "translateX(0)" },
          { opacity: 0, transform: "translateX(100px)" },
        ],
        { duration: 500 },
      );

      animation.addEventListener("finish", function () {
        el.classList.remove("open");
      });
    } else {
      el.classList.add("open");

      el.animate(
        [
          { opacity: 0, transform: "translateX(-100px)" },
          { opacity: 1, transform: "translateX(0)" },
        ],
        { duration: 500 },
      );
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
