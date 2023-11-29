'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme) => ({
  root: {
    position: "relative",
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    borderRadius: theme.fn.radius()
  }
}));

exports.default = useStyles;
//# sourceMappingURL=RichTextEditor.styles.js.map
