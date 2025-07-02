import React from 'react';
import { View, Image } from 'react-native';
import { Icon, Text } from '../../atoms';
import { DriverCardProps } from './DriverCard.types';
import { styles } from './DriverCard.styles';
import { colors } from '../../../theme';

export const DriverCard: React.FC<DriverCardProps> = ({
  name,
  phone,
  avatar,
  amount,
  currency,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.avatarText}>{getInitials(name)}</Text>
        </View>
      )}

      <View style={styles.driverInfo}>
        <Text style={styles.driverName}>{name}</Text>
        <Text style={styles.driverPhone}>{phone}</Text>
      </View>
      <View style={styles.walletInfo}>
        <View style={styles.walletIconContainer}>
          <Icon name="wallet" size={24} color={colors.primary[900]} />
        </View>
        <View style={styles.driverAmountContainer}>
          <Text style={styles.driverAmountLabel}>KAZANCINIZ</Text>
          <Text style={styles.driverAmount}>
            {amount}
            {currency} + KDV
          </Text>
        </View>
      </View>
    </View>
  );
};
