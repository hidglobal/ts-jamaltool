'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var core = require('@mantine/core');
var getYearsData = require('./get-years-data/get-years-data.js');
var isYearDisabled = require('./is-year-disabled/is-year-disabled.js');
var YearsList_styles = require('./YearsList.styles.js');
var getYearInTabOrder = require('./get-year-in-tab-order/get-year-in-tab-order.js');
var useDatesContext = require('../DatesProvider/use-dates-context.js');
var PickerControl = require('../PickerControl/PickerControl.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
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
const defaultProps = {
  yearsListFormat: "YYYY",
  size: "sm",
  withCellSpacing: true
};
const YearsList = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("YearsList", defaultProps, props), {
    decade,
    className,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    size,
    variant,
    withCellSpacing
  } = _a, others = __objRest(_a, [
    "decade",
    "className",
    "yearsListFormat",
    "locale",
    "minDate",
    "maxDate",
    "getYearControlProps",
    "classNames",
    "styles",
    "unstyled",
    "__staticSelector",
    "__getControlRef",
    "__onControlKeyDown",
    "__onControlClick",
    "__onControlMouseEnter",
    "__preventFocus",
    "__stopPropagation",
    "size",
    "variant",
    "withCellSpacing"
  ]);
  const { classes, cx } = YearsList_styles['default'](null, {
    name: ["YearsList", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const ctx = useDatesContext.useDatesContext();
  const years = getYearsData.getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder.getYearInTabOrder(years, minDate, maxDate, getYearControlProps);
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps == null ? void 0 : getYearControlProps(year);
      const isYearInTabOrder = dayjs__default(year).isSame(yearInTabOrder, "year");
      return /* @__PURE__ */ React__default.createElement("td", {
        key: cellIndex,
        className: classes.yearsListCell,
        "data-with-spacing": withCellSpacing || void 0
      }, /* @__PURE__ */ React__default.createElement(PickerControl.PickerControl, __spreadProps(__spreadValues({
        size,
        variant,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "YearsList",
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        disabled: isYearDisabled.isYearDisabled(year, minDate, maxDate),
        ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node)
      }, controlProps), {
        onKeyDown: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a2.call(controlProps, event);
          __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: year });
        },
        onClick: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a2.call(controlProps, event);
          __onControlClick == null ? void 0 : __onControlClick(event, year);
        },
        onMouseEnter: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a2.call(controlProps, event);
          __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, year);
        },
        onMouseDown: (event) => {
          var _a2;
          (_a2 = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a2.call(controlProps, event);
          __preventFocus && event.preventDefault();
        },
        tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0
      }), dayjs__default(year).locale(ctx.getLocale(locale)).format(yearsListFormat)));
    });
    return /* @__PURE__ */ React__default.createElement("tr", {
      key: rowIndex,
      className: classes.yearsListRow
    }, cells);
  });
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    component: "table",
    ref,
    className: cx(classes.yearsList, className)
  }, others), /* @__PURE__ */ React__default.createElement("tbody", null, rows));
});
YearsList.displayName = "@mantine/dates/YearsList";

exports.YearsList = YearsList;
//# sourceMappingURL=YearsList.js.map
