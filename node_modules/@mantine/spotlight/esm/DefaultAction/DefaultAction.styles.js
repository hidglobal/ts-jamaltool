import { createStyles, rem } from '@mantine/core';

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
var useStyles = createStyles((theme, { radius }) => ({
  action: __spreadProps(__spreadValues({
    position: "relative",
    display: "block",
    width: "100%",
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.fn.radius(radius)
  }, theme.fn.hover({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
  })), {
    "&[data-hovered]": __spreadValues({
      backgroundColor: theme.fn.primaryColor(),
      color: theme.white
    }, theme.fn.hover({
      backgroundColor: theme.fn.primaryColor()
    }))
  }),
  actionDescription: {
    color: theme.fn.dimmed(),
    "&[data-hovered]": {
      color: theme.white,
      opacity: 0.7
    }
  },
  actionIcon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
    "&[data-hovered]": {
      color: theme.white,
      opacity: 0.7
    }
  },
  actionBody: {},
  actionHighlight: {
    "& [data-highlight]": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black
    }
  }
}));

export default useStyles;
//# sourceMappingURL=DefaultAction.styles.js.map
