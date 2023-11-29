import type { NodePath } from '@babel/traverse';
/**
 * Checks that specified Identifier is a global `require`
 * @param id
 */
export default function isRequire(id: NodePath | null | undefined): boolean;
