import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { styles } from './Header.styles';
import type { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = React.memo(
  ({ title, showBackButton = false, onBackPress, rightElement, style }) => {
    return (
      <View style={[styles.container, style]}>
        {showBackButton ? (
          <View style={styles.backButton}>
            <Icon name="back" size={20} onPress={onBackPress} />
          </View>
        ) : (
          <View style={styles.spacer} />
        )}

        <Text style={styles.title}>{title}</Text>

        {rightElement || <View style={styles.spacer} />}
      </View>
    );
  },
);
