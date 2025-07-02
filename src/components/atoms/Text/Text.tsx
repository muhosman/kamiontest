import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';
import { createTextStyles } from './Text.styles';
import type { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = React.memo(
  ({ variant = 'body1', color, align, children, style, ...rest }) => {
    const textStyles = useMemo(
      () => createTextStyles(variant, color, align),
      [variant, color, align],
    );

    return (
      <RNText style={[textStyles.text, style]} {...rest}>
        {children}
      </RNText>
    );
  },
);
