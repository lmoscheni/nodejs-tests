export class CarRouteStrategy {
  calculateTime(from, to) {
    return Math.abs(from - to) * 0.9;
  }

  getType() {
    return "car";
  }
}
