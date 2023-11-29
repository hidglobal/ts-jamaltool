import type { CSSPropertyValue, CSSable } from '../types';
export declare const isCSSable: (o: unknown) => o is CSSPropertyValue | import("../types").ObjectWithSelectors | (CSSPropertyValue | import("../types").ObjectWithSelectors)[];
export default function toCSS(o: CSSable): string;
