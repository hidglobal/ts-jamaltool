import path from 'path';
const safeResolve = (name, where) => {
  try {
    return require.resolve(name, {
      paths: where
    });
  } catch (e) {
    return e;
  }
};
const suffixes = ['.js', '.ts', '.jsx', '.tsx'].reduce((acc, ext) => {
  acc.push(`/index${ext}`);
  acc.push(ext);
  return acc;
}, []);
export const syncResolve = (what, importer, stack) => {
  const where = [importer, ...stack].map(p => path.dirname(p));
  const resolved = safeResolve(what, where);
  if (!(resolved instanceof Error)) {
    return resolved;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const suffix of suffixes) {
    const resolvedWithSuffix = safeResolve(what + suffix, where);
    if (resolvedWithSuffix instanceof Error) {
      // eslint-disable-next-line no-continue
      continue;
    }
    return resolvedWithSuffix;
  }
  throw resolved;
};
const asyncResolve = (what, importer, stack) => {
  const where = [importer, ...stack].map(p => path.dirname(p));
  const resolved = safeResolve(what, where);
  if (!(resolved instanceof Error)) {
    return Promise.resolve(resolved);
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const suffix of suffixes) {
    const resolvedWithSuffix = safeResolve(what + suffix, where);
    if (resolvedWithSuffix instanceof Error) {
      // eslint-disable-next-line no-continue
      continue;
    }
    return Promise.resolve(resolvedWithSuffix);
  }
  throw resolved;
};
export default asyncResolve;
//# sourceMappingURL=asyncResolveFallback.js.map