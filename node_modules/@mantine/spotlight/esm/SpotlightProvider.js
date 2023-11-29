import React, { useRef } from 'react';
import { useUncontrolled, useDisclosure } from '@mantine/hooks';
import { useSpotlightEvents } from './events.js';
import { SpotlightContext } from './Spotlight.context.js';
import { Spotlight } from './Spotlight/Spotlight.js';
import { useActionsState } from './use-actions-state/use-actions-state.js';
import { useSpotlightShortcuts } from './use-spotlight-shortcuts/use-spotlight-shortcuts.js';

var __defProp = Object.defineProperty;
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
function SpotlightProvider(_a) {
  var _b = _a, {
    actions,
    children,
    shortcut = "mod + K",
    query,
    onSpotlightClose,
    onSpotlightOpen,
    onQueryChange,
    onActionsChange,
    cleanQueryOnClose = true,
    transitionProps = { duration: 150 },
    disabled = false,
    tagsToIgnore = ["INPUT", "TEXTAREA", "SELECT"],
    triggerOnContentEditable = false
  } = _b, others = __objRest(_b, [
    "actions",
    "children",
    "shortcut",
    "query",
    "onSpotlightClose",
    "onSpotlightOpen",
    "onQueryChange",
    "onActionsChange",
    "cleanQueryOnClose",
    "transitionProps",
    "disabled",
    "tagsToIgnore",
    "triggerOnContentEditable"
  ]);
  const timeoutRef = useRef(-1);
  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: "",
    finalValue: "",
    onChange: onQueryChange
  });
  const [_actions, { registerActions, removeActions, triggerAction }] = useActionsState({
    actions,
    onActionsChange
  });
  const handleQueryChange = (value) => {
    setQuery(value);
    onQueryChange == null ? void 0 : onQueryChange(value);
  };
  const [opened, { open, close, toggle }] = useDisclosure(false, {
    onClose: () => {
      onSpotlightClose == null ? void 0 : onSpotlightClose();
      if (cleanQueryOnClose) {
        timeoutRef.current = window.setTimeout(() => {
          handleQueryChange("");
        }, transitionProps.duration || 150);
      }
    },
    onOpen: () => {
      onSpotlightOpen == null ? void 0 : onSpotlightOpen();
      window.clearTimeout(timeoutRef.current);
    }
  });
  const ctx = {
    openSpotlight: open,
    closeSpotlight: close,
    toggleSpotlight: toggle,
    registerActions,
    removeActions,
    triggerAction,
    opened,
    actions: _actions,
    query: _query
  };
  useSpotlightShortcuts(shortcut, open, tagsToIgnore, triggerOnContentEditable);
  useSpotlightEvents({ open, close, toggle, registerActions, removeActions, triggerAction });
  return /* @__PURE__ */ React.createElement(SpotlightContext.Provider, {
    value: ctx
  }, !disabled && /* @__PURE__ */ React.createElement(Spotlight, __spreadValues({
    actions: _actions,
    onClose: close,
    opened,
    query: _query,
    onQueryChange: handleQueryChange,
    transitionProps
  }, others)), children);
}
SpotlightProvider.displayName = "@mantine/spotlight/SpotlightProvider";

export { SpotlightProvider };
//# sourceMappingURL=SpotlightProvider.js.map
