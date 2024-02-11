import Timer from "./base";

export default class FormattedTimer extends Timer {
  render() {
    // this.time = 5000
    let h = parseInt(this.time / 3600); // 1
    let hs = this.time % 3600; // 1400
    let m = parseInt(hs / 60); // 23
    let s = hs % 60; // 20
    // in real maybe better put h,m,s to object and use loop to proccess it
    this.box.innerText = `${this.nn(h)}:${this.nn(m)}:${this.nn(s)}`;
  }

  nn(number) {
    return number < 10 ? `0${number}` : number.toString();
  }
}
