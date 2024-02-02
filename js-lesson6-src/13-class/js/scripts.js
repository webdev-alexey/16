window.addEventListener("load", function () {
  const btnSale = document.querySelector(".getSale");
  new Timer(".timer1", 10);

  const t2 = new Timer(".timer2", 100);
  console.log(t2);

  btnSale.addEventListener("click", function () {
    this.innerText = "Скидка Ваша!";
    this.disabled = true;
    t2.stop();
  });
});

class Timer {
  constructor(selector, startTime) {
    this.box = document.querySelector(selector);
    this.time = startTime;
    this.interval = null;
    this.start();
  }

  render() {
    this.box.innerHTML = this.time;
  }

  tick() {
    this.time--;
    this.render();

    if (this.time <= 0) {
      this.stop();
    }
  }

  start() {
    this.render();
    this.interval = setInterval(() => this.tick(), 1000); // some magic included, see it later
  }

  stop() {
    clearInterval(this.interval);
  }
}

let obj = {
  fn() {
    console.log(this);
  },
};

obj.fn();
let sameFn = obj.fn;
sameFn();
