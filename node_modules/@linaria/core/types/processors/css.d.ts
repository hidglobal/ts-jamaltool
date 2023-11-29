import type { SourceLocation, StringLiteral } from '@babel/types';
import type { Rules, ValueCache } from '@linaria/tags';
import { TaggedTemplateProcessor } from '@linaria/tags';
export default class CssProcessor extends TaggedTemplateProcessor {
    addInterpolation(node: unknown, precedingCss: string, source: string): string;
    doEvaltimeReplacement(): void;
    doRuntimeReplacement(): void;
    extractRules(valueCache: ValueCache, cssText: string, loc?: SourceLocation | null): Rules;
    get asSelector(): string;
    get value(): StringLiteral;
}
