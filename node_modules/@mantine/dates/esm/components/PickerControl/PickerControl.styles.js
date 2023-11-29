import { createStyles, getSize, rem } from '@mantine/core';
import { sizes } from '../Day/Day.styles.js';

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
var useStyles = createStyles((theme, _, { size }) => {
  const colors = theme.fn.variant({ variant: "filled" });
  const lightColors = theme.fn.variant({ variant: "light" });
  return {
    pickerControl: __spreadProps(__spreadValues({
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      height: getSize({ size, sizes }),
      width: `calc((${getSize({ size, sizes })} * 7) / 3 + ${rem(1.5)})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      borderRadius: theme.fn.radius()
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    })), {
      "&:active": theme.activeStyles,
      "&[data-in-range]": __spreadValues({
        backgroundColor: lightColors.background,
        borderRadius: 0
      }, theme.fn.hover({ backgroundColor: lightColors.hover })),
      "&[data-first-in-range]": {
        borderRadius: 0,
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm
      },
      "&[data-last-in-range]": {
        borderRadius: 0,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm
      },
      "&[data-last-in-range][data-first-in-range]": {
        borderRadius: theme.radius.sm
      },
      "&[data-selected]": __spreadValues({
        color: colors.color,
        backgroundColor: colors.background
      }, theme.fn.hover({ backgroundColor: colors.hover })),
      "&[data-disabled]": __spreadProps(__spreadValues({
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: "not-allowed"
      }, theme.fn.hover({ backgroundColor: "transparent" })), {
        "&:active": {
          transform: "none"
        }
      })
    })
  };
});

export default useStyles;
//# sourceMappingURL=PickerControl.styles.js.map
