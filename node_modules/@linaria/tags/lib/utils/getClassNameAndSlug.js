"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassNameAndSlug;
var _path = require("path");
var _logger = require("@linaria/logger");
var _utils = require("@linaria/utils");
var _buildSlug = require("./buildSlug");
var _toValidCSSIdentifier = _interopRequireDefault(require("./toValidCSSIdentifier"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getClassNameAndSlug(displayName, idx, options, context) {
  var _context$filename;
  const relativeFilename = context.root && context.filename ? (0, _path.relative)(context.root, context.filename) : (_context$filename = context.filename) !== null && _context$filename !== void 0 ? _context$filename : 'unknown';
  // Custom properties need to start with a letter, so we prefix the slug
  // Also use append the index of the class to the filename for uniqueness in the file
  const slug = (0, _toValidCSSIdentifier.default)(`${displayName.charAt(0).toLowerCase()}${(0, _utils.slugify)(`${relativeFilename}:${idx}`)}`);

  // Collect some useful replacement patterns from the filename
  // Available variables for the square brackets used in `classNameSlug` options
  const ext = (0, _path.extname)(relativeFilename);
  const slugVars = {
    hash: slug,
    title: displayName,
    file: relativeFilename,
    ext,
    name: (0, _path.basename)(relativeFilename, ext),
    dir: (0, _path.dirname)(relativeFilename).split(_path.sep).pop()
  };
  let className = options.displayName ? `${(0, _toValidCSSIdentifier.default)(displayName)}_${slug}` : slug;

  // The className can be defined by the user either as fn or a string
  if (typeof options.classNameSlug === 'function') {
    try {
      className = (0, _toValidCSSIdentifier.default)(options.classNameSlug(slug, displayName, slugVars));
    } catch {
      throw new Error('classNameSlug option must return a string');
    }
  }
  if (typeof options.classNameSlug === 'string') {
    className = (0, _toValidCSSIdentifier.default)((0, _buildSlug.buildSlug)(options.classNameSlug, slugVars));
  }
  (0, _logger.debug)('template-parse:generated-meta', `slug: ${slug}, displayName: ${displayName}, className: ${className}`);
  return {
    className,
    slug
  };
}
//# sourceMappingURL=getClassNameAndSlug.js.map