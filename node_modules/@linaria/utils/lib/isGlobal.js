"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGlobal = void 0;
var _getScope = require("./getScope");
const isGlobal = (node, name) => {
  const scope = (0, _getScope.getScope)(node);
  return scope.getBinding(name) === undefined && scope.hasGlobal(name);
};
exports.isGlobal = isGlobal;
//# sourceMappingURL=isGlobal.js.map