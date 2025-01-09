declare module 'react-native-hsv-color-picker' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

    interface HsvColor {
        hue: number;
        saturation: number;
        value: number;
    }

    interface HsvColorPickerProps {
        containerStyle?: StyleProp<ViewStyle>;
        huePickerContainerStyle?: StyleProp<ViewStyle>;
        huePickerBorderRadius?: number;
        huePickerHue?: number;
        huePickerBarWidth?: number;
        huePickerBarHeight?: number;
        huePickerSliderSize?: number;
        onHuePickerDragStart?: (color: string | HsvColor | number[]) => void;
        onHuePickerDragMove?: (color: string | HsvColor | number[]) => void;
        onHuePickerDragEnd?: (color: string | HsvColor | number[]) => void;
        onHuePickerDragTerminate?: (color: string | HsvColor | number[]) => void;
        onHuePickerPress?: (color: string | HsvColor | number[]) => void;
        satValPickerContainerStyle?: StyleProp<ViewStyle>;
        satValPickerBorderRadius?: number;
        satValPickerSize?: number;
        satValPickerSliderSize?: number;
        satValPickerHue?: number;
        satValPickerSaturation?: number;
        satValPickerValue?: number;
        onSatValPickerDragStart?: (color: string | HsvColor | number[]) => void;
        onSatValPickerDragMove?: (color: string | HsvColor | number[]) => void;
        onSatValPickerDragEnd?: (color: string | HsvColor | number[]) => void;
        onSatValPickerDragTerminate?: (color: string | HsvColor | number[]) => void;
        onSatValPickerPress?: (color: string | HsvColor | number[]) => void;
    }

    export default class HsvColorPicker extends Component<HsvColorPickerProps> {}
}
