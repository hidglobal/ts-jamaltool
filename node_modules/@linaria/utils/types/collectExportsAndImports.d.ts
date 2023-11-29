import type { NodePath } from '@babel/traverse';
import type { Identifier, MemberExpression } from '@babel/types';
export interface ISideEffectImport {
    imported: 'side-effect';
    local: NodePath;
    source: string;
}
export interface IImport {
    imported: string | 'default' | '*';
    local: NodePath<Identifier | MemberExpression>;
    source: string;
    type: 'cjs' | 'dynamic' | 'esm';
}
export interface IExport {
    exported: string | 'default' | '*';
    local: NodePath;
}
export interface IReexport {
    exported: string | 'default' | '*';
    imported: string | 'default' | '*';
    local: NodePath;
    source: string;
}
export interface IState {
    exportRefs: Map<string, NodePath<MemberExpression>[]>;
    exports: IExport[];
    imports: (IImport | ISideEffectImport)[];
    reexports: IReexport[];
    isEsModule: boolean;
}
export declare const sideEffectImport: (item: IImport | ISideEffectImport) => item is ISideEffectImport;
export declare const explicitImport: (item: IImport | ISideEffectImport) => item is IImport;
export default function collectExportsAndImports(path: NodePath, force?: boolean): IState;
