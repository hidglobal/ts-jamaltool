'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles(() => ({
  yearsList: {
    borderCollapse: "collapse",
    borderWidth: 0
  },
  yearsListCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: core.rem(0.5)
    }
  },
  yearsListRow: {}
}));

exports.default = useStyles;
//# sourceMappingURL=YearsList.styles.js.map
