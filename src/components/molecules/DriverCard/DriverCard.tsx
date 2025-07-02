import React, { useCallback } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon, Text } from '../../atoms';
import { DriverCardProps } from './DriverCard.types';
import { styles } from './DriverCard.styles';
import { colors } from '../../../theme';

export const DriverCard: React.FC<DriverCardProps> = React.memo(
  ({ name, phone, avatar: _avatar, amount, currency, onCallPress }) => {
    const getInitials = useCallback((name: string) => {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .substring(0, 2)
        .toUpperCase();
    }, []);

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onCallPress}
        activeOpacity={0.7}
      >
        {true ? (
          <View style={styles.avatarContainer}>
            <View style={styles.circle} />
            <Image
              source={require('../../../../assets/images/icons/user.png')}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text
              variant="h4"
              color={colors.primary[600]}
              style={styles.avatarText}
            >
              {getInitials(name)}
            </Text>
          </View>
        )}

        <View style={styles.driverInfo}>
          <Text
            variant="caption"
            color={colors.neutral[900]}
            style={styles.driverName}
          >
            {name}
          </Text>
          <Text variant="caption" color={colors.neutral[800]}>
            {phone}
          </Text>
        </View>
        <View style={styles.walletInfo}>
          <View style={styles.walletIconContainer}>
            <Icon name="wallet" size={24} color={colors.primary[900]} />
          </View>
          <View style={styles.driverAmountContainer}>
            <Text variant="caption" color={colors.neutral[500]}>
              Kazancınız
            </Text>
            <Text variant="caption" color={colors.neutral[800]}>
              {amount}
              {currency} + KDV
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);
