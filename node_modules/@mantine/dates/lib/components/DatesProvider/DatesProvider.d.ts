import React from 'react';
import { DayOfWeek } from '../../types';
export interface DatesProviderValue {
    locale: string;
    firstDayOfWeek: DayOfWeek;
    weekendDays: DayOfWeek[];
    labelSeparator: string;
}
export type DatesProviderSettings = Partial<DatesProviderValue>;
export declare const DATES_PROVIDER_DEFAULT_SETTINGS: DatesProviderValue;
export declare const DatesProviderContext: React.Context<DatesProviderValue>;
export interface DatesProviderProps {
    settings: DatesProviderSettings;
    children: React.ReactNode;
}
export declare function DatesProvider({ settings, children }: DatesProviderProps): JSX.Element;
//# sourceMappingURL=DatesProvider.d.ts.map