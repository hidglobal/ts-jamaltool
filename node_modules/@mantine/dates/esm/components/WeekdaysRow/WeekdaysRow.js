import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { getWeekdayNames } from './get-weekdays-names/get-weekdays-names.js';
import useStyles from './WeekdaysRow.styles.js';
import { useDatesContext } from '../DatesProvider/use-dates-context.js';

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
const defaultProps = {
  weekdayFormat: "dd",
  cellComponent: "th",
  size: "sm"
};
const WeekdaysRow = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("WeekdaysRow", defaultProps, props), {
    className,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent,
    __staticSelector,
    classNames,
    styles,
    unstyled,
    variant,
    size
  } = _a, others = __objRest(_a, [
    "className",
    "locale",
    "firstDayOfWeek",
    "weekdayFormat",
    "cellComponent",
    "__staticSelector",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "size"
  ]);
  const ctx = useDatesContext();
  const { classes, cx } = useStyles(null, {
    name: ["WeekdaysRow", __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size
  });
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => /* @__PURE__ */ React.createElement(CellComponent, {
    key: index,
    className: classes.weekday
  }, weekday));
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "tr",
    ref,
    className: cx(classes.weekdaysRow, className)
  }, others), weekdays);
});
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

export { WeekdaysRow };
//# sourceMappingURL=WeekdaysRow.js.map
