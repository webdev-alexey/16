document.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelector(".some");

  div.addEventListener("click", function () {
    div.innerHTML += "1";
  });

  div.addEventListener("click", function () {
    div.innerHTML += "2";
  });
});

/* let a;
a = 1;
a = 2;
console.log(a); */
/* 
div{
	#events: {
		click: [fn1, fn2]
	}
} */
