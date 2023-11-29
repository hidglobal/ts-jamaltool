import type { types as t } from '@babel/core';
import type { Expression, Identifier, SourceLocation, MemberExpression } from '@babel/types';
import type { ExpressionValue, IInterpolation, Params, Value, ValueCache, Artifact } from './types';
import type { IFileContext, IOptions } from './utils/types';
export { Expression };
export declare type ProcessorParams = ConstructorParameters<typeof BaseProcessor>;
export declare type TailProcessorParams = ProcessorParams extends [Params, ...infer T] ? T : never;
export declare type TagSource = {
    imported: string;
    source: string;
};
export default abstract class BaseProcessor {
    tagSource: TagSource;
    protected readonly astService: typeof t & {
        addDefaultImport: (source: string, nameHint?: string) => Identifier;
        addNamedImport: (name: string, source: string, nameHint?: string) => Identifier;
    };
    readonly location: SourceLocation | null;
    protected readonly replacer: (replacement: Expression, isPure: boolean) => void;
    readonly displayName: string;
    readonly isReferenced: boolean;
    protected readonly idx: number;
    protected readonly options: IOptions;
    protected readonly context: IFileContext;
    static SKIP: symbol;
    readonly artifacts: Artifact[];
    readonly className: string;
    readonly dependencies: ExpressionValue[];
    interpolations: IInterpolation[];
    readonly slug: string;
    protected callee: Identifier | MemberExpression;
    protected evaluated: Record<'dependencies' | 'expression', Value[]> | undefined;
    constructor(params: Params, tagSource: TagSource, astService: typeof t & {
        addDefaultImport: (source: string, nameHint?: string) => Identifier;
        addNamedImport: (name: string, source: string, nameHint?: string) => Identifier;
    }, location: SourceLocation | null, replacer: (replacement: Expression, isPure: boolean) => void, displayName: string, isReferenced: boolean, idx: number, options: IOptions, context: IFileContext);
    abstract build(values: ValueCache): void;
    isValidValue(value: unknown): value is Value;
    /**
     * Perform a replacement for the tag in evaluation time.
     * For example, `css` tag will be replaced with its className,
     * whereas `styled` tag will be replaced with an object with metadata.
     */
    abstract doEvaltimeReplacement(): void;
    /**
     * Perform a replacement for the tag with its runtime version.
     * For example, `css` tag will be replaced with its className,
     * whereas `styled` tag will be replaced with a component.
     * If some parts require evaluated data for render,
     * they will be replaced with placeholders.
     */
    abstract doRuntimeReplacement(): void;
    /**
     * A replacement for tag referenced in a template literal.
     */
    abstract get asSelector(): string;
    /**
     * A replacement for the tag in evaluation time.
     * For example, `css` tag will be replaced with its className,
     * whereas `styled` tag will be replaced with an object with metadata.
     */
    abstract get value(): Expression;
    protected tagSourceCode(): string;
    toString(): string;
}
