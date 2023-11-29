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
var useStyles = createStyles((theme) => ({
  monthThead: {},
  monthRow: {},
  monthTbody: {},
  monthCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: rem(0.5)
    }
  },
  month: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    borderCollapse: "collapse",
    tableLayout: "fixed",
    "& *": {
      boxSizing: "border-box"
    }
  })
}));

export default useStyles;
//# sourceMappingURL=Month.styles.js.map
