import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { ErrorBoxProps } from './ErrorBox.types';
import { styles } from './ErrorBox.styles';
import { Icon } from '../Icon';
import { colors } from '../../../theme';

export const ErrorBox: React.FC<ErrorBoxProps> = ({
  message,
  onClose,
  visible = true,
}) => {
  if (!visible || !message) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Error Icon */}
      <View style={styles.iconContainer}>
        <Icon name="warning" color={colors.white} size={20} />
      </View>

      {/* Error Message */}
      <Text style={styles.messageText}>{message}</Text>

      {/* Close Button */}
      {onClose && (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" color={colors.error[700]} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
