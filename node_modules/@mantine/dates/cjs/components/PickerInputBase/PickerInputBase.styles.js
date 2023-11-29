'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles(() => ({
  placeholder: {},
  input: {
    cursor: "pointer",
    lineHeight: "unset",
    "&[data-read-only]": {
      cursor: "default"
    }
  }
}));

exports.default = useStyles;
//# sourceMappingURL=PickerInputBase.styles.js.map
