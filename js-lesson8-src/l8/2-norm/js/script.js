window.addEventListener("load", function () {
  new Slider(".gallery-1");
  /* const s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000) */
});

class Slider {
  // of course it is param - see sources lesson7/dir#3
  duration = 500;

  animToLeft = [{ left: "0" }, { left: "-100%" }];
  animToRight = [{ left: "0" }, { left: "100%" }];

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
    const imgForHide = this.images[this.i];
    const animHide = imgForHide.animate(this.animToRight, {
      duration: this.duration,
    });

    animHide.addEventListener("finish", () => {
      imgForHide.classList.remove("showed");
    });

    this.i--;

    if (this.i < 0) {
      this.i = this.images.length - 1;
    }

    this.images[this.i].classList.add("showed");
    this.images[this.i].animate(this.animToLeft, {
      duration: this.duration,
      direction: "reverse",
    });
  }

  next() {
    const imgForHide = this.images[this.i];
    const animHide = imgForHide.animate(this.animToLeft, {
      duration: this.duration,
    });

    animHide.addEventListener("finish", () => {
      imgForHide.classList.remove("showed");
    });

    this.i++;

    if (this.i >= this.images.length) {
      this.i = 0;
    }

    this.images[this.i].classList.add("showed");
    this.images[this.i].animate(this.animToRight, {
      duration: this.duration,
      direction: "reverse",
    });
  }
}

/*
	new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000)
*/
