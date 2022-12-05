import React, { forwardRef } from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { BlurViewProps } from './BlurView.ios';

export type VibrancyViewProps = ViewProps & {
  blurType?: BlurViewProps['blurType'];
  blurAmount: number;
  reducedTransparencyFallbackColor?: string;
};

const VibrancyView = forwardRef<any, VibrancyViewProps>(
  ({ style, ...rest }, ref) => (
    <NativeVibrancyView
      {...rest}
      ref={ref}
      style={StyleSheet.compose(styles.transparent, style)}
    />
  )
);

const styles = StyleSheet.create<{ transparent: ViewStyle }>({
  transparent: { backgroundColor: 'transparent' },
});

const NativeVibrancyView =
  requireNativeComponent<VibrancyViewProps>('VibrancyView');

export default VibrancyView;
