'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Spotlight_context = require('./Spotlight.context.js');
var SpotlightProvider = require('./SpotlightProvider.js');
var events = require('./events.js');



exports.useSpotlight = Spotlight_context.useSpotlight;
exports.SpotlightProvider = SpotlightProvider.SpotlightProvider;
exports.closeSpotlight = events.closeSpotlight;
exports.openSpotlight = events.openSpotlight;
exports.registerSpotlightActions = events.registerSpotlightActions;
exports.removeSpotlightActions = events.removeSpotlightActions;
exports.spotlight = events.spotlight;
exports.toggleSpotlight = events.toggleSpotlight;
exports.triggerSpotlightAction = events.triggerSpotlightAction;
//# sourceMappingURL=index.js.map
