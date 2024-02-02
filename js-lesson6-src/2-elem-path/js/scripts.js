window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    const el = this.closest(".item").querySelector(".answer");

    if (el.classList.contains("open")) {
      hideWithHeight(el);
    } else {
      faq.querySelectorAll(".answer.open").forEach(hideWithHeight);
      el.classList.add("open");

      el.animate([{ height: 0 }, { height: `${el.clientHeight}px` }], {
        duration: 500,
      });
    }
  });
});

function hideWithHeight(el) {
  const animation = el.animate(
    [{ height: `${el.clientHeight}px` }, { height: 0 }],
    { duration: 500 },
  );

  animation.addEventListener("finish", function () {
    el.classList.remove("open");
  });
}

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}

/*
	nextSibling - следующий узел, в т.ч. текстовый
	nextElementSibling - следующий HTML-узел HTMLElement
	parentNode.querySelector('.answer')
	closest('.item').querySelector('.answer')
*/
