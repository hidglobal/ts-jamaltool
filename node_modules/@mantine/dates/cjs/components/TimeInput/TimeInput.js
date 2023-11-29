'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var TimeInput_styles = require('./TimeInput.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const TimeInput = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("TimeInput", defaultProps, props), { classNames, withSeconds, variant, size, styles, unstyled } = _a, others = __objRest(_a, ["classNames", "withSeconds", "variant", "size", "styles", "unstyled"]);
  const { classes, cx } = TimeInput_styles['default'](null, {
    name: "TimeInput",
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  return /* @__PURE__ */ React__default.createElement(core.TextInput, __spreadValues({
    type: "time",
    step: withSeconds ? 1 : 60,
    classNames: __spreadProps(__spreadValues({}, classNames), { input: cx(classes.input, classNames == null ? void 0 : classNames.input) }),
    styles,
    unstyled,
    variant,
    size,
    ref,
    __staticSelector: "TimeInput"
  }, others));
});
TimeInput.displayName = "@mantine/dates/TimeInput";

exports.TimeInput = TimeInput;
//# sourceMappingURL=TimeInput.js.map
