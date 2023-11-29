"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = templateProcessor;
var _getVariableName = require("./getVariableName");
var _hasMeta = _interopRequireDefault(require("./hasMeta"));
var _stripLines = _interopRequireDefault(require("./stripLines"));
var _throwIfInvalid = _interopRequireDefault(require("./throwIfInvalid"));
var _toCSS = _interopRequireWildcard(require("./toCSS"));
var _units = require("./units");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-continue */
/**
 * This file handles transforming template literals to class names or styled components and generates CSS content.
 * It uses CSS code from template literals and evaluated values of lazy dependencies stored in ValueCache.
 */

// Match any valid CSS units followed by a separator such as ;, newline etc.
const unitRegex = new RegExp(`^(?:${_units.units.join('|')})\\b`);
function templateProcessor(tagProcessor, [...template], valueCache, variableNameConfig) {
  const sourceMapReplacements = [];
  // Check if the variable is referenced anywhere for basic DCE
  // Only works when it's assigned to a variable
  const {
    isReferenced
  } = tagProcessor;

  // Serialize the tagged template literal to a string
  let cssText = '';
  let item;
  let lastTemplateElementLocation;
  // eslint-disable-next-line no-cond-assign
  while (item = template.shift()) {
    if ('type' in item) {
      // It's a template element
      cssText += item.value.cooked;
      lastTemplateElementLocation = item.loc;
      continue;
    }

    // It's an expression
    const {
      ex
    } = item;
    const {
      end
    } = ex.loc;
    const beforeLength = cssText.length;

    // The location will be end of the current string to start of next string
    const next = template[0]; // template[0] is the next template element
    const loc = {
      // +1 because an expression location always shows 1 column before
      start: {
        line: lastTemplateElementLocation.end.line,
        column: lastTemplateElementLocation.end.column + 1
      },
      end: next ? {
        line: next.loc.start.line,
        column: next.loc.start.column
      } : {
        line: end.line,
        column: end.column + 1
      }
    };
    const value = 'value' in item ? item.value : valueCache.get(item.ex.name);
    (0, _throwIfInvalid.default)(tagProcessor.isValidValue.bind(tagProcessor), value, item, item.source);
    if (value !== undefined && typeof value !== 'function') {
      // Skip the blank string instead of throw ing an error
      if (value === '') {
        continue;
      }
      if ((0, _hasMeta.default)(value)) {
        // If it's a React component wrapped in styled, get the class name
        // Useful for interpolating components
        cssText += `.${value.__linaria.className}`;
      } else if ((0, _toCSS.isCSSable)(value)) {
        // If it's a plain object or an array, convert it to a CSS string
        cssText += (0, _stripLines.default)(loc, (0, _toCSS.default)(value));
      } else {
        // For anything else, assume it'll be stringified
        cssText += (0, _stripLines.default)(loc, value);
      }
      sourceMapReplacements.push({
        original: loc,
        length: cssText.length - beforeLength
      });
    }

    // Is it props based interpolation?
    if (typeof value === 'function') {
      var _next$value$cooked;
      // Check if previous expression was a CSS variable that we replaced
      // If it has a unit after it, we need to move the unit into the interpolation
      // e.g. `var(--size)px` should actually be `var(--size)`
      // So we check if the current text starts with a unit, and add the unit to the previous interpolation
      // Another approach would be `calc(var(--size) * 1px), but some browsers don't support all units
      // https://bugzilla.mozilla.org/show_bug.cgi?id=956573
      const matches = (_next$value$cooked = next.value.cooked) === null || _next$value$cooked === void 0 ? void 0 : _next$value$cooked.match(unitRegex);
      try {
        if (matches) {
          var _next$value$cooked$su, _next$value$cooked2, _unit$length;
          template.shift();
          const [unit] = matches;
          const varId = tagProcessor.addInterpolation(item.ex, cssText, item.source, unit);
          cssText += (0, _getVariableName.getVariableName)(varId, variableNameConfig);
          cssText += (_next$value$cooked$su = (_next$value$cooked2 = next.value.cooked) === null || _next$value$cooked2 === void 0 ? void 0 : _next$value$cooked2.substring((_unit$length = unit === null || unit === void 0 ? void 0 : unit.length) !== null && _unit$length !== void 0 ? _unit$length : 0)) !== null && _next$value$cooked$su !== void 0 ? _next$value$cooked$su : '';
        } else {
          const varId = tagProcessor.addInterpolation(item.ex, cssText, item.source);
          cssText += (0, _getVariableName.getVariableName)(varId, variableNameConfig);
        }
      } catch (e) {
        if (e instanceof Error) {
          throw item.buildCodeFrameError(e.message);
        }
        throw e;
      }
    }
  }
  const rules = tagProcessor.extractRules(valueCache, cssText, tagProcessor.location);

  // tagProcessor.doRuntimeReplacement(classes);
  if (!isReferenced && !cssText.includes(':global')) {
    return null;
  }

  // eslint-disable-next-line no-param-reassign
  return [rules, sourceMapReplacements];
}
//# sourceMappingURL=templateProcessor.js.map