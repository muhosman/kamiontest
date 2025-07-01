import React from 'react';
import { TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { Text } from '../Text';
import { colors } from '../../../theme';
import { createButtonStyles, createTextStyles, styles } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    title,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    fullWidth = false,
    onPress,
    ...rest
  }) => {
    const isDisabled = disabled || isLoading;
    const buttonStyles = createButtonStyles(
      variant,
      size,
      fullWidth,
      isDisabled,
    );
    const textStyles = createTextStyles(variant, size, isDisabled);

    const getLoadingColor = () => {
      switch (variant) {
        case 'primary':
          return colors.white;
        case 'secondary':
        case 'outline':
        case 'ghost':
          return colors.primary[500];
        default:
          return colors.white;
      }
    };

    const handlePress = (event: any) => {
      if (!isDisabled && onPress) {
        onPress(event);
      }
    };

    const renderContent = () => {
      if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="small"
              color={getLoadingColor()}
              style={styles.iconContainer}
            />
            <Text style={[textStyles.text, textStyle]}>Yükleniyor...</Text>
          </View>
        );
      }

      return (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={[textStyles.text, textStyle]}>{title}</Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </>
      );
    };

    return (
      <TouchableOpacity
        style={[buttonStyles.button, style]}
        onPress={handlePress}
        disabled={isDisabled}
        activeOpacity={0.7}
        {...rest}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  },
);
