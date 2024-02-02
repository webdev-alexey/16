window.addEventListener("load", function () {
  createTimer(".timer1", 10);
  createTimer(".timer2", 20);

  document.querySelector(".getSale").addEventListener("click", function () {
    this.innerText = "Скидка Ваша!";
    this.disabled = true;
    //clearInterval(interval2);
  });
});

function createTimer(selector, startTime) {
  let box = document.querySelector(selector);
  let time = startTime;

  box.innerHTML = time;

  let interval = setInterval(function () {
    time--;
    box.innerHTML = time;

    if (time <= 0) {
      clearInterval(interval);
    }
  }, 1000);

  /* function stop(){
		clearInterval(interval);
	}

	function setTime(){
		clearInterval(interval);
	}

	return { stop, setTime }; */
}
