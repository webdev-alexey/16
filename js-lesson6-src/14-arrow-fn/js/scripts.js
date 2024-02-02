window.addEventListener("load", function () {
  document.querySelector(".sample").addEventListener("click", function () {
    /* const div = this; */

    //   this
    setTimeout(() => {
      // ^
      // |
      // this
      this.style.color = "red";
    }, 1000);
  });
});
