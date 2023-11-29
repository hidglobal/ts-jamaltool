// ParamMapping maps each ParamName to its corresponding Param type.

// GetParamByName returns the Param type based on the input type T.

// If T is none of the above, return never.

// MapParams iteratively maps the input ParamConstraints to their corresponding Param types.

// If TNames is an empty tuple, return the result tuple.

export function isValidParams(params, constraints) {
  for (let i = 0; i < constraints.length; i++) {
    const constraint = constraints[i];
    if (constraint === '...') {
      return true;
    }
    if (constraint === '*') {
      if (params[i] === undefined) {
        return false;
      }
    } else if (Array.isArray(constraint)) {
      if (constraint.every(c => c !== params[i]?.[0])) {
        return false;
      }
    } else if (constraint !== params[i]?.[0]) {
      return false;
    }
  }
  return true;
}
export function validateParams(params, constraints, messageOrError) {
  if (!isValidParams(params, constraints)) {
    if (typeof messageOrError === 'string') {
      throw new Error(messageOrError);
    }
    throw messageOrError;
  }
}
//# sourceMappingURL=validateParams.js.map