"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JSXElementsRemover;
var _core = require("@babel/core");
var _getScope = require("../getScope");
var _scopeHelpers = require("../scopeHelpers");
function getFunctionName(path) {
  if (path.isClassMethod() && _core.types.isIdentifier(path.node.key)) {
    return path.node.key.name;
  }
  return null;
}
function JSXElementsRemover(path) {
  // JSX can be safely replaced with null because it is unnecessary for styles
  const nullLiteral = _core.types.nullLiteral();

  // We can do even more
  // If that JSX is a result of a function, we can replace the function body.
  const functionScope = (0, _getScope.getScope)(path).getFunctionParent();
  const scopePath = functionScope === null || functionScope === void 0 ? void 0 : functionScope.path;
  if (scopePath !== null && scopePath !== void 0 && scopePath.isFunction()) {
    const emptyBody = _core.types.blockStatement([_core.types.returnStatement(nullLiteral)]);

    // Is it not just a function, but a method `render`?
    if (getFunctionName(scopePath) === 'render') {
      const decl = scopePath.findParent(p => p.isClassDeclaration());

      // Replace the whole component
      if (decl !== null && decl !== void 0 && decl.isClassDeclaration()) {
        (0, _scopeHelpers.mutate)(decl, p => {
          p.replaceWith(_core.types.functionDeclaration(decl.node.id, [], emptyBody));
        });
        return;
      }
    }
    const body = scopePath.get('body');
    if (Array.isArray(body)) {
      throw new Error("A body of a function is expected to be a single element but an array was returned. It's possible if JS syntax has been changed since that code was written.");
    }
    const node = {
      ...scopePath.node,
      body: emptyBody,
      params: []
    };
    (0, _scopeHelpers.mutate)(scopePath, p => {
      p.replaceWith(node);
    });
  } else {
    (0, _scopeHelpers.mutate)(path, p => {
      p.replaceWith(nullLiteral);
    });
  }
}
//# sourceMappingURL=JSXElementsRemover.js.map