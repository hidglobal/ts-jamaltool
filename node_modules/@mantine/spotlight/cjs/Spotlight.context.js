'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const SpotlightContext = React.createContext(null);
function useSpotlight() {
  const ctx = React.useContext(SpotlightContext);
  if (!ctx) {
    throw new Error("[@mantine/spotlight] SpotlightProvider was not found in tree");
  }
  return ctx;
}

exports.SpotlightContext = SpotlightContext;
exports.useSpotlight = useSpotlight;
//# sourceMappingURL=Spotlight.context.js.map
