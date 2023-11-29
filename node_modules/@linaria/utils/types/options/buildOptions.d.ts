import type { TransformOptions } from '@babel/core';
/**
 * Merges babel configs together. If a pair of configs were merged before,
 * it will return the cached result.
 */
export default function buildOptions(...configs: (TransformOptions | null | undefined)[]): TransformOptions;
