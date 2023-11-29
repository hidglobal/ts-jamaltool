'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, _, { size }) => ({
  yearLevelGroup: {
    display: "flex",
    "& [data-year-level]:not(:last-of-type)": {
      marginRight: core.getSize({ size, sizes: theme.spacing })
    }
  }
}));

exports.default = useStyles;
//# sourceMappingURL=YearLevelGroup.styles.js.map
