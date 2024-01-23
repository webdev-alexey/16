document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".check");

  form.addEventListener("submit", function (e) {
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
      const inp = inputs[i];

      if (inp.value == "") {
        inp.classList.add("err");
        hasError = true;
      }
    }

    if (hasError) {
      e.preventDefault();
      //alert('Проверьте поля формы!');
    }
  });

  form.addEventListener("focusin", function (e) {
    if (e.target.classList.contains("check")) {
      e.target.classList.remove("err");
    }
  });
});
