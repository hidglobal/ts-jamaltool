import type { BuildCodeFrameErrorFn } from '../types';
declare function throwIfInvalid<T>(checker: (value: unknown) => value is T, value: Error | unknown, ex: {
    buildCodeFrameError: BuildCodeFrameErrorFn;
}, source: string): asserts value is T;
export default throwIfInvalid;
