'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var DefaultAction_styles = require('./DefaultAction.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
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
function DefaultAction(_a) {
  var _b = _a, {
    action,
    styles,
    classNames,
    hovered,
    onTrigger,
    highlightQuery,
    highlightColor,
    query,
    radius
  } = _b, others = __objRest(_b, [
    "action",
    "styles",
    "classNames",
    "hovered",
    "onTrigger",
    "highlightQuery",
    "highlightColor",
    "query",
    "radius"
  ]);
  const { classes } = DefaultAction_styles['default']({ radius }, { styles, classNames, name: "Spotlight" });
  return /* @__PURE__ */ React__default.createElement(core.UnstyledButton, __spreadValues({
    className: classes.action,
    "data-hovered": hovered || void 0,
    tabIndex: -1,
    onMouseDown: (event) => event.preventDefault(),
    onClick: onTrigger
  }, others), /* @__PURE__ */ React__default.createElement(core.Group, {
    noWrap: true
  }, action.icon && /* @__PURE__ */ React__default.createElement(core.Center, {
    className: classes.actionIcon,
    "data-hovered": hovered || void 0
  }, action.icon), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.actionBody
  }, /* @__PURE__ */ React__default.createElement(core.Highlight, {
    highlightColor,
    className: classes.actionHighlight,
    highlight: highlightQuery ? query : null
  }, action.title), action.description && /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    className: classes.actionDescription,
    "data-hovered": hovered || void 0
  }, action.description))));
}
DefaultAction.displayName = "@mantine/spotlight/DefaultAction";

exports.DefaultAction = DefaultAction;
//# sourceMappingURL=DefaultAction.js.map
