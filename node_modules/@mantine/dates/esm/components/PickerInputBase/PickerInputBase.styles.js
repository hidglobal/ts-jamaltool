import { createStyles } from '@mantine/core';

var useStyles = createStyles(() => ({
  placeholder: {},
  input: {
    cursor: "pointer",
    lineHeight: "unset",
    "&[data-read-only]": {
      cursor: "default"
    }
  }
}));

export default useStyles;
//# sourceMappingURL=PickerInputBase.styles.js.map
