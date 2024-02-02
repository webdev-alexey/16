window.addEventListener("load", function () {
  let box = document.querySelector(".timer1");
  let time = 10;
  let interval;

  function render() {
    box.innerHTML = time;
  }

  function tick() {
    time--;
    render();

    if (time <= 0) {
      clearInterval(interval);
    }
  }

  function start() {
    render();
    interval = setInterval(tick, 1000);
  }

  start();
});
