function some() {
  /* x = 1; */

  function other() {
    /* x = 10; */
  }

  console.log(x);
  other();
  console.log(x);
}

some();
