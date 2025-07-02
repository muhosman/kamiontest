import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../../theme';
import { Icon, Text } from '../../atoms';
import { styles } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({
    placeholder = 'Arayın...',
    value,
    onChangeText,
    isLoading = false,
    autoFocus = false,
    disabled = false,
    style,
  }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const handleClearPress = useCallback(() => {
      onChangeText('');
    }, [onChangeText]);

    const showClearButton = value.length > 0 && !isLoading;

    return (
      <View style={[styles.container, isFocused && styles.focused, style]}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="search" size={24} color={colors.primary[900]} />
          </View>

          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.neutral[500]}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            editable={!disabled}
            autoFocus={autoFocus}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />

          <View style={styles.rightIconContainer}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={colors.primary[600]} />
              </View>
            ) : showClearButton ? (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClearPress}
              >
                <Text style={styles.clearIcon}>✕</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    );
  },
);
