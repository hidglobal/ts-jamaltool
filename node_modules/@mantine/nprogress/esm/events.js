import { createUseExternalEvents } from '@mantine/utils';

const [useNavigationProgressEvents, createEvent] = createUseExternalEvents("mantine-nprogress");
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

export { completeNavigationProgress, createEvent, decrementNavigationProgress, incrementNavigationProgress, nprogress, resetNavigationProgress, setNavigationProgress, startNavigationProgress, stopNavigationProgress, useNavigationProgressEvents };
//# sourceMappingURL=events.js.map
