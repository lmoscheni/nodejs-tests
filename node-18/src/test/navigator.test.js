import test from "node:test";
import assert from "node:assert";

import { Navigator } from "../main/navigator.js";
import { CarRouteStrategy } from "../main/carRouteStrategy.js";
import { BusRouteStrategy } from "../main/busRouteStrategy.js";

const carNavigator = new Navigator(new CarRouteStrategy());
const busNavigator = new Navigator(new BusRouteStrategy());

test("Navigator::estimateTravelTime in car from LocationA[km-10] to LocationB[km-5] ", (t) => {
  assert.deepEqual(carNavigator.estimateTravelTime({ km: 10 }, { km: 5 }), {
    from: { km: 10 },
    to: { km: 5 },
    timeOfTravel: 4.5,
    typeOfRoute: "car",
  });
});

test("Navigator::estimateTravelTime in bus from LocationA[km-10] to LocationB[km-5] ", (t) => {
  assert.deepEqual(busNavigator.estimateTravelTime({ km: 10 }, { km: 5 }), {
    from: { km: 10 },
    to: { km: 5 },
    timeOfTravel: 6,
    typeOfRoute: "bus",
  });
});

test("Navigator::estimateTravelTime in car from LocationA[km-5] to LocationB[km-10] ", (t) => {
  assert.deepEqual(carNavigator.estimateTravelTime({ km: 5 }, { km: 10 }), {
    from: { km: 5 },
    to: { km: 10 },
    timeOfTravel: 4.5,
    typeOfRoute: "car",
  });
});

test("Navigator::estimateTravelTime in bus from LocationA[km-5] to LocationB[km-10] ", (t) => {
  assert.deepEqual(busNavigator.estimateTravelTime({ km: 5 }, { km: 10 }), {
    from: { km: 5 },
    to: { km: 10 },
    timeOfTravel: 6,
    typeOfRoute: "bus",
  });
});

test("Navigator::estimateTravelTime in car from LocationA[km-1] to LocationB[km-1] ", (t) => {
  assert.deepEqual(carNavigator.estimateTravelTime({ km: 1 }, { km: 1 }), {
    from: { km: 1 },
    to: { km: 1 },
    timeOfTravel: 0,
    typeOfRoute: "car",
  });
});

test("Navigator::estimateTravelTime in bus from LocationA[km-1] to LocationB[km-1] ", (t) => {
  assert.deepEqual(busNavigator.estimateTravelTime({ km: 1 }, { km: 1 }), {
    from: { km: 1 },
    to: { km: 1 },
    timeOfTravel: 0,
    typeOfRoute: "bus",
  });
});

test("Navigator::estimateTravelTime in car from LocationA[km-0] to LocationB[km-0] ", (t) => {
  assert.deepEqual(carNavigator.estimateTravelTime({ km: 0 }, { km: 0 }), {
    from: { km: 0 },
    to: { km: 0 },
    timeOfTravel: 0,
    typeOfRoute: "car",
  });
});

test("Navigator::estimateTravelTime in bus from LocationA[km-0] to LocationB[km-0] ", (t) => {
  assert.deepEqual(busNavigator.estimateTravelTime({ km: 0 }, { km: 0 }), {
    from: { km: 0 },
    to: { km: 0 },
    timeOfTravel: 0,
    typeOfRoute: "bus",
  });
});
