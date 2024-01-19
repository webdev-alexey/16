// Домашнее задание.

// 1. Превратить сумматор в калькулятор с 4 операциями (+, -, *, /). Для выбора операции используйте тег select.

// 2. В сумматоре после выполнения действия блокировать кнопку = до тех пор, пока пользователь не изменит введённые данные. Подробная демонстрация в видео.

// 3. (*) При вводе в поля символы, отличные от цифр, моментально удалять их.

window.addEventListener("load", function () {
  let inp1 = document.querySelector(".num1");
  let inp2 = document.querySelector(".num2");
  let btnRun = document.querySelector(".btnRun");
  let resultBox = document.querySelector(".result");
  let select = document.querySelector(".select");

  btnRun.addEventListener("click", function () {
    let num1 = parseInt(inp1.value);
    let num2 = parseInt(inp2.value);
    let total;

    if (select.value == "+") {
      total = num1 + num2;
    }
    if (select.value == "-") {
      total = num1 - num2;
    }
    if (select.value == "*") {
      total = num1 * num2;
    }
    if (select.value == "/") {
      total = num1 / num2;
    }

    resultBox.innerHTML = total;
    btnRun.disabled = true;
  });

  inp1.addEventListener("input", enableBtn);
  inp2.addEventListener("input", enableBtn);
  select.addEventListener("input", enableBtn);

  inp1.addEventListener("input", cleanInput);
  inp2.addEventListener("input", cleanInput);

  function enableBtn() {
    btnRun.disabled = false;
  }

  function cleanInput() {
    this.value = this.value.replace(/[^\d]/g, "");
  }
});
