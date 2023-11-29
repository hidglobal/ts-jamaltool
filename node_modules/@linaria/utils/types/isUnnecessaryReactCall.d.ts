import type { NodePath } from '@babel/core';
import type { CallExpression } from '@babel/types';
export default function isUnnecessaryReactCall(path: NodePath<CallExpression>): boolean;
