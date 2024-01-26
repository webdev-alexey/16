document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".check");

  const validation = {
    filled: {
      pattern: /.+/,
      text: "not empty",
    },
    phone: {
      pattern: /^\d{8,13}$/,
      text: "only numbers, length [8,13]",
    },
    email: {
      pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      text: "incorrect email",
    },
  };

  form.addEventListener("submit", function (e) {
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
      const inp = inputs[i];
      const name = inp.dataset.rule;
      const rule = validation[name];

      if (rule !== undefined && !rule.pattern.test(inp.value)) {
        inp.classList.add("err");
        inp.nextElementSibling.innerText = rule.text;
        hasError = true;
      }
    }

    if (hasError) {
      e.preventDefault();
    }
  });

  delegate(form, "focusin", ".check", function () {
    this.classList.remove("err");
    //this.nextElementSibling.innerText = '';
  });
});

function delegate(box, eventname, selector, fn) {
  box.addEventListener(eventname, function (e) {
    const el = e.target.closest(selector);

    if (el !== null && box.contains(el)) {
      fn.call(el, e);
    }
  });
}
