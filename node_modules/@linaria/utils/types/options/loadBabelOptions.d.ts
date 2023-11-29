import type { TransformOptions } from '@babel/core';
import type { Core } from '../babel';
export default function loadBabelOptions(babel: Core, filename: string, overrides?: TransformOptions): TransformOptions;
