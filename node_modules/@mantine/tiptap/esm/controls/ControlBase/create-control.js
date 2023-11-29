import React, { forwardRef } from 'react';
import { useRichTextEditorContext } from '../../RichTextEditor.context.js';
import { ControlBase } from './ControlBase.js';

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
function createControl({ label, isActive, operation, icon }) {
  return forwardRef((props, ref) => {
    const { editor, labels } = useRichTextEditorContext();
    const _label = labels[label];
    return /* @__PURE__ */ React.createElement(ControlBase, __spreadValues({
      "aria-label": _label,
      title: _label,
      active: (isActive == null ? void 0 : isActive.name) ? editor == null ? void 0 : editor.isActive(isActive.name, isActive.attributes) : false,
      ref,
      onClick: () => editor == null ? void 0 : editor.chain().focus()[operation.name](operation.attributes).run(),
      icon
    }, props));
  });
}

export { createControl };
//# sourceMappingURL=create-control.js.map
