import type { NodePath } from '@babel/traverse';
import type { Node, Identifier, JSXIdentifier } from '@babel/types';
declare type FindType = 'binding' | 'both' | 'referenced';
export declare function nonType(path: NodePath): boolean;
export default function findIdentifiers(expressions: NodePath<Node | null | undefined>[], type?: FindType): NodePath<Identifier | JSXIdentifier>[];
export {};
