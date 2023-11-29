"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isExports;
var _isGlobal = require("./isGlobal");
/**
 * Checks that specified Identifier is a global `exports` or `module.exports`
 * @param node
 */
function isExports(node) {
  if (node !== null && node !== void 0 && node.isIdentifier({
    name: 'exports'
  })) {
    return (0, _isGlobal.isGlobal)(node, 'exports');
  }
  if (node !== null && node !== void 0 && node.isMemberExpression() && node.get('object').isIdentifier({
    name: 'module'
  }) && node.get('property').isIdentifier({
    name: 'exports'
  })) {
    return (0, _isGlobal.isGlobal)(node, 'module');
  }
  return false;
}
//# sourceMappingURL=isExports.js.map