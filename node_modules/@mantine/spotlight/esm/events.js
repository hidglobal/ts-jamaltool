import { createUseExternalEvents } from '@mantine/utils';

const [useSpotlightEvents, createEvent] = createUseExternalEvents("mantine-spotlight");
const openSpotlight = createEvent("open");
const closeSpotlight = createEvent("close");
const toggleSpotlight = createEvent("toggle");
const triggerSpotlightAction = createEvent("triggerAction");
const registerSpotlightActions = createEvent("registerActions");
const removeSpotlightActions = createEvent("removeActions");
const spotlight = {
  open: openSpotlight,
  close: closeSpotlight,
  toggle: toggleSpotlight,
  triggerAction: triggerSpotlightAction,
  registerActions: registerSpotlightActions,
  removeActions: removeSpotlightActions
};

export { closeSpotlight, createEvent, openSpotlight, registerSpotlightActions, removeSpotlightActions, spotlight, toggleSpotlight, triggerSpotlightAction, useSpotlightEvents };
//# sourceMappingURL=events.js.map
