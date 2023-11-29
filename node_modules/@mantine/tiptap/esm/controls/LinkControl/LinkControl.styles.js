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
    linkEditor: {
      display: "flex"
    },
    linkEditorInput: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0
    },
    linkEditorExternalControl: {
      backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : theme.white,
      border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
      height: rem(24),
      width: rem(24),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: theme.fn.radius(),
      "&[data-active]": __spreadValues({
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.color
      }, theme.fn.hover({ background: colors.hover }))
    },
    linkEditorSave: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }
  };
});

export default useStyles;
//# sourceMappingURL=LinkControl.styles.js.map
