import type { Expression, SourceLocation } from '@babel/types';
import type { TailProcessorParams } from './BaseProcessor';
import BaseProcessor from './BaseProcessor';
import type { ValueCache, Rules, Params } from './types';
export default abstract class TaggedTemplateProcessor extends BaseProcessor {
    #private;
    protected constructor(params: Params, ...args: TailProcessorParams);
    build(values: ValueCache): void;
    /**
     * It is called for each resolved expression in a template literal.
     * @param node
     * @param precedingCss
     * @param source
     * @param unit
     * @return chunk of CSS that should be added to extracted CSS
     */
    abstract addInterpolation(node: Expression, precedingCss: string, source: string, unit?: string): string;
    abstract extractRules(valueCache: ValueCache, cssText: string, loc?: SourceLocation | null): Rules;
    toString(): string;
}
