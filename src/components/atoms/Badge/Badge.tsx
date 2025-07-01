import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { styles } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = React.memo(
  ({ text, variant = 'default', size = 'medium', style, textStyle }) => {
    const badgeStyles = [styles.badge, styles[variant], styles[size], style];

    return (
      <View style={badgeStyles}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  },
);
