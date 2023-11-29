function getKeywords(keywords) {
  if (Array.isArray(keywords)) {
    return keywords.map((keyword) => keyword.trim()).join(",").toLowerCase().trim();
  }
  if (typeof keywords === "string") {
    return keywords.toLowerCase().trim();
  }
  return "";
}
function filterActions(_query, actions) {
  const query = _query.trim().toLowerCase();
  const priorityMatrix = [[], []];
  actions.forEach((action) => {
    var _a, _b;
    if ((_a = action.title) == null ? void 0 : _a.toLowerCase().includes(query)) {
      priorityMatrix[0].push(action);
    } else if (((_b = action.description) == null ? void 0 : _b.toLowerCase().includes(query)) || getKeywords(action.keywords).includes(query)) {
      priorityMatrix[1].push(action);
    }
  });
  return priorityMatrix.flat();
}

export { filterActions };
//# sourceMappingURL=filter-actions.js.map
