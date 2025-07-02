import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { styles } from './Header.styles';
import type { HeaderProps } from './Header.types';
import { colors } from '../../../theme';

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

        <Text
          variant="h5"
          align="center"
          color={colors.text.primary}
          style={styles.title}
        >
          {title}
        </Text>

        {rightElement || <View style={styles.spacer} />}
      </View>
    );
  },
);
