import type { TransformOptions } from '@babel/core';
import type { IVariableContext } from '../IVariableContext';
import type { Core } from '../babel';
export declare type ClassNameSlugVars = {
    dir: string;
    ext: string;
    file: string;
    hash: string;
    name: string;
    title: string;
};
export declare type ClassNameFn = (hash: string, title: string, args: ClassNameSlugVars) => string;
export declare type VariableNameFn = (context: IVariableContext) => string;
export declare type Evaluator = (filename: string, options: StrictOptions, text: string, only: string[] | null, babel: Core) => [string, Map<string, string[]> | null];
export declare type EvalRule = {
    action: Evaluator | 'ignore' | string;
    babelOptions?: TransformOptions;
    test?: RegExp | ((path: string, code: string) => boolean);
};
export declare type StrictOptions = {
    babelOptions: TransformOptions;
    classNameSlug?: string | ClassNameFn;
    displayName: boolean;
    evaluate: boolean;
    extensions: string[];
    ignore?: RegExp;
    rules: EvalRule[];
    tagResolver?: (source: string, tag: string) => string | null;
    variableNameConfig?: 'var' | 'dashes' | 'raw';
    variableNameSlug?: string | VariableNameFn;
};
