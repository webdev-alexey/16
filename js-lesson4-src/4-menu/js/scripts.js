window.addEventListener("load", function () {
  let menu = document.querySelector(".menu");

  delegate(menu, "click", ".menu__link", function (e) {
    e.preventDefault();
    scrollToId(this.hash);
  });

  if (window.location.hash) {
    scrollToId(window.location.hash, false);
  }

  function scrollToId(id, smooth = true) {
    const activeLink = menu.querySelector(".menu__link-active");

    if (activeLink) {
      activeLink.classList.remove("menu__link-active");
    }

    const header = document.querySelector(id);
    menu.querySelector(`a[href$="${id}"]`).classList.add("menu__link-active");

    const contentOffet = 70; // 70 not very good, we can calc with getComputedStyle
    // offsetTop is tmp sample, in hw getBoundingClientRect

    window.scroll({
      top: header.offsetTop - contentOffet,
      behavior: smooth ? "smooth" : "instant",
    });
  }
});

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}
