'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, _, { size }) => ({
  monthLevelGroup: {
    display: "flex",
    "& [data-month-level]:not(:last-of-type)": {
      marginRight: core.getSize({ size, sizes: theme.spacing })
    }
  }
}));

exports.default = useStyles;
//# sourceMappingURL=MonthLevelGroup.styles.js.map
