import React, { useState } from 'react';
import { getDefaultZIndex, useComponentDefaultProps, Modal, TextInput, ScrollArea } from '@mantine/core';
import { getGroupedOptions } from '@mantine/utils';
import { useDidUpdate } from '@mantine/hooks';
import { DefaultAction } from '../DefaultAction/DefaultAction.js';
import { ActionsList } from '../ActionsList/ActionsList.js';
import { filterActions } from './filter-actions/filter-actions.js';
import useStyles from './Spotlight.styles.js';

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
function SpotlightScrollArea(props) {
  return /* @__PURE__ */ React.createElement(ScrollArea.Autosize, __spreadValues({
    mah: "calc(100vh - 18rem)"
  }, props));
}
const defaultProps = {
  closeOnActionTrigger: true,
  highlightQuery: false,
  size: 600,
  yOffset: 120,
  filter: filterActions,
  limit: 10,
  actionComponent: DefaultAction,
  scrollAreaComponent: SpotlightScrollArea,
  actionsWrapperComponent: "div",
  zIndex: getDefaultZIndex("max"),
  overlayProps: { opacity: 0.2, blur: 7 }
};
function Spotlight(props) {
  const _a = useComponentDefaultProps("Spotlight", defaultProps, props), {
    query,
    onQueryChange,
    actions,
    onClose,
    opened,
    classNames,
    styles,
    closeOnActionTrigger,
    highlightQuery,
    highlightColor,
    className,
    searchPlaceholder,
    searchIcon,
    filter,
    nothingFoundMessage,
    limit,
    actionComponent,
    actionsWrapperComponent: ActionsWrapper,
    scrollAreaComponent: ScrollAreaComponent,
    searchInputProps,
    variant,
    target,
    radius
  } = _a, others = __objRest(_a, [
    "query",
    "onQueryChange",
    "actions",
    "onClose",
    "opened",
    "classNames",
    "styles",
    "closeOnActionTrigger",
    "highlightQuery",
    "highlightColor",
    "className",
    "searchPlaceholder",
    "searchIcon",
    "filter",
    "nothingFoundMessage",
    "limit",
    "actionComponent",
    "actionsWrapperComponent",
    "scrollAreaComponent",
    "searchInputProps",
    "variant",
    "target",
    "radius"
  ]);
  const [hovered, setHovered] = useState(-1);
  const [IMEOpen, setIMEOpen] = useState(false);
  const { classes, cx } = useStyles(null, { name: "Spotlight", classNames, styles, variant });
  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };
  const filteredActions = filter(query, actions).slice(0, limit);
  const groupedWithLabels = getGroupedOptions(filteredActions).items;
  const groupedActions = groupedWithLabels.map((item) => item.type === "item" ? item.item : void 0).filter((item) => item);
  useDidUpdate(() => {
    if (groupedActions.length - 1 < hovered) {
      setHovered(groupedActions.length - 1);
    }
  }, [groupedActions.length]);
  const handleInputKeyDown = (event) => {
    var _a2, _b;
    if (IMEOpen) {
      return;
    }
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        setHovered((current) => current < groupedActions.length - 1 ? current + 1 : 0);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        setHovered((current) => current > 0 ? current - 1 : groupedActions.length - 1);
        break;
      }
      case "Enter": {
        event.preventDefault();
        const action = groupedActions[hovered];
        (_a2 = action == null ? void 0 : action.onTrigger) == null ? void 0 : _a2.call(action, action);
        if (((_b = action == null ? void 0 : action.closeOnTrigger) != null ? _b : closeOnActionTrigger) && (action == null ? void 0 : action.onTrigger)) {
          handleClose();
        }
        break;
      }
      case "Escape": {
        event.preventDefault();
        handleClose();
      }
    }
  };
  const handleInputChange = (event) => {
    onQueryChange(event.currentTarget.value);
    if (hovered === -1) {
      setHovered(0);
    }
  };
  return /* @__PURE__ */ React.createElement(Modal, __spreadValues({
    opened,
    onClose: handleClose,
    padding: 0,
    radius,
    scrollAreaComponent: Modal.NativeScrollArea,
    classNames: __spreadProps(__spreadValues({}, classNames), {
      content: cx(classes.content, classNames == null ? void 0 : classNames.content)
    }),
    styles,
    withCloseButton: false
  }, others), /* @__PURE__ */ React.createElement(TextInput, __spreadProps(__spreadValues({
    size: "lg"
  }, searchInputProps), {
    value: query,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onCompositionStart: () => setIMEOpen(true),
    onCompositionEnd: () => setIMEOpen(false),
    classNames: { input: classes.searchInput },
    placeholder: searchPlaceholder,
    icon: searchIcon
  })), /* @__PURE__ */ React.createElement(ActionsWrapper, null, /* @__PURE__ */ React.createElement(ScrollAreaComponent, null, /* @__PURE__ */ React.createElement(ActionsList, {
    highlightQuery,
    highlightColor,
    actions: groupedWithLabels,
    actionComponent,
    hovered,
    query,
    nothingFoundMessage,
    onActionTrigger: (action) => {
      var _a2;
      action.onTrigger(action);
      ((_a2 = action.closeOnTrigger) != null ? _a2 : closeOnActionTrigger) && handleClose();
    },
    styles,
    classNames,
    radius,
    variant
  }))));
}
Spotlight.displayName = "@mantine/spotlight/Spotlight";

export { Spotlight };
//# sourceMappingURL=Spotlight.js.map
