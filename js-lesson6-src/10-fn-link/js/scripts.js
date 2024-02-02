window.addEventListener("load", function () {
  function baseRender() {
    this.box.innerHTML = this.time;
  }

  function baseTick() {
    this.time--;
    this.render();

    if (this.time <= 0) {
      clearInterval(this.interval);
    }
  }

  function baseStart() {
    this.render();
    this.interval = setInterval(() => this.tick(), 1000); // some magic included, see it later
  }

  let timer1 = {
    box: document.querySelector(".timer1"),
    time: 10,
    interval: null,
    render: baseRender,
    tick: baseTick,
    start: baseStart,
  };

  let timer2 = {
    box: document.querySelector(".timer2"),
    time: 5,
    interval: null,
    render: baseRender,
    tick: baseTick,
    start: baseStart,
  };

  timer1.start();
  timer2.start();
});
