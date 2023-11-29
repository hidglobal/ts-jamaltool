"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncResolve = exports.default = void 0;
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const safeResolve = (name, where) => {
  try {
    return require.resolve(name, {
      paths: where
    });
  } catch (e) {
    return e;
  }
};
const suffixes = ['.js', '.ts', '.jsx', '.tsx'].reduce((acc, ext) => {
  acc.push(`/index${ext}`);
  acc.push(ext);
  return acc;
}, []);
const syncResolve = (what, importer, stack) => {
  const where = [importer, ...stack].map(p => _path.default.dirname(p));
  const resolved = safeResolve(what, where);
  if (!(resolved instanceof Error)) {
    return resolved;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const suffix of suffixes) {
    const resolvedWithSuffix = safeResolve(what + suffix, where);
    if (resolvedWithSuffix instanceof Error) {
      // eslint-disable-next-line no-continue
      continue;
    }
    return resolvedWithSuffix;
  }
  throw resolved;
};
exports.syncResolve = syncResolve;
const asyncResolve = (what, importer, stack) => {
  const where = [importer, ...stack].map(p => _path.default.dirname(p));
  const resolved = safeResolve(what, where);
  if (!(resolved instanceof Error)) {
    return Promise.resolve(resolved);
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const suffix of suffixes) {
    const resolvedWithSuffix = safeResolve(what + suffix, where);
    if (resolvedWithSuffix instanceof Error) {
      // eslint-disable-next-line no-continue
      continue;
    }
    return Promise.resolve(resolvedWithSuffix);
  }
  throw resolved;
};
var _default = asyncResolve;
exports.default = _default;
//# sourceMappingURL=asyncResolveFallback.js.map