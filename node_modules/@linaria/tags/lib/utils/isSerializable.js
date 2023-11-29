"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSerializable;
var _isBoxedPrimitive = _interopRequireDefault(require("./isBoxedPrimitive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function isSerializable(o) {
  if (Array.isArray(o)) {
    return o.every(isSerializable);
  }
  if (o === null) return true;
  if ((0, _isBoxedPrimitive.default)(o)) return true;
  if (typeof o === 'object') {
    return Object.values(o).every(isSerializable);
  }
  return typeof o === 'string' || typeof o === 'number' || typeof o === 'boolean';
}
//# sourceMappingURL=isSerializable.js.map