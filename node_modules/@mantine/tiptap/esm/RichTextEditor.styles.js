import { createStyles, rem } from '@mantine/core';

var useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    borderRadius: theme.fn.radius()
  }
}));

export default useStyles;
//# sourceMappingURL=RichTextEditor.styles.js.map
