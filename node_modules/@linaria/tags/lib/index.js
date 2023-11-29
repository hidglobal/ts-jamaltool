"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BaseProcessor: true,
  buildSlug: true,
  isSerializable: true,
  TaggedTemplateProcessor: true,
  hasMeta: true,
  toValidCSSIdentifier: true
};
Object.defineProperty(exports, "BaseProcessor", {
  enumerable: true,
  get: function () {
    return _BaseProcessor.default;
  }
});
Object.defineProperty(exports, "TaggedTemplateProcessor", {
  enumerable: true,
  get: function () {
    return _TaggedTemplateProcessor.default;
  }
});
Object.defineProperty(exports, "buildSlug", {
  enumerable: true,
  get: function () {
    return _buildSlug.buildSlug;
  }
});
Object.defineProperty(exports, "hasMeta", {
  enumerable: true,
  get: function () {
    return _hasMeta.default;
  }
});
Object.defineProperty(exports, "isSerializable", {
  enumerable: true,
  get: function () {
    return _isSerializable.default;
  }
});
Object.defineProperty(exports, "toValidCSSIdentifier", {
  enumerable: true,
  get: function () {
    return _toValidCSSIdentifier.default;
  }
});
var _BaseProcessor = _interopRequireWildcard(require("./BaseProcessor"));
Object.keys(_BaseProcessor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _BaseProcessor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BaseProcessor[key];
    }
  });
});
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
var _buildSlug = require("./utils/buildSlug");
var _isSerializable = _interopRequireDefault(require("./utils/isSerializable"));
var _types2 = require("./utils/types");
Object.keys(_types2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types2[key];
    }
  });
});
var _validateParams = require("./utils/validateParams");
Object.keys(_validateParams).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _validateParams[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validateParams[key];
    }
  });
});
var _TaggedTemplateProcessor = _interopRequireDefault(require("./TaggedTemplateProcessor"));
var _hasMeta = _interopRequireDefault(require("./utils/hasMeta"));
var _toValidCSSIdentifier = _interopRequireDefault(require("./utils/toValidCSSIdentifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map