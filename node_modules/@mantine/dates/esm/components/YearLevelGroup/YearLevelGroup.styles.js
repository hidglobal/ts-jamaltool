import { createStyles, getSize } from '@mantine/core';

var useStyles = createStyles((theme, _, { size }) => ({
  yearLevelGroup: {
    display: "flex",
    "& [data-year-level]:not(:last-of-type)": {
      marginRight: getSize({ size, sizes: theme.spacing })
    }
  }
}));

export default useStyles;
//# sourceMappingURL=YearLevelGroup.styles.js.map
