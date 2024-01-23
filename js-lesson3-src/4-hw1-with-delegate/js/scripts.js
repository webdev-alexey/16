window.addEventListener("load", function () {
  const calcul = document.querySelector(".calculator");
  let inp1 = calcul.querySelector(".num1");
  let inp2 = calcul.querySelector(".num2");
  let oper = calcul.querySelector(".oper");
  let btnRun = calcul.querySelector(".btnRun");
  let resultBox = calcul.querySelector(".result");

  btnRun.addEventListener("click", function () {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    let total;

    switch (oper.value) {
      case "sum":
        total = num1 + num2;
        break;
      case "sub":
        total = num1 - num2;
        break;
      case "mult":
        total = num1 * num2;
        break;
      case "div":
        total = num1 / num2;
        break;
    }

    resultBox.innerHTML = total;
    btnRun.disabled = true;
  });

  delegate(calcul, "input", ".num1,.num2,.oper", function () {
    btnRun.disabled = false;
  });

  delegate(calcul, "input", ".num1,.num2", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  inp1.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  /*
		el.addEventListener(eventname, fn)
		delegate(el, eventname, filterSelector,fn)
	*/
});

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}
