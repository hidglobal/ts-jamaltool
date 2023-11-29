"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidParams = isValidParams;
exports.validateParams = validateParams;
// ParamMapping maps each ParamName to its corresponding Param type.

// GetParamByName returns the Param type based on the input type T.

// If T is none of the above, return never.

// MapParams iteratively maps the input ParamConstraints to their corresponding Param types.

// If TNames is an empty tuple, return the result tuple.

function isValidParams(params, constraints) {
  for (let i = 0; i < constraints.length; i++) {
    var _params$i2;
    const constraint = constraints[i];
    if (constraint === '...') {
      return true;
    }
    if (constraint === '*') {
      if (params[i] === undefined) {
        return false;
      }
    } else if (Array.isArray(constraint)) {
      if (constraint.every(c => {
        var _params$i;
        return c !== ((_params$i = params[i]) === null || _params$i === void 0 ? void 0 : _params$i[0]);
      })) {
        return false;
      }
    } else if (constraint !== ((_params$i2 = params[i]) === null || _params$i2 === void 0 ? void 0 : _params$i2[0])) {
      return false;
    }
  }
  return true;
}
function validateParams(params, constraints, messageOrError) {
  if (!isValidParams(params, constraints)) {
    if (typeof messageOrError === 'string') {
      throw new Error(messageOrError);
    }
    throw messageOrError;
  }
}
//# sourceMappingURL=validateParams.js.map