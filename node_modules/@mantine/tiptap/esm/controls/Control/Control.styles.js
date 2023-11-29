import { createStyles, rem } from '@mantine/core';

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
var useStyles = createStyles((theme) => {
  const colors = theme.fn.variant({ variant: "light" });
  return {
    control: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      minWidth: rem(26),
      height: rem(26),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
      borderRadius: theme.fn.radius(),
      cursor: "default",
      "&[data-interactive]": __spreadValues({
        cursor: "pointer"
      }, theme.fn.hover({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
      })),
      "&[data-active]": {
        backgroundColor: colors.background,
        color: colors.color,
        "&:hover": __spreadValues({}, theme.fn.hover({ backgroundColor: colors.hover }))
      }
    }
  };
});

export default useStyles;
//# sourceMappingURL=Control.styles.js.map
