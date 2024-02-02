window.addEventListener("load", function () {
  const faq = document.querySelector(".faq");

  delegate(faq, "click", ".ask", function () {
    const el = this.nextElementSibling;
    /* const openEls = faq.querySelectorAll('.answer.open'); */

    /* for(let i = 0; i < openEls.length; i++){
			if(openEls[i] !== el){
				hideWithHeight(openEls[i]);
			}
		} */

    if (el.classList.contains("open")) {
      hideWithHeight(el);
    } else {
      /* for(let i = 0; i < openEls.length; i++){
				hideWithHeight(openEls[i]);
			} */
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
