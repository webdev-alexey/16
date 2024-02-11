export default class Timer {
  constructor(selector, startTime) {
    this.box = document.querySelector(selector);
    this.time = startTime;
    this.interval = null;
    this.render();
    this.start();
  }

  tick() {
    this.time--;
    this.render();

    if (this.time <= 0) {
      this.stop();
    }
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    this.box.innerText = this.time;
  }
}
