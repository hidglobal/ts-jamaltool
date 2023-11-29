import BaseProcessor from './BaseProcessor';
import templateProcessor from './utils/templateProcessor';
import { validateParams } from './utils/validateParams';
export default class TaggedTemplateProcessor extends BaseProcessor {
  #template;
  constructor(params, ...args) {
    // Should have at least two params and the first one should be a callee.
    validateParams(params, ['callee', '*', '...'], TaggedTemplateProcessor.SKIP);
    validateParams(params, ['callee', 'template'], 'Invalid usage of template tag');
    const [tag, [, template]] = params;
    super([tag], ...args);
    template.forEach(element => {
      if ('kind' in element) {
        this.dependencies.push(element);
      }
    });
    this.#template = template;
  }
  build(values) {
    if (this.artifacts.length > 0) {
      // FIXME: why it was called twice?
      throw new Error('Tag is already built');
    }
    const artifact = templateProcessor(this, this.#template, values, this.options.variableNameConfig);
    if (artifact) {
      this.artifacts.push(['css', artifact]);
    }
  }

  /**
   * It is called for each resolved expression in a template literal.
   * @param node
   * @param precedingCss
   * @param source
   * @param unit
   * @return chunk of CSS that should be added to extracted CSS
   */

  toString() {
    return `${super.toString()}\`…\``;
  }
}
//# sourceMappingURL=TaggedTemplateProcessor.js.map