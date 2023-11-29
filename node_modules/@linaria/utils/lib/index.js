"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  asyncResolveFallback: true,
  syncResolve: true,
  collectExportsAndImports: true,
  findIdentifiers: true,
  nonType: true,
  getFileIdx: true,
  isExports: true,
  isNotNull: true,
  isRemoved: true,
  isRequire: true,
  isTypedNode: true,
  isUnnecessaryReactCall: true,
  slugify: true,
  JSXElementsRemover: true
};
Object.defineProperty(exports, "JSXElementsRemover", {
  enumerable: true,
  get: function () {
    return _JSXElementsRemover.default;
  }
});
Object.defineProperty(exports, "asyncResolveFallback", {
  enumerable: true,
  get: function () {
    return _asyncResolveFallback.default;
  }
});
Object.defineProperty(exports, "collectExportsAndImports", {
  enumerable: true,
  get: function () {
    return _collectExportsAndImports.default;
  }
});
Object.defineProperty(exports, "findIdentifiers", {
  enumerable: true,
  get: function () {
    return _findIdentifiers.default;
  }
});
Object.defineProperty(exports, "getFileIdx", {
  enumerable: true,
  get: function () {
    return _getFileIdx.default;
  }
});
Object.defineProperty(exports, "isExports", {
  enumerable: true,
  get: function () {
    return _isExports.default;
  }
});
Object.defineProperty(exports, "isNotNull", {
  enumerable: true,
  get: function () {
    return _isNotNull.default;
  }
});
Object.defineProperty(exports, "isRemoved", {
  enumerable: true,
  get: function () {
    return _isRemoved.default;
  }
});
Object.defineProperty(exports, "isRequire", {
  enumerable: true,
  get: function () {
    return _isRequire.default;
  }
});
Object.defineProperty(exports, "isTypedNode", {
  enumerable: true,
  get: function () {
    return _isTypedNode.default;
  }
});
Object.defineProperty(exports, "isUnnecessaryReactCall", {
  enumerable: true,
  get: function () {
    return _isUnnecessaryReactCall.default;
  }
});
Object.defineProperty(exports, "nonType", {
  enumerable: true,
  get: function () {
    return _findIdentifiers.nonType;
  }
});
Object.defineProperty(exports, "slugify", {
  enumerable: true,
  get: function () {
    return _slugify.default;
  }
});
Object.defineProperty(exports, "syncResolve", {
  enumerable: true,
  get: function () {
    return _asyncResolveFallback.syncResolve;
  }
});
var _asyncResolveFallback = _interopRequireWildcard(require("./asyncResolveFallback"));
var _collectExportsAndImports = _interopRequireWildcard(require("./collectExportsAndImports"));
Object.keys(_collectExportsAndImports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _collectExportsAndImports[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _collectExportsAndImports[key];
    }
  });
});
var _findIdentifiers = _interopRequireWildcard(require("./findIdentifiers"));
var _getFileIdx = _interopRequireDefault(require("./getFileIdx"));
var _isExports = _interopRequireDefault(require("./isExports"));
var _isNotNull = _interopRequireDefault(require("./isNotNull"));
var _isRemoved = _interopRequireDefault(require("./isRemoved"));
var _isRequire = _interopRequireDefault(require("./isRequire"));
var _isTypedNode = _interopRequireDefault(require("./isTypedNode"));
var _isUnnecessaryReactCall = _interopRequireDefault(require("./isUnnecessaryReactCall"));
var _options = require("./options");
Object.keys(_options).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _options[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _options[key];
    }
  });
});
var _scopeHelpers = require("./scopeHelpers");
Object.keys(_scopeHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _scopeHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scopeHelpers[key];
    }
  });
});
var _slugify = _interopRequireDefault(require("./slugify"));
var _JSXElementsRemover = _interopRequireDefault(require("./visitors/JSXElementsRemover"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map