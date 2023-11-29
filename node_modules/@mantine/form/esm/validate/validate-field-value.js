import { validateValues } from './validate-values.js';

function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues(rules, values);
  const pathInError = Object.keys(results.errors).find((errorKey) => path.split(".").every((pathPart, i) => pathPart === errorKey.split(".")[i]));
  return { hasError: !!pathInError, error: pathInError ? results.errors[pathInError] : null };
}

export { validateFieldValue };
//# sourceMappingURL=validate-field-value.js.map
