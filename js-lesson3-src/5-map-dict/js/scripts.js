let month = Math.random() > 0.5 ? "january" : "february"; // fn()
/* let ruMonth;

if(month == 'january'){
	ruMonth = 'январь';
}
else if(month == 'february'){
	ruMonth = 'февраль';
}
else if(month == 'march'){
	ruMonth = 'март';
}
else if(month == 'april'){
	ruMonth = 'апрель';
}
else if(month == 'may'){
	ruMonth = 'май';
}

console.log(month);
console.log(ruMonth);  */

let dict = {
  january: "январь",
  february: "февраль",
  march: "март",
  april: "апрель",
  may: "май",
};
/* 
console.log(dict.march);
console.log(dict['march']); */
console.log(dict[month]);
