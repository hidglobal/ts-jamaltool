'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles(() => ({
  monthsList: {
    borderCollapse: "collapse",
    borderWidth: 0,
    cursor: "pointer"
  },
  monthsListCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: core.rem(0.5)
    }
  },
  monthsListRow: {}
}));

exports.default = useStyles;
//# sourceMappingURL=MonthsList.styles.js.map
