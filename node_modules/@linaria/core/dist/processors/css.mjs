// src/processors/css.ts
import { TaggedTemplateProcessor } from "@linaria/tags";
var CssProcessor = class extends TaggedTemplateProcessor {
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
export {
  CssProcessor as default
};
//# sourceMappingURL=css.mjs.map