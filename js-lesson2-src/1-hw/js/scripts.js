window.addEventListener("load", function () {
  let inp1 = document.querySelector(".num1");
  let inp2 = document.querySelector(".num2");
  let oper = document.querySelector(".oper");
  let btnRun = document.querySelector(".btnRun");
  let resultBox = document.querySelector(".result");

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

  inp1.addEventListener("input", enableBtn);
  inp2.addEventListener("input", enableBtn);
  oper.addEventListener("input", enableBtn);

  inp1.addEventListener("input", cleanInput);
  inp2.addEventListener("input", cleanInput);

  function enableBtn() {
    btnRun.disabled = false;
  }

  function cleanInput() {
    /* /^-\d+\.?\d*$/g */ // wtf
    this.value = this.value.replace(/[^0-9]/g, "");
  }
});

/*
	[inp1, inp2, oper].forEach(el => el.addEventListener('input', enableBtn))
*/
