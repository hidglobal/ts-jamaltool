"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequire;
var _isGlobal = require("./isGlobal");
/**
 * Checks that specified Identifier is a global `require`
 * @param id
 */
function isRequire(id) {
  if (!(id !== null && id !== void 0 && id.isIdentifier()) || id.node.name !== 'require') {
    return false;
  }
  return (0, _isGlobal.isGlobal)(id, 'require');
}
//# sourceMappingURL=isRequire.js.map