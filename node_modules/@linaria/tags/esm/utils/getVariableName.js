export function getVariableName(varId, rawVariableName) {
  switch (rawVariableName) {
    case 'raw':
      return varId;
    case 'dashes':
      return `--${varId}`;
    case 'var':
    default:
      return `var(--${varId})`;
  }
}
//# sourceMappingURL=getVariableName.js.map