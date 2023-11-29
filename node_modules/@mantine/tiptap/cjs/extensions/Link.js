'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TipTapLink = require('@tiptap/extension-link');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var TipTapLink__default = /*#__PURE__*/_interopDefaultLegacy(TipTapLink);

const Link = TipTapLink__default.extend({
  addKeyboardShortcuts: () => ({
    "Mod-k": () => {
      window.dispatchEvent(new Event("edit-link"));
      return true;
    }
  })
}).configure({ openOnClick: false });

exports.Link = Link;
//# sourceMappingURL=Link.js.map
