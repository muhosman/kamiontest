import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../../theme';
import { createInputStyles, styles } from './Input.styles';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  variant = 'default',
  size = 'medium',
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  isPassword = false,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  showError = true,
  required = false,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);

  const hasError = Boolean(error);
  const inputStyles = createInputStyles(
    variant,
    size,
    hasError,
    disabled,
    isFocused,
  );

  const handleFocus = (event: any) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: any) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderEyeIcon = () => {
    if (!isPassword) return null;

    return (
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={togglePasswordVisibility}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Image
          source={
            isPasswordVisible
              ? require('../../../../assets/images/icons/unlock.png')
              : require('../../../../assets/images/icons/lock.png')
          }
          style={styles.passwordToggleIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[inputStyles.container, containerStyle]}>
      {/* Label */}
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          {required && <Text style={styles.requiredIndicator}>*</Text>}
        </View>
      )}

      {/* Input Container */}
      <View style={inputStyles.inputContainer}>
        {/* Left Icon */}
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        {/* Text Input */}
        <TextInput
          style={[inputStyles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          secureTextEntry={isPassword && !isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />

        {/* Password Eye Icon */}
        {renderEyeIcon()}

        {/* Right Icon */}
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>

      {/* Error Message */}
      {hasError && showError && (
        <Text style={[styles.errorText, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};
