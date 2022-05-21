import test from "node:test";
import assert from "node:assert";

import { CarRouteStrategy } from "../main/carRouteStrategy.js";

let carRouteStrategy = new CarRouteStrategy();
test;

test("CarRouteStrategy::calculateTime from[km-10] to[km-5]", (t) => {
  assert.equal(carRouteStrategy.calculateTime(10, 5), 4.5);
});

test("CarRouteStrategy::calculateTime from[km-5] to[km-10]", (t) => {
  assert.equal(carRouteStrategy.calculateTime(5, 10), 4.5);
});

test("CarRouteStrategy::calculateTime from[km-1] to[km-1]", (t) => {
  assert.equal(carRouteStrategy.calculateTime(1, 1), 0);
});

test("CarRouteStrategy::calculateTime from[km-0] to[km-0]", (t) => {
  assert.equal(carRouteStrategy.calculateTime(0, 0), 0);
});
