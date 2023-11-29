import { createStyles, rem } from '@mantine/core';

var useStyles = createStyles(() => ({
  yearsList: {
    borderCollapse: "collapse",
    borderWidth: 0
  },
  yearsListCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: rem(0.5)
    }
  },
  yearsListRow: {}
}));

export default useStyles;
//# sourceMappingURL=YearsList.styles.js.map
