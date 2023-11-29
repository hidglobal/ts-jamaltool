/**
 * Checks if a given path has been removed from the AST.
 */
export default function isRemoved(path) {
  // Check if the input path has already been removed
  if (path.removed) {
    return true;
  }

  // Check if any of the parent paths have been removed
  let currentPath = path;
  while (currentPath) {
    const parent = currentPath.parentPath;
    if (parent) {
      // If the parent path has been removed, return true
      if (parent.removed) {
        return true;
      }
      const {
        listKey,
        key
      } = currentPath;
      if (listKey) {
        // If the current path is part of a list and its node is not the same
        // as the node in the parent list at the same index, return true
        if (parent.get(listKey)[key].node !== currentPath.node) {
          return true;
        }
      }
      // If the current path is not part of a list and its node is not the same
      // as the node in the parent object at the same key, return true
      else if (parent.get(key).node !== currentPath.node) {
        return true;
      }
    }

    // Set the current path to its parent path and continue the loop
    currentPath = parent;
  }

  // If the function has not returned true by this point, return false
  return false;
}
//# sourceMappingURL=isRemoved.js.map