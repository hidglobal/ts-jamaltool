'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var ActionsList_styles = require('./ActionsList.styles.js');

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
function ActionsList(_a) {
  var _b = _a, {
    actions,
    styles,
    classNames,
    actionComponent: Action,
    hovered,
    onActionTrigger,
    query,
    nothingFoundMessage,
    highlightQuery,
    highlightColor,
    radius,
    variant
  } = _b, others = __objRest(_b, [
    "actions",
    "styles",
    "classNames",
    "actionComponent",
    "hovered",
    "onActionTrigger",
    "query",
    "nothingFoundMessage",
    "highlightQuery",
    "highlightColor",
    "radius",
    "variant"
  ]);
  const { classes } = ActionsList_styles['default'](null, { name: "Spotlight", classNames, styles, variant });
  const items = actions.map((item) => {
    if (item.type === "item") {
      return /* @__PURE__ */ React__default.createElement(Action, {
        query,
        key: item.item.id,
        action: item.item,
        hovered: item.index === hovered,
        classNames,
        styles,
        radius,
        onTrigger: () => onActionTrigger(item.item),
        highlightQuery,
        highlightColor
      });
    }
    return /* @__PURE__ */ React__default.createElement(core.Text, {
      className: classes.actionsGroup,
      color: "dimmed",
      key: item.label
    }, item.label);
  });
  const shouldRenderActions = items.length > 0 || !!nothingFoundMessage && query.trim().length > 0;
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, shouldRenderActions && /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: classes.actions
  }, others), items.length > 0 ? items : /* @__PURE__ */ React__default.createElement(core.Text, {
    c: "dimmed",
    className: classes.nothingFound,
    ta: "center",
    fz: "lg",
    py: "md"
  }, nothingFoundMessage)));
}
ActionsList.displayName = "@mantine/spotlight/ActionsList";

exports.ActionsList = ActionsList;
//# sourceMappingURL=ActionsList.js.map
