import { createStyles } from '@mantine/core';

var useStyles = createStyles((theme) => ({
  controlsGroup: {
    display: "flex",
    "& [data-rich-text-editor-control]": {
      borderRadius: 0,
      "&:not(:last-of-type)": {
        borderRight: 0
      },
      "&:last-of-type": {
        borderTopRightRadius: theme.fn.radius(),
        borderBottomRightRadius: theme.fn.radius()
      },
      "&:first-of-type": {
        borderTopLeftRadius: theme.fn.radius(),
        borderBottomLeftRadius: theme.fn.radius()
      }
    }
  }
}));

export default useStyles;
//# sourceMappingURL=ControlsGroup.styles.js.map
