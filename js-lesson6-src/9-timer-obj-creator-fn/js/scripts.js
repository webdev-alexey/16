window.addEventListener("load", function () {
  const t1 = createTimer(".timer1", 20);
  const t2 = createTimer(".timer2", 10);
  const btnSale = document.querySelector(".getSale");

  btnSale.addEventListener("click", function () {
    this.innerText = "Скидка Ваша!";
    this.disabled = true;
    t2.stop();
  });
});

function createTimer(selector, startTime) {
  let timer = {
    box: document.querySelector(selector),
    time: startTime,
    interval: null,
    render: function () {
      this.box.innerHTML = this.time;
    },
    tick: function () {
      this.time--;
      this.render();

      if (this.time <= 0) {
        this.stop();
      }
    },
    start: function () {
      this.render();
      this.interval = setInterval(() => this.tick(), 1000); // some magic included, see it later
    },
    stop: function () {
      clearInterval(this.interval);
    },
  };

  timer.start();
  return timer;
}
