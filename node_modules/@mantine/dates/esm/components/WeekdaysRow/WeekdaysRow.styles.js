import { createStyles, getSize } from '@mantine/core';

var useStyles = createStyles((theme, _, { size }) => ({
  weekdaysRow: {},
  weekday: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[5],
    fontWeight: 400,
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    textTransform: "capitalize",
    paddingBottom: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`
  }
}));

export default useStyles;
//# sourceMappingURL=WeekdaysRow.styles.js.map
