"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/processors/css.ts
var css_exports = {};
__export(css_exports, {
  default: () => CssProcessor
});
module.exports = __toCommonJS(css_exports);
var import_tags = require("@linaria/tags");
var CssProcessor = class extends import_tags.TaggedTemplateProcessor {
  addInterpolation(node, precedingCss, source) {
    throw new Error(
      `css tag cannot handle '${source}' as an interpolated value`
    );
  }
  doEvaltimeReplacement() {
    this.replacer(this.value, false);
  }
  doRuntimeReplacement() {
    this.replacer(this.astService.stringLiteral(this.className), false);
  }
  extractRules(valueCache, cssText, loc) {
    const rules = {};
    const selector = `.${this.className}`;
    rules[selector] = {
      cssText,
      className: this.className,
      displayName: this.displayName,
      start: (loc == null ? void 0 : loc.start) ?? null
    };
    return rules;
  }
  get asSelector() {
    return this.className;
  }
  get value() {
    return this.astService.stringLiteral(this.className);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=css.js.map