'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var Day_styles = require('../Day/Day.styles.js');

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
var useStyles = core.createStyles((theme, _, { size }) => {
  const controlSize = core.getSize({ size, sizes: Day_styles.sizes });
  return {
    calendarHeaderControlIcon: {},
    calendarHeader: {
      display: "flex",
      maxWidth: `calc(${controlSize} * 7 + ${core.rem(7)})`
    },
    calendarHeaderControl: __spreadProps(__spreadValues({
      width: controlSize,
      height: controlSize,
      borderRadius: theme.fn.radius(),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none"
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })), {
      "&:active": theme.activeStyles,
      "&[data-disabled]": __spreadProps(__spreadValues({
        opacity: 0.2,
        cursor: "not-allowed"
      }, theme.fn.hover({ backgroundColor: "transparent" })), {
        "&:active": {
          transform: "none"
        }
      })
    }),
    calendarHeaderLevel: __spreadProps(__spreadValues({
      height: controlSize,
      borderRadius: theme.fn.radius(),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      flex: 1,
      fontSize: core.getSize({ size, sizes: theme.fontSizes }),
      fontWeight: 500,
      textTransform: "capitalize"
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })), {
      "&:active": theme.activeStyles,
      "&[data-static]": __spreadProps(__spreadValues({
        cursor: "default",
        userSelect: "unset"
      }, theme.fn.hover({ backgroundColor: "transparent" })), {
        "&:active": {
          transform: "none"
        }
      })
    })
  };
});

exports.default = useStyles;
//# sourceMappingURL=CalendarHeader.styles.js.map
