window.onload = function () {
  let div = document.querySelector(".some");

  div.onclick = function () {
    div.innerHTML += "1";
  };

  div.onclick = function () {
    div.innerHTML += "2";
  };
};

/* let a;
a = 1;
a = 2;
console.log(a); */
