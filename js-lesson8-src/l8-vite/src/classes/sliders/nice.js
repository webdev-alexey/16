import Slider from "./base";

export default class NiceSlider extends Slider {
  animToLeft = [{ transform: "scale(1)" }, { transform: "scale(0)" }];
  animToRight = [
    { transform: "translateY(0)" },
    { transform: "translateY(100%)" },
  ];

  switchSlides(imgForHide, imgForShow, isNext) {
    this.animated = true;
    const animHide = imgForHide.animate(
      isNext ? this.animToLeft : this.animToRight,
      { duration: this.duration },
    );

    animHide.addEventListener("finish", () => {
      imgForHide.classList.remove("showed");
      imgForShow.classList.add("showed");
      const animShow = imgForShow.animate(
        isNext ? this.animToRight : this.animToLeft,
        { duration: this.duration, direction: "reverse" },
      );

      animShow.addEventListener("finish", () => {
        this.animated = false;
      });
    });
  }
}
