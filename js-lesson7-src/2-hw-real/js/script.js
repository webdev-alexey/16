window.addEventListener("load", function () {
  new Slider(".gallery-1");
  const s2 = new Slider(".gallery-2");
  s2.start(2000);

  s2.root.addEventListener("mouseenter", () => s2.stop());
  s2.root.addEventListener("mouseleave", () => s2.start(2000));
});

class Slider {
  interval = null;
  i = 0;

  constructor(selector) {
    this.root = document.querySelector(selector);
    this.btnPrev = this.root.querySelector(".buttons .prev");
    this.btnNext = this.root.querySelector(".buttons .next");
    this.images = this.root.querySelectorAll(".photos img");

    this.btnPrev.addEventListener("click", () => {
      //this.stop();
      this.prev();
    });

    this.btnNext.addEventListener("click", () => {
      //this.stop();
      this.next();
    });
  }

  prev() {
    this.images[this.i].classList.remove("showed");
    this.i--;

    if (this.i < 0) {
      this.i = this.images.length - 1;
    }

    this.images[this.i].classList.add("showed");
  }

  next() {
    this.images[this.i].classList.remove("showed");
    this.i++;

    if (this.i >= this.images.length) {
      this.i = 0;
    }

    this.images[this.i].classList.add("showed");
  }

  start(rate) {
    this.stop();
    this.interval = setInterval(() => this.next(), rate);
  }

  stop() {
    clearInterval(this.interval);
  }
}
