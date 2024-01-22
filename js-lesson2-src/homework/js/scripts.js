document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".form");
  let checks = document.querySelectorAll(".check");

  form.addEventListener("submit", checkInput);
  form.addEventListener("focusin", validate);

  function checkInput(e) {
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].value == "") {
        checks[i].classList.add("err");
        e.preventDefault();
      }
    }
  }

  function validate(e) {
    if (e.target.classList.contains("check")) {
      e.target.classList.remove("err");
    }
  }
});
