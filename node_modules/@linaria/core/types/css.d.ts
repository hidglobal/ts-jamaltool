import type { StyledMeta } from '@linaria/tags';
import type { CSSProperties } from './CSSProperties';
import type { LinariaClassName } from './cx';
declare type CSS = (strings: TemplateStringsArray, ...exprs: Array<string | number | CSSProperties | StyledMeta>) => LinariaClassName;
declare const css: CSS;
export default css;
