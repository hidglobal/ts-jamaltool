'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var context = require('../context.js');

function useModals() {
  const ctx = React.useContext(context.ModalsContext);
  if (!ctx) {
    throw new Error("[@mantine/modals] useModals hook was called outside of context, wrap your app with ModalsProvider component");
  }
  return ctx;
}

exports.useModals = useModals;
//# sourceMappingURL=use-modals.js.map
