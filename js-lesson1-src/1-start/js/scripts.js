/* // #1
window.onload = function(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
} */

/* // #2
window.onload = pageLoaded;

function pageLoaded(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
} */

/*//#3
window.addEventListener('load', function(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
})*/

//#4
function pageLoaded() {
  let div = document.querySelector(".some");
  div.innerHTML = "1";
}

window.addEventListener("load", pageLoaded);

/* document.addEventListener('DOMContentLoaded', function(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
}) */

/* function сисадмин(){

}

новСотрудник.onКомпТупит = сисадмин;
новСотрудник.onКомпТупит() -> сисадмин() */

/* if(window.onload){
	window.onload();
} */

/* 
let a = 1;
let b = {
	some: 1,
	other: 2
};
b.some

let c = [];
 */

/* let a = function(){

}

function b(){

}

a();
b(); */
