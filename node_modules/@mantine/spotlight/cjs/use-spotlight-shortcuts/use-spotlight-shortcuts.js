'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');

function getHotkeysPayload(shortcuts, onToggle) {
  if (shortcuts === null) {
    return [];
  }
  if (Array.isArray(shortcuts)) {
    return shortcuts.map((shortcut) => [shortcut, onToggle]);
  }
  return [[shortcuts, onToggle]];
}
function useSpotlightShortcuts(shortcuts, onToggle, tagsToIgnore, triggerOnContentEditable) {
  hooks.useHotkeys(getHotkeysPayload(shortcuts, onToggle), tagsToIgnore, triggerOnContentEditable);
}

exports.getHotkeysPayload = getHotkeysPayload;
exports.useSpotlightShortcuts = useSpotlightShortcuts;
//# sourceMappingURL=use-spotlight-shortcuts.js.map
