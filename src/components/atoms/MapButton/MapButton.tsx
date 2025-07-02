import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { MapButtonProps } from './MapButton.types';
import { styles } from './MapButton.styles';
import { Icon } from '../Icon';
import { colors } from '../../../theme';

export const MapButton: React.FC<MapButtonProps> = React.memo(
  ({ onPress, disabled = false }) => {
    return (
      <TouchableOpacity
        style={[styles.container, disabled && styles.disabled]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Icon name="distance" size={20} color={colors.white} />

        <Text
          style={
            disabled ? { ...styles.text, ...styles.textDisabled } : styles.text
          }
        >
          Yol Tarifi Al
        </Text>
      </TouchableOpacity>
    );
  },
);
