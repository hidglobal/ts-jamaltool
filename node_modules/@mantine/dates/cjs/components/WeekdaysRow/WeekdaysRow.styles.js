'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, _, { size }) => ({
  weekdaysRow: {},
  weekday: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[5],
    fontWeight: 400,
    fontSize: core.getSize({ size, sizes: theme.fontSizes }),
    textTransform: "capitalize",
    paddingBottom: `calc(${core.getSize({ size, sizes: theme.spacing })} / 2)`
  }
}));

exports.default = useStyles;
//# sourceMappingURL=WeekdaysRow.styles.js.map
