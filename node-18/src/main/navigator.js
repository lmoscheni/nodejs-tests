export class Navigator {
  #routingStrategy;

  constructor(routingStrategy) {
    this.#routingStrategy = routingStrategy;
  }

  estimateTravelTime(currentLocation, newLocation) {
    const timeOfTravel = this.#routingStrategy.calculateTime(
      currentLocation.km,
      newLocation.km
    );
    return {
      from: currentLocation,
      to: newLocation,
      timeOfTravel,
      typeOfRoute: this.#routingStrategy.getType(),
    };
  }
}
