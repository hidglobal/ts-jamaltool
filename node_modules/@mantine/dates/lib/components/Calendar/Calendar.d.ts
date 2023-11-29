import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { MonthLevelGroupStylesNames } from '../MonthLevelGroup';
import { YearLevelGroupStylesNames } from '../YearLevelGroup';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { CalendarLevel } from '../../types';
import useStyles from './Calendar.styles';
import { MonthLevelSettings } from '../MonthLevel';
import { YearLevelSettings } from '../YearLevel';
import { DecadeLevelSettings } from '../DecadeLevel';
export type CalendarStylesNames = Selectors<typeof useStyles> | DecadeLevelGroupStylesNames | YearLevelGroupStylesNames | MonthLevelGroupStylesNames;
export interface CalendarAriaLabels {
    monthLevelControl?: string;
    yearLevelControl?: string;
    nextMonth?: string;
    previousMonth?: string;
    nextYear?: string;
    previousYear?: string;
    nextDecade?: string;
    previousDecade?: string;
}
export interface CalendarSettings extends Omit<DecadeLevelSettings, 'onNext' | 'onPrevious'>, Omit<YearLevelSettings, 'onNext' | 'onPrevious'>, Omit<MonthLevelSettings, 'onNext' | 'onPrevious'> {
    /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
    defaultLevel?: CalendarLevel;
    /** Current level displayed to the user (decade, year, month), used for controlled component */
    level?: CalendarLevel;
    /** Called when level changes */
    onLevelChange?(level: CalendarLevel): void;
    /** Called when user clicks year on decade level */
    onYearSelect?(date: Date): void;
    /** Called when user clicks month on year level */
    onMonthSelect?(date: Date): void;
    /** Called when mouse enters year control */
    onYearMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
    /** Called when mouse enters month control */
    onMonthMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
}
export interface CalendarSystemProps extends DefaultProps<CalendarStylesNames>, Omit<React.ComponentPropsWithRef<'div'>, 'value' | 'defaultValue' | 'onChange'> {
    variant?: string;
}
export interface CalendarBaseProps {
    __staticSelector?: string;
    /** Prevents focus shift when buttons are clicked */
    __preventFocus?: boolean;
    /** Determines whether date should be updated when year control is clicked */
    __updateDateOnYearSelect?: boolean;
    /** Determines whether date should be updated when month control is clicked */
    __updateDateOnMonthSelect?: boolean;
    /** Initial date that is displayed, used for uncontrolled component */
    defaultDate?: Date;
    /** Date that is displayed, used for controlled component */
    date?: Date;
    /** Called when date changes */
    onDateChange?(date: Date): void;
    /** Number of columns to render next to each other */
    numberOfColumns?: number;
    /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
    columnsToScroll?: number;
    /** aria-label attributes for controls on different levels */
    ariaLabels?: CalendarAriaLabels;
    /** Called when next decade button is clicked */
    onNextDecade?(date: Date): void;
    /** Called when previous decade button is clicked */
    onPreviousDecade?(date: Date): void;
    /** Called when next year button is clicked */
    onNextYear?(date: Date): void;
    /** Called when previous year button is clicked */
    onPreviousYear?(date: Date): void;
    /** Called when next month button is clicked */
    onNextMonth?(date: Date): void;
    /** Called when previous month button is clicked */
    onPreviousMonth?(date: Date): void;
}
export interface CalendarProps extends CalendarSettings, CalendarBaseProps, CalendarSystemProps {
    /** Max level that user can go up to (decade, year, month), defaults to decade */
    maxLevel?: CalendarLevel;
    /** Min level that user can go down to (decade, year, month), defaults to month */
    minLevel?: CalendarLevel;
    /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
    static?: boolean;
}
export declare const Calendar: React.ForwardRefExoticComponent<Pick<CalendarProps, "p" | "slot" | "style" | "td" | "title" | "className" | "color" | "id" | "lang" | "role" | "tabIndex" | "display" | "opacity" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "hidden" | "left" | "right" | "bottom" | "top" | "inset" | "size" | "static" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "variant" | "__staticSelector" | "sx" | "classNames" | "styles" | "unstyled" | "m" | "my" | "mx" | "mt" | "mb" | "ml" | "mr" | "py" | "px" | "pt" | "pb" | "pl" | "pr" | "bg" | "c" | "ff" | "fz" | "fw" | "lts" | "ta" | "lh" | "fs" | "tt" | "w" | "miw" | "maw" | "h" | "mih" | "mah" | "bgsz" | "bgp" | "bgr" | "bga" | "pos" | "__preventFocus" | "__stopPropagation" | "nextIcon" | "previousIcon" | "nextLabel" | "previousLabel" | "onLevelClick" | "nextDisabled" | "previousDisabled" | "hasNextLevel" | "withNext" | "withPrevious" | "date" | "locale" | "firstDayOfWeek" | "weekendDays" | "weekdayFormat" | "renderDay" | "__onDayClick" | "__onDayMouseEnter" | "__onDayKeyDown" | "__getDayRef" | "getDayProps" | "excludeDate" | "minDate" | "maxDate" | "hideOutsideDates" | "hideWeekdays" | "getDayAriaLabel" | "withCellSpacing" | "monthLabelFormat" | "numberOfColumns" | "monthsListFormat" | "getMonthControlProps" | "__onControlClick" | "__onControlMouseEnter" | "__onControlKeyDown" | "__getControlRef" | "yearLabelFormat" | "yearsListFormat" | "getYearControlProps" | "decadeLabelFormat" | "defaultLevel" | "level" | "onLevelChange" | "onYearSelect" | "onMonthSelect" | "onYearMouseEnter" | "onMonthMouseEnter" | "maxLevel" | "minLevel" | "__updateDateOnYearSelect" | "__updateDateOnMonthSelect" | "defaultDate" | "onDateChange" | "columnsToScroll" | "ariaLabels" | "onNextDecade" | "onPreviousDecade" | "onNextYear" | "onPreviousYear" | "onNextMonth" | "onPreviousMonth"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Calendar.d.ts.map