'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

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
const sizes = {
  xs: core.rem(30),
  sm: core.rem(36),
  md: core.rem(42),
  lg: core.rem(48),
  xl: core.rem(54)
};
var useStyles = core.createStyles((theme, { radius, isStatic }, { size }) => {
  const colors = theme.fn.variant({ variant: "filled" });
  const lightColors = theme.fn.variant({ variant: "light" });
  return {
    day: __spreadProps(__spreadValues({
      width: core.getSize({ size, sizes }),
      height: core.getSize({ size, sizes }),
      fontSize: core.getSize({ size, sizes: theme.fontSizes }),
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: isStatic ? void 0 : "none",
      cursor: isStatic ? "default" : "pointer",
      borderRadius: theme.fn.radius(radius)
    }, isStatic ? null : theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })), {
      "&:active": isStatic ? void 0 : theme.activeStyles,
      "&[data-disabled]": __spreadProps(__spreadValues({
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: "not-allowed"
      }, theme.fn.hover({ backgroundColor: "transparent" })), {
        "&:active": {
          transform: "none"
        }
      }),
      "&[data-weekend]": {
        color: theme.colors.red[theme.fn.primaryShade()]
      },
      "&[data-outside]": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]
      },
      "&[data-in-range]": __spreadValues({
        backgroundColor: lightColors.background,
        borderRadius: 0
      }, isStatic ? null : theme.fn.hover({ backgroundColor: lightColors.hover })),
      "&[data-first-in-range]": {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm
      },
      "&[data-last-in-range]": {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm
      },
      "&[data-selected]": __spreadValues({
        color: colors.color,
        backgroundColor: colors.background
      }, isStatic ? null : theme.fn.hover({ backgroundColor: colors.hover })),
      "&[data-hidden]": {
        display: "none"
      }
    })
  };
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Day.styles.js.map
