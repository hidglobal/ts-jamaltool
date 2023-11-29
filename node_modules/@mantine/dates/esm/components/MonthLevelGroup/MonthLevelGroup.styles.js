import { createStyles, getSize } from '@mantine/core';

var useStyles = createStyles((theme, _, { size }) => ({
  monthLevelGroup: {
    display: "flex",
    "& [data-month-level]:not(:last-of-type)": {
      marginRight: getSize({ size, sizes: theme.spacing })
    }
  }
}));

export default useStyles;
//# sourceMappingURL=MonthLevelGroup.styles.js.map
