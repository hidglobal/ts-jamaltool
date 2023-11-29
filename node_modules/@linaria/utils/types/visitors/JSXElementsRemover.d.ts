import type { NodePath } from '@babel/traverse';
import type { CallExpression, JSX } from '@babel/types';
export default function JSXElementsRemover(path: NodePath<JSX | CallExpression>): void;
