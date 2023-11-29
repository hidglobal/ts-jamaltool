import type { Expression, Identifier, TemplateElement, MemberExpression, BigIntLiteral, BooleanLiteral, DecimalLiteral, NullLiteral, NumericLiteral, StringLiteral } from '@babel/types';
export declare type StyledMeta = {
    __linaria: {
        className: string;
        extends: StyledMeta;
    };
};
export declare type CSSPropertyValue = string | number;
export declare type ObjectWithSelectors = {
    [key: string]: ObjectWithSelectors | CSSPropertyValue | (ObjectWithSelectors | CSSPropertyValue)[];
};
export declare type CSSable = ObjectWithSelectors[string];
export declare type JSONValue = null | string | number | boolean | JSONObject | JSONArray;
export interface JSONObject {
    [x: string]: JSONValue;
}
export declare type JSONArray = Array<JSONValue>;
export declare type Serializable = JSONValue;
export declare type Value = (() => void) | StyledMeta | CSSable;
export declare type ValueCache = Map<string | number | boolean | null, unknown>;
export declare type Artifact = [name: string, data: unknown];
export declare type Location = {
    column: number;
    line: number;
};
export interface ICSSRule {
    atom?: boolean;
    className: string;
    cssText: string;
    displayName: string;
    start: Location | null | undefined;
}
export interface IInterpolation {
    id: string;
    node: Expression;
    source: string;
    unit: string;
}
export declare type WrappedNode = string | {
    node: Identifier;
    source: string;
};
export declare type Rules = Record<string, ICSSRule>;
export declare type CalleeParam = readonly ['callee', Identifier | MemberExpression];
export declare type CallParam = readonly ['call', ...ExpressionValue[]];
export declare type MemberParam = readonly ['member', string];
export declare type TemplateParam = readonly [
    'template',
    (TemplateElement | ExpressionValue)[]
];
export declare type Param = CalleeParam | CallParam | MemberParam | TemplateParam;
export declare type Params = readonly Param[];
export declare type BuildCodeFrameErrorFn = <TError extends Error>(msg: string, Error?: new (msg: string) => TError) => TError;
export declare enum ValueType {
    LAZY = 0,
    FUNCTION = 1,
    CONST = 2
}
export declare type LazyValue = {
    buildCodeFrameError: BuildCodeFrameErrorFn;
    ex: Identifier;
    kind: ValueType.LAZY;
    source: string;
};
export declare type FunctionValue = {
    buildCodeFrameError: BuildCodeFrameErrorFn;
    ex: Identifier;
    kind: ValueType.FUNCTION;
    source: string;
};
export declare type ConstValue = {
    buildCodeFrameError: BuildCodeFrameErrorFn;
    ex: StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | BigIntLiteral | DecimalLiteral;
    kind: ValueType.CONST;
    source: string;
    value: string | number | boolean | null;
};
export declare type ExpressionValue = LazyValue | FunctionValue | ConstValue;
export declare type Replacements = Array<{
    length: number;
    original: {
        end: Location;
        start: Location;
    };
}>;
