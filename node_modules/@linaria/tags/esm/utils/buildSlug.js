const PLACEHOLDER = /\[(.*?)]/g;
const isValidArgName = (key, args) => key in args;
export function buildSlug(pattern, args) {
  return pattern.replace(PLACEHOLDER, (_, name) => isValidArgName(name, args) ? String(args[name]) : '');
}
//# sourceMappingURL=buildSlug.js.map