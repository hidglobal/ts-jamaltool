import React from 'react';
import { DefaultProps, PopoverProps, ColorPickerProps } from '@mantine/core';
export interface ColorPickerControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    /** Props added to Popover component */
    popoverProps?: Partial<PopoverProps>;
    /** Props added to ColorPicker component */
    colorPickerProps?: Partial<ColorPickerProps>;
    /** List of colors that the user can choose from */
    colors: string[];
}
export declare const ColorPickerControl: React.ForwardRefExoticComponent<ColorPickerControlProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ColorPickerControl.d.ts.map