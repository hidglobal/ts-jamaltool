const cache = new WeakMap();
const empty = {};
export default function loadBabelOptions(babel, filename, overrides = empty) {
  const fileCache = cache.get(overrides) ?? new Map();
  if (fileCache.has(filename)) {
    return fileCache.get(filename);
  }
  const babelOptions = babel.loadOptions({
    ...overrides,
    filename,
    caller: {
      name: 'linaria'
    }
  }) ?? {};
  fileCache.set(filename, babelOptions);
  cache.set(overrides, fileCache);
  return babelOptions;
}
//# sourceMappingURL=loadBabelOptions.js.map