window.addEventListener("load", function () {
  let inp1 = document.querySelector(".num1");
  let inp2 = document.querySelector(".num2");
  let selectOper = document.querySelector(".oper");
  let btnRun = document.querySelector(".btnRun");
  let resultBox = document.querySelector(".result");

  const operations = {
    sum: {
      fn: (num1, num2) => num1 + num2,
      label: "Сложение",
    },
    sub: {
      fn: (num1, num2) => num1 - num2,
      label: "Вычитание",
    },
    mult: {
      fn: (num1, num2) => num1 * num2,
      label: "Умножение",
    },
    div: {
      fn: (num1, num2) => num1 / num2,
      label: "Деление",
    },
  };
  //Object.keys(operations) -> ['sum', 'sub', 'mult', 'div']

  for (let key in operations) {
    /* console.log(key); // 'sum', 'sub', 'mult', 'div' -> value option
		let oper = operations[key] // obj with keys fn & label
		console.log(oper.fn) // function
		console.log(oper.label) // text option */

    let oper = operations[key];
    let option = document.createElement("option");
    option.value = key;
    option.innerText = oper.label;
    selectOper.appendChild(option);
  }

  btnRun.addEventListener("click", function () {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    let total = "неизвестная операция";

    let op = selectOper.value;
    let oper = operations[op];

    if (oper !== undefined) {
      total = oper.fn(num1, num2);
    }

    resultBox.innerHTML = total;
    btnRun.disabled = true;
  });

  inp1.addEventListener("input", enableBtn);
  inp2.addEventListener("input", enableBtn);
  selectOper.addEventListener("input", enableBtn);

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
