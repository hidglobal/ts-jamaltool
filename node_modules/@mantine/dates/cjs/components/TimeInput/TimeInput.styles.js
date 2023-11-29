'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme) => ({
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    appearance: "none",
    "&::-webkit-calendar-picker-indicator": {
      display: "none"
    },
    "&::-webkit-clear-button": {
      display: "none"
    },
    "&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-second-field": {
      paddingTop: 0,
      maxHeight: core.rem(30),
      display: "inline",
      "&:focus": {
        backgroundColor: theme.fn.variant({ variant: "filled" }).background,
        color: theme.white
      }
    }
  }
}));

exports.default = useStyles;
//# sourceMappingURL=TimeInput.styles.js.map
