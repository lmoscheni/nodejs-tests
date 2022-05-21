import test from "node:test";
import assert from "node:assert";

import { BusRouteStrategy } from "../main/busRouteStrategy.js";

const busRouteStrategy = new BusRouteStrategy();

test("BusRouteStrategy::calculateTime from[km-10] to[km-5]", (t) => {
  assert.equal(busRouteStrategy.calculateTime(10, 5), 6);
});

test("BusRouteStrategy::calculateTime from[km-5] to[km-10]", (t) => {
  assert.equal(busRouteStrategy.calculateTime(5, 10), 6);
});

test("BusRouteStrategy::calculateTime from[km-1] to[km-1]", (t) => {
  assert.equal(busRouteStrategy.calculateTime(1, 1), 0);
});

test("BusRouteStrategy::calculateTime from[km-0] to[km-0]", (t) => {
  assert.equal(busRouteStrategy.calculateTime(0, 0), 0);
});
