import { createStyles, rem } from '@mantine/core';

var useStyles = createStyles(() => ({
  monthsList: {
    borderCollapse: "collapse",
    borderWidth: 0,
    cursor: "pointer"
  },
  monthsListCell: {
    padding: 0,
    "&[data-with-spacing]": {
      padding: rem(0.5)
    }
  },
  monthsListRow: {}
}));

export default useStyles;
//# sourceMappingURL=MonthsList.styles.js.map
