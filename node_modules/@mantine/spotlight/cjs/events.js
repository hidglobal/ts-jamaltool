'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@mantine/utils');

const [useSpotlightEvents, createEvent] = utils.createUseExternalEvents("mantine-spotlight");
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

exports.closeSpotlight = closeSpotlight;
exports.createEvent = createEvent;
exports.openSpotlight = openSpotlight;
exports.registerSpotlightActions = registerSpotlightActions;
exports.removeSpotlightActions = removeSpotlightActions;
exports.spotlight = spotlight;
exports.toggleSpotlight = toggleSpotlight;
exports.triggerSpotlightAction = triggerSpotlightAction;
exports.useSpotlightEvents = useSpotlightEvents;
//# sourceMappingURL=events.js.map
