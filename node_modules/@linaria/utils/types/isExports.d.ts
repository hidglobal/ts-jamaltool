import type { NodePath } from '@babel/traverse';
/**
 * Checks that specified Identifier is a global `exports` or `module.exports`
 * @param node
 */
export default function isExports(node: NodePath | null | undefined): boolean;
