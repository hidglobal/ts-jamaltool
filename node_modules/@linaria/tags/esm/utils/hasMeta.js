export default function hasMeta(value) {
  return typeof value === 'object' && value !== null && '__linaria' in value;
}
//# sourceMappingURL=hasMeta.js.map