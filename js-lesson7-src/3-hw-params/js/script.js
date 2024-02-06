window.addEventListener("load", function () {
  new Slider(".gallery-1");
  new Slider(".gallery-2", {
    btnPrev: ".prevWrapper .prev",
    btnNext: ".nextWrapper .next",
    autoRate: 2000,
  });
});

class Slider {
  defaultOptions = {
    btnPrev: ".buttons .prev",
    btnNext: ".buttons .next",
    photosBox: ".photos img",
    autoRate: 0,
  };

  constructor(selector, params = {}) {
    this.options = Object.assign({}, this.defaultOptions, params);
    this.root = document.querySelector(selector);
    this.btnPrev = this.root.querySelector(this.options.btnPrev);
    this.btnNext = this.root.querySelector(this.options.btnNext);

    this.images = this.root.querySelectorAll(this.options.photosBox);
    this.i = 0;

    this.btnPrev.addEventListener("click", () => this.prev());
    this.btnNext.addEventListener("click", () => this.next());

    if (this.options.autoRate) {
      setInterval(() => this.next(), this.options.autoRate);
    }
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
}

/*
	new Slider('.gallery-1');
	let s2 = new Slider('.gallery-2');

	setInterval(function(){
		s2.next();
	}, 3000)
*/
