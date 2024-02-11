import FormattedTimer from "./formatted";

export default class TimerWithEvent extends FormattedTimer {
  constructor(selector, startTime, onTick) {
    super(selector, startTime);
    this.onTick = onTick;
  }

  tick() {
    super.tick();
    this.onTick(this.time);
  }
}
