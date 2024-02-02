const cat = {
  age: 1,
  name: "Murzik",
  weight: 5,
  eat: function () {},
  run: function () {
    console.log(this);
  },
};

const cat2 = {
  age: 2,
  name: "Bobik",
  weight: 2,
  eat: function () {},
  run: function () {
    console.log(this);
  },
};

/* console.log(cat.age)
console.log(cat.weight)
console.log(cat.run) */
/* 
cat.run();
cat2.run();

fn() -> this = window
obj.fn)() -> this = obj */
