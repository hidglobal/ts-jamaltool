'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@mantine/utils');

const [useNavigationProgressEvents, createEvent] = utils.createUseExternalEvents("mantine-nprogress");
const startNavigationProgress = createEvent("start");
const stopNavigationProgress = createEvent("stop");
const resetNavigationProgress = createEvent("reset");
const setNavigationProgress = createEvent("set");
const incrementNavigationProgress = createEvent("increment");
const decrementNavigationProgress = createEvent("decrement");
const completeNavigationProgress = createEvent("complete");
const nprogress = {
  start: startNavigationProgress,
  stop: stopNavigationProgress,
  reset: resetNavigationProgress,
  set: setNavigationProgress,
  increment: incrementNavigationProgress,
  decrement: decrementNavigationProgress,
  complete: completeNavigationProgress
};

exports.completeNavigationProgress = completeNavigationProgress;
exports.createEvent = createEvent;
exports.decrementNavigationProgress = decrementNavigationProgress;
exports.incrementNavigationProgress = incrementNavigationProgress;
exports.nprogress = nprogress;
exports.resetNavigationProgress = resetNavigationProgress;
exports.setNavigationProgress = setNavigationProgress;
exports.startNavigationProgress = startNavigationProgress;
exports.stopNavigationProgress = stopNavigationProgress;
exports.useNavigationProgressEvents = useNavigationProgressEvents;
//# sourceMappingURL=events.js.map
