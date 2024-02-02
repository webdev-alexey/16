window.addEventListener("load", function () {
  let timer1 = {
    box: document.querySelector(".timer1"),
    time: 10,
    interval: null,
    render: function () {
      this.box.innerHTML = this.time;
    },
    tick: function () {
      this.time--;
      this.render();

      if (this.time <= 0) {
        clearInterval(this.interval);
      }
    },
    start: function () {
      this.render();
      this.interval = setInterval(() => this.tick(), 1000); // some magic included, see it later
    },
  };

  let timer2 = {
    box: document.querySelector(".timer2"),
    time: 5,
    interval: null,
    render: function () {
      this.box.innerHTML = this.time;
    },
    tick: function () {
      this.time--;
      this.render();

      if (this.time <= 0) {
        clearInterval(this.interval);
      }
    },
    start: function () {
      this.render();
      this.interval = setInterval(() => this.tick(), 1000); // some magic included, see it later
    },
  };

  timer1.start();
  timer2.start();
});
