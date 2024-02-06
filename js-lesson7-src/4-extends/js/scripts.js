window.addEventListener("load", function () {
  const btnSale = document.querySelector(".getSale");
  new Timer(".timer1", 10);

  const t2 = new FormattedTimer(".timer2", 5000);
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

class FormattedTimer extends Timer {
  render() {
    // this.time = 5000
    let h = parseInt(this.time / 3600); // 1
    let hs = this.time % 3600; // 1400
    let m = parseInt(hs / 60); // 23
    let s = hs % 60; // 20
    // in real maybe better put h,m,s to object and use loop to proccess it
    this.box.innerText = `${this.nn(h)}:${this.nn(m)}:${this.nn(s)}`;
  }

  nn(number) {
    return number < 10 ? `0${number}` : number.toString();
  }
}

/* {
	this.box = document.querySelector(selector);
	this.time = startTime;
	this.interval = null;

	start(){
		this.box.innerHTML = 'I dont want work now!';
	}

	__proto__: {
		constructor(selector, startTime){
			this.box = document.querySelector(selector);
			this.time = startTime;
			this.interval = null;
			this.box.innerHTML = this.time;
			this.start();
		}
	
		tick(){
			this.time--;
			this.box.innerHTML = this.time;
	
			if(this.time <= 0){
				this.stop();
			}
		}
	
		start(){
			this.interval = setInterval(() => this.tick(), 1000);
		}
	
		stop(){
			clearInterval(this.interval);
		}
	}
} */
