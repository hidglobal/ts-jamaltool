import { MantineNumberSize } from '@mantine/core';
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export interface DayStylesParams {
    radius: MantineNumberSize;
    isStatic: boolean;
}
declare const _default: (params: DayStylesParams, options?: import("@mantine/core").UseStylesOptions<string>) => {
    classes: {
        day: string;
    };
    cx: (...args: any) => string;
    theme: import("@mantine/core").MantineTheme;
};
export default _default;
//# sourceMappingURL=Day.styles.d.ts.map