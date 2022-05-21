export class BusRouteStrategy {
  calculateTime(from, to) {
    return Math.abs(from - to) * 1.2;
  }

  getType() {
    return "bus";
  }
}
