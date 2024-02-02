const catNature = {
  eatType: "meat",
  legs: 4,
};

const lion = {
  age: 1,
  name: "Murzik",
  __proto__: catNature,
};

const puma = {
  age: 2,
  name: "Bobik",
  __proto__: catNature,
};

const leopard = {
  age: 2,
  name: "Some",
  __proto__: catNature,
};

/* console.log(cat.age)
console.log(cat.weight)
console.log(cat.run) */
/* 
cat.run();
cat2.run();

fn() -> this = window
obj.fn)() -> this = obj */
