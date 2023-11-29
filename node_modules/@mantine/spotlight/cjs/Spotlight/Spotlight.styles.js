'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme) => ({
  content: {
    position: "relative",
    overflow: "hidden"
  },
  searchInput: {
    border: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "&, &:focus-within": {
      borderBottom: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
    }
  }
}));

exports.default = useStyles;
//# sourceMappingURL=Spotlight.styles.js.map
