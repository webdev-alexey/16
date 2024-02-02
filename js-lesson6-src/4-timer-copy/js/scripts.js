window.addEventListener("load", function () {
  let box = document.querySelector(".timer1");
  let time = 10;

  box.innerHTML = time;

  let interval = setInterval(function () {
    time--;
    box.innerHTML = time;

    if (time <= 0) {
      clearInterval(interval);
    }
  }, 1000);

  let box2 = document.querySelector(".timer2");
  let time2 = 5;

  box2.innerHTML = time2;

  let interval2 = setInterval(function () {
    time2--;
    box2.innerHTML = time2;

    if (time2 <= 0) {
      document.querySelector(".getSale").disabled = true;
      clearInterval(interval2);
    }
  }, 1000);

  document.querySelector(".getSale").addEventListener("click", function () {
    this.innerText = "Скидка Ваша!";
    this.disabled = true;
    clearInterval(interval2);
  });
});
