window.addEventListener("load", function () {
  const baseTimer = {
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

  let timer1 = {
    box: document.querySelector(".timer1"),
    time: 10,
    interval: null,
    __proto__: baseTimer,
  };

  let timer2 = {
    box: document.querySelector(".timer2"),
    time: 5,
    interval: null,
    __proto__: baseTimer,
  };

  timer1.start();
  timer2.start();
});
/* 
function Timer(selector, startTime){
	this.box = document.querySelector('.timer2');
	this.time = 5;
	this.interval = null;

	this.prototype.render = function(){
		this.box.innerHTML = this.time;
	}
} */
