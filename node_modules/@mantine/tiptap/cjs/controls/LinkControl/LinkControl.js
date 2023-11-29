'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var ControlBase = require('../ControlBase/ControlBase.js');
var RichTextEditor_context = require('../../RichTextEditor.context.js');
var LinkControl_styles = require('./LinkControl.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LinkIcon = (_a) => {
  var _b = _a, { size } = _b, others = __objRest(_b, ["size"]);
  return /* @__PURE__ */ React__default.createElement(iconsReact.IconLink, __spreadValues({
    size,
    stroke: 1.5
  }, others));
};
const defaultProps = {};
const LinkControl = React.forwardRef((props, ref) => {
  const _a = core.useComponentDefaultProps("RichTextEditorLinkControl", defaultProps, props), { icon, popoverProps, disableTooltips } = _a, others = __objRest(_a, ["icon", "popoverProps", "disableTooltips"]);
  const { editor, labels, classNames, styles, unstyled, variant } = RichTextEditor_context.useRichTextEditorContext();
  const { classes } = LinkControl_styles['default'](null, {
    name: "RichTextEditor",
    classNames,
    styles,
    unstyled,
    variant
  });
  const [url, setUrl] = hooks.useInputState("");
  const [external, setExternal] = React.useState(false);
  const [opened, { open, close }] = hooks.useDisclosure(false);
  const handleOpen = () => {
    open();
    const linkData = editor == null ? void 0 : editor.getAttributes("link");
    setUrl((linkData == null ? void 0 : linkData.href) || "");
    setExternal((linkData == null ? void 0 : linkData.target) === "_blank");
  };
  const handleClose = () => {
    close();
    setUrl("");
    setExternal(false);
  };
  const setLink = () => {
    handleClose();
    url === "" ? editor.chain().focus().extendMarkRange("link").unsetLink().run() : editor.chain().focus().extendMarkRange("link").setLink({ href: url, target: external ? "_blank" : null }).run();
  };
  const handleInputKeydown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setLink();
    }
  };
  hooks.useWindowEvent("edit-link", handleOpen, false);
  return /* @__PURE__ */ React__default.createElement(core.Popover, __spreadValues({
    trapFocus: true,
    shadow: "md",
    withinPortal: true,
    opened,
    onClose: handleClose,
    offset: -44,
    zIndex: 1e4,
    unstyled
  }, popoverProps), /* @__PURE__ */ React__default.createElement(core.Popover.Target, null, /* @__PURE__ */ React__default.createElement(ControlBase.ControlBase, __spreadProps(__spreadValues({
    icon: icon || LinkIcon,
    "aria-label": labels.linkControlLabel,
    title: labels.linkControlLabel,
    onClick: handleOpen,
    active: editor == null ? void 0 : editor.isActive("link"),
    unstyled
  }, others), {
    ref
  }))), /* @__PURE__ */ React__default.createElement(core.Popover.Dropdown, {
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    })
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.linkEditor
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: labels.linkEditorInputPlaceholder,
    "aria-label": labels.linkEditorInputLabel,
    type: "url",
    value: url,
    onChange: setUrl,
    classNames: { input: classes.linkEditorInput },
    onKeyDown: handleInputKeydown,
    unstyled,
    rightSection: /* @__PURE__ */ React__default.createElement(core.Tooltip, {
      label: external ? labels.linkEditorExternalLink : labels.linkEditorInternalLink,
      events: { hover: true, focus: true, touch: true },
      withinPortal: true,
      withArrow: true,
      disabled: disableTooltips,
      unstyled,
      zIndex: 1e4
    }, /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
      onClick: () => setExternal((e) => !e),
      "data-active": external || void 0,
      className: classes.linkEditorExternalControl,
      unstyled
    }, /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, {
      size: core.rem(14),
      stroke: 1.5
    })))
  }), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "default",
    onClick: setLink,
    className: classes.linkEditorSave,
    unstyled
  }, labels.linkEditorSave))));
});

exports.LinkControl = LinkControl;
//# sourceMappingURL=LinkControl.js.map
