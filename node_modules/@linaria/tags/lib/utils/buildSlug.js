"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSlug = buildSlug;
const PLACEHOLDER = /\[(.*?)]/g;
const isValidArgName = (key, args) => key in args;
function buildSlug(pattern, args) {
  return pattern.replace(PLACEHOLDER, (_, name) => isValidArgName(name, args) ? String(args[name]) : '');
}
//# sourceMappingURL=buildSlug.js.map