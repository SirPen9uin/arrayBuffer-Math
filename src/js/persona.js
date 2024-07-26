export default class Persona {
  constructor() {
    this.attackPower = 0;
    this.isStoned = false;
  }

  set attack(range) {
    let currentRange = range;
    if (currentRange <= 0) {
      currentRange = 1;
    }

    this.stoned = currentRange;

    if (currentRange === 1) {
      this.attackOnRange = this.attackPower;
      return;
    }

    if (currentRange >= 11) {
      this.attackOnRange = 0;
    } else {
      this.attackOnRange = (this.attackPower / 100) * (100 - ((currentRange - 1) * 10));
      this.attackOnRange -= this.stoned;
    }
    this.stoned = 0;
  }

  get attack() {
    return Math.round(this.attackOnRange);
  }

  set stoned(range) {
    if (!this.isStoned) {
      this.stonedEffect = 0;
      return;
    }

    this.stonedEffect = Math.log2(range) * 5;
  }

  get stoned() {
    return this.stonedEffect;
  }
}