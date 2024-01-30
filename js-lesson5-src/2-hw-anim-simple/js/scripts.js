window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const menuLinks = menu.querySelectorAll("a");
  const btnUp = document.querySelector(".btnUp");
  const contentBox = document.querySelector(".content");

  delegate(menu, "click", ".menu__link", function (e) {
    e.preventDefault();
    scrollToId(this.hash);
  });

  btnUp.addEventListener("click", function () {
    scrollToY(0);
  });

  window.addEventListener("scroll", function () {
    const pos = window.scrollY;

    if (pos > window.innerHeight / 2) {
      btnUp.classList.add("btnUp-showed");
    } else {
      btnUp.classList.remove("btnUp-showed");
    }

    for (let i = menuLinks.length - 1; i >= 0; i--) {
      let link = menuLinks[i];
      let header = document.querySelector(link.hash);
      let headerTop = header.getBoundingClientRect().top + window.scrollY;

      if (pos + window.innerHeight / 2 > headerTop) {
        cleanMenuActiveItem();
        link.classList.add("menu__link-active");
        break;
      }
    }
    console.log("here");
  });

  if (window.location.hash) {
    scrollToId(window.location.hash, false);
  }

  function cleanMenuActiveItem() {
    const activeLink = menu.querySelector(".menu__link-active");

    if (activeLink) {
      activeLink.classList.remove("menu__link-active");
    }
  }

  function scrollToId(id, smooth = true) {
    const header = document.querySelector(id);
    const contentOffet = parseInt(
      window.getComputedStyle(contentBox).marginTop,
    );
    scrollToY(
      header.getBoundingClientRect().top + window.scrollY - contentOffet,
      smooth,
    );
  }
});

function scrollToY(top, smooth = true) {
  window.scroll({
    top,
    behavior: smooth ? "smooth" : "instant",
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
