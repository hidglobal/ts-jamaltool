"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadBabelOptions;
const cache = new WeakMap();
const empty = {};
function loadBabelOptions(babel, filename, overrides = empty) {
  var _cache$get, _babel$loadOptions;
  const fileCache = (_cache$get = cache.get(overrides)) !== null && _cache$get !== void 0 ? _cache$get : new Map();
  if (fileCache.has(filename)) {
    return fileCache.get(filename);
  }
  const babelOptions = (_babel$loadOptions = babel.loadOptions({
    ...overrides,
    filename,
    caller: {
      name: 'linaria'
    }
  })) !== null && _babel$loadOptions !== void 0 ? _babel$loadOptions : {};
  fileCache.set(filename, babelOptions);
  cache.set(overrides, fileCache);
  return babelOptions;
}
//# sourceMappingURL=loadBabelOptions.js.map