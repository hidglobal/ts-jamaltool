import React from 'react';
import { InputSharedProps, InputWrapperBaseProps, DefaultProps, Selectors, InputStylesNames, InputWrapperStylesNames, PopoverProps, ModalProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HiddenDatesInputValue } from '../HiddenDatesInput';
import { CalendarStylesNames } from '../Calendar';
import useStyles from './PickerInputBase.styles';
import { DatePickerType } from '../../types';
export type PickerInputBaseStylesNames = CalendarStylesNames | InputStylesNames | InputWrapperStylesNames | Selectors<typeof useStyles>;
export interface DateInputSharedProps extends DefaultProps<PickerInputBaseStylesNames>, InputSharedProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithRef<'button'>, 'defaultValue' | 'value' | 'onChange' | 'type'> {
    /** Determines whether dropdown should be closed when date is selected, not applicable when type="multiple", true by default */
    closeOnChange?: boolean;
    /** Type of dropdown, defaults to popover */
    dropdownType?: 'popover' | 'modal';
    /** Props added to Popover component */
    popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
    /** Props added to Modal component */
    modalProps?: Partial<Omit<ModalProps, 'children'>>;
    /** Determines whether input value can be cleared, adds clear button to right section, false by default */
    clearable?: boolean;
    /** Props added to clear button */
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /** Determines whether the user can modify the value */
    readOnly?: boolean;
    /** Determines whether dates value should be sorted before onChange call, only applicable when type="multiple", true by default */
    sortDates?: boolean;
    /** Separator between range value */
    labelSeparator?: string;
}
export interface PickerInputBaseProps extends DateInputSharedProps {
    __staticSelector: string;
    children: React.ReactNode;
    formattedValue: string;
    dropdownHandlers: ReturnType<typeof useDisclosure>[1];
    dropdownOpened: boolean;
    onClear(): void;
    shouldClear: boolean;
    value: HiddenDatesInputValue;
    type: DatePickerType;
}
export declare const PickerInputBase: React.ForwardRefExoticComponent<Pick<PickerInputBaseProps, "form" | "label" | "p" | "slot" | "style" | "td" | "title" | "className" | "color" | "id" | "lang" | "name" | "type" | "role" | "tabIndex" | "display" | "opacity" | "radius" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "hidden" | "left" | "right" | "bottom" | "top" | "inset" | "size" | "icon" | "disabled" | "translate" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "variant" | "__staticSelector" | "sx" | "classNames" | "styles" | "unstyled" | "m" | "my" | "mx" | "mt" | "mb" | "ml" | "mr" | "py" | "px" | "pt" | "pb" | "pl" | "pr" | "bg" | "c" | "ff" | "fz" | "fw" | "lts" | "ta" | "lh" | "fs" | "tt" | "w" | "miw" | "maw" | "h" | "mih" | "mah" | "bgsz" | "bgp" | "bgr" | "bga" | "pos" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "value" | "readOnly" | "required" | "labelSeparator" | "error" | "rightSection" | "description" | "popoverProps" | "clearable" | "clearButtonProps" | "iconWidth" | "rightSectionWidth" | "rightSectionProps" | "wrapperProps" | "withAsterisk" | "labelProps" | "descriptionProps" | "errorProps" | "inputContainer" | "inputWrapperOrder" | "dropdownOpened" | "closeOnChange" | "sortDates" | "dropdownHandlers" | "dropdownType" | "modalProps" | "formattedValue" | "onClear" | "shouldClear"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=PickerInputBase.d.ts.map