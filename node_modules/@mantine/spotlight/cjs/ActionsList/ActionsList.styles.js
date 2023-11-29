'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme) => ({
  nothingFound: {},
  actions: {
    padding: `calc(${theme.spacing.xs} / 2)`
  },
  actionsGroup: {
    textTransform: "uppercase",
    fontSize: theme.spacing.xs,
    fontWeight: 700,
    padding: `${core.rem(10)} ${core.rem(12)}`,
    paddingBottom: 0,
    paddingTop: theme.spacing.md
  }
}));

exports.default = useStyles;
//# sourceMappingURL=ActionsList.styles.js.map
