"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  buildOptions: true,
  loadBabelOptions: true
};
Object.defineProperty(exports, "buildOptions", {
  enumerable: true,
  get: function () {
    return _buildOptions.default;
  }
});
Object.defineProperty(exports, "loadBabelOptions", {
  enumerable: true,
  get: function () {
    return _loadBabelOptions.default;
  }
});
var _buildOptions = _interopRequireDefault(require("./buildOptions"));
var _loadBabelOptions = _interopRequireDefault(require("./loadBabelOptions"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map