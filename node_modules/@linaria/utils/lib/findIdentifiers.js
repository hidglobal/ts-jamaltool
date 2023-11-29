"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIdentifiers;
exports.nonType = nonType;
var _getScope = require("./getScope");
function isInVoid(path) {
  var _path$parentPath$isUn, _path$parentPath;
  return (_path$parentPath$isUn = (_path$parentPath = path.parentPath) === null || _path$parentPath === void 0 ? void 0 : _path$parentPath.isUnaryExpression({
    operator: 'void'
  })) !== null && _path$parentPath$isUn !== void 0 ? _path$parentPath$isUn : false;
}
function isBindingIdentifier(path) {
  return path.isBindingIdentifier() && !isInVoid(path);
}
function isReferencedIdentifier(path) {
  return path.isReferencedIdentifier() || isInVoid(path);
}

// For some reasons, `isBindingIdentifier` returns true for identifiers inside `void` expressions.
const checkers = {
  binding: ex => isBindingIdentifier(ex),
  both: ex => isBindingIdentifier(ex) || isReferencedIdentifier(ex),
  referenced: ex => isReferencedIdentifier(ex)
};
function nonType(path) {
  return !path.find(p => p.isTSTypeReference() || p.isTSTypeQuery() || p.isFlowType() || p.isFlowDeclaration() || p.isTSInterfaceDeclaration());
}
function findIdentifiers(expressions, type = 'referenced') {
  const identifiers = [];
  expressions.forEach(ex => {
    const emit = path => {
      if (!path.node || path.removed || !checkers[type](path)) {
        return;
      }
      if (!nonType(path)) {
        // If skip in TSTypeAnnotation visitor doesn't work
        return;
      }

      // TODO: Is there a better way to check that it's a local variable?

      const binding = (0, _getScope.getScope)(path).getBinding(path.node.name);
      if (!binding) {
        return;
      }
      if (type === 'referenced' && ex.isAncestor(binding.path)) {
        // This identifier is declared inside the expression. We don't need it.
        return;
      }
      identifiers.push(path);
    };
    if (ex.isIdentifier() || ex.isJSXIdentifier()) {
      emit(ex);
    } else {
      ex.traverse({
        TSTypeAnnotation(path) {
          // We ignore identifiers in type annotations
          // It will produce broken TS code, but we don't care
          path.skip();
        },
        Identifier(path) {
          emit(path);
        },
        JSXIdentifier(path) {
          emit(path);
        }
      });
    }
  });
  return identifiers;
}
//# sourceMappingURL=findIdentifiers.js.map