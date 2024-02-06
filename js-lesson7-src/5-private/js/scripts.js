class Slider {
  #images;

  /* get images(){
		return this.#images;
	} */

  get total() {
    return this.#images.reduce((t, i) => t + i);
  }

  constructor() {
    this.#images = [1, 2, 3];
  }

  next() {}

  prev(step) {}

  appendImage(img) {
    this.#images.push(img);
  }
}

class OtherSlider extends Slider {
  prev(step) {}

  flushImages() {
    // this.#images = []; // why not protected field!?!?!?!?!
  }
}

const s1 = new Slider();
s1.appendImage(4);
console.log(s1.images);
console.log(s1.total);

const s2 = new OtherSlider();
console.log(s2);

/* s1.#images = []
console.log(s1); */

/* 
let a: Slider = fnSome();

a.prev */
