'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { sticky, stickyOffset }) => ({
  toolbar: {
    position: sticky ? "sticky" : "static",
    top: sticky ? core.rem(stickyOffset) : void 0,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    borderTopRightRadius: theme.fn.radius(),
    borderTopLeftRadius: theme.fn.radius(),
    borderBottom: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`
  }
}));

exports.default = useStyles;
//# sourceMappingURL=Toolbar.styles.js.map
