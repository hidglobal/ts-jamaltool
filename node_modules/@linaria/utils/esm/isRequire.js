import { isGlobal } from './isGlobal';

/**
 * Checks that specified Identifier is a global `require`
 * @param id
 */
export default function isRequire(id) {
  if (!id?.isIdentifier() || id.node.name !== 'require') {
    return false;
  }
  return isGlobal(id, 'require');
}
//# sourceMappingURL=isRequire.js.map