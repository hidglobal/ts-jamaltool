/* eslint-disable class-methods-use-this */

import generator from '@babel/generator';
import getClassNameAndSlug from './utils/getClassNameAndSlug';
import hasMeta from './utils/hasMeta';
import { isCSSable } from './utils/toCSS';
import { validateParams } from './utils/validateParams';
export default class BaseProcessor {
  static SKIP = Symbol('skip');
  artifacts = [];
  dependencies = [];
  interpolations = [];
  constructor(params, tagSource, astService, location, replacer, displayName, isReferenced, idx, options, context) {
    this.tagSource = tagSource;
    this.astService = astService;
    this.location = location;
    this.replacer = replacer;
    this.displayName = displayName;
    this.isReferenced = isReferenced;
    this.idx = idx;
    this.options = options;
    this.context = context;
    validateParams(params, ['callee'], 'Unknown error: a callee param is not specified');
    const {
      className,
      slug
    } = getClassNameAndSlug(this.displayName, this.idx, this.options, this.context);
    this.className = className;
    this.slug = slug;
    [[, this.callee]] = params;
  }
  isValidValue(value) {
    return typeof value === 'function' || isCSSable(value) || hasMeta(value);
  }

  /**
   * Perform a replacement for the tag in evaluation time.
   * For example, `css` tag will be replaced with its className,
   * whereas `styled` tag will be replaced with an object with metadata.
   */

  tagSourceCode() {
    if (this.callee.type === 'Identifier') {
      return this.callee.name;
    }
    return generator(this.callee).code;
  }
  toString() {
    return this.tagSourceCode();
  }
}
//# sourceMappingURL=BaseProcessor.js.map