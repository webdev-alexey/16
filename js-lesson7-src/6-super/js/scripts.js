window.addEventListener("load", function () {
  const btnSale = document.querySelector(".getSale");
  new Timer(".timer1", 10);

  const t2 = new TimerWithEvent(".timer2", 5000, function (restTime) {
    console.log(restTime);
  });

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

class TimerWithEvent extends FormattedTimer {
  constructor(selector, startTime, onTick) {
    super(selector, startTime);
    this.onTick = onTick;
  }

  tick() {
    super.tick();
    this.onTick(this.time);
  }
}

/* class Cat{
	hungry; // boolean

	findEat(){
		while(this.hungry){
			this.findTarget();
			this.tryHunt();
		}
	}
}

class HomeCat extends Cat{
	owner; // Human

	findEat(){
		
		while(this.hungry){
			const food = this.sayMayoyoyoy();

			if(!food && this.hungryDays > 3){
				super.findEat();
				break;
			}
		}
	}
} */

/* interface Eatable{

}

class Food implements Eatable{

}

class Frippery implements Eatable{

}

class Cat{
	eat(item: Eatable){

	}
}

class HomeCat extends Cat{
	eat(item: Eatable){

	}
} */
