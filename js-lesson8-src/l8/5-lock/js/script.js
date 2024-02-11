window.addEventListener("load", function () {
  new NiceSlider(".gallery-1");
  new Slider(".gallery-2");
});

class Slider {
  // of course it is param - see sources lesson7/dir#3
  duration = 500;

  // in real maybe it is not great names
  animToLeft = [{ left: "0" }, { left: "-100%" }];
  animToRight = [{ left: "0" }, { left: "100%" }];

  animated = false;

  constructor(selector) {
    this.root = document.querySelector(selector);
    this.btnPrev = this.root.querySelector(".buttons .prev");
    this.btnNext = this.root.querySelector(".buttons .next");

    this.images = this.root.querySelectorAll(".photos img");
    this.i = 0;

    this.btnPrev.addEventListener("click", () => this.prev());
    this.btnNext.addEventListener("click", () => this.next());
  }

  prev() {
    if (!this.animated) {
      const imgForHide = this.images[this.i];
      this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
      this.switchSlides(imgForHide, this.images[this.i], false);
    }
  }

  next() {
    if (!this.animated) {
      const imgForHide = this.images[this.i];
      this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
      this.switchSlides(imgForHide, this.images[this.i], true);
    }
  }

  switchSlides(imgForHide, imgForShow, isNext) {
    this.animated = true;
    const animHide = imgForHide.animate(
      isNext ? this.animToLeft : this.animToRight,
      { duration: this.duration },
    );

    animHide.addEventListener("finish", () => {
      imgForHide.classList.remove("showed");
      this.animated = false;
    });

    imgForShow.classList.add("showed");
    imgForShow.animate(isNext ? this.animToRight : this.animToLeft, {
      duration: this.duration,
      direction: "reverse",
    });
  }
}

class NiceSlider extends Slider {
  animToLeft = [{ transform: "scale(1)" }, { transform: "scale(0)" }];
  animToRight = [
    { transform: "translateY(0)" },
    { transform: "translateY(100%)" },
  ];

  switchSlides(imgForHide, imgForShow, isNext) {
    this.animated = true;
    const animHide = imgForHide.animate(
      isNext ? this.animToLeft : this.animToRight,
      { duration: this.duration },
    );

    animHide.addEventListener("finish", () => {
      imgForHide.classList.remove("showed");
      imgForShow.classList.add("showed");
      const animShow = imgForShow.animate(
        isNext ? this.animToRight : this.animToLeft,
        { duration: this.duration, direction: "reverse" },
      );

      animShow.addEventListener("finish", () => {
        this.animated = false;
      });
    });
  }
}
