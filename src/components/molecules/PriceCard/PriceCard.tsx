import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms';
import { PriceCardProps } from './PriceCard.types';
import { styles } from './PriceCard.styles';

export const PriceCard: React.FC<PriceCardProps> = ({
  amount,
  currency = '₺',
  label = 'KAZANCINIZ',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.amount}>
            {amount.toLocaleString('tr-TR')} {currency}
          </Text>
          <Text style={styles.currency}>+ KDV</Text>
        </View>
      </View>

      <View style={styles.icon}>
        <Text style={{ fontSize: 20 }}>💰</Text>
      </View>
    </View>
  );
};
