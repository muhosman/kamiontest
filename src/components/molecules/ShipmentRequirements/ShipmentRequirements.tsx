import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms';
import { ShipmentRequirementsProps } from './ShipmentRequirements.types';
import { styles } from './ShipmentRequirements.styles';

export const ShipmentRequirements: React.FC<ShipmentRequirementsProps> = ({
  vehicle,
  trailerType,
  tonnage,
  goodsType,
  loadingType,
  status,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taşıma Gereksinimleri</Text>

      {/* İlk Satır: ARAÇ / DORSE */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>ARAÇ</Text>
          <Text style={styles.value}>{vehicle}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.label}>DORSE</Text>
          <Text style={styles.value}>{trailerType}</Text>
        </View>
      </View>

      {/* İkinci Satır: TONAJ / ÜRÜN TİPİ */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>TONAJ</Text>
          <Text style={styles.value}>{tonnage}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.label}>ÜRÜN TİPİ</Text>
          <Text style={styles.value}>{goodsType}</Text>
        </View>
      </View>

      {/* Üçüncü Satır: YÜKLEME TİPİ (Full Width) */}
      <View style={styles.fullWidthRow}>
        <Text style={styles.label}>YÜKLEME TİPİ</Text>
        <Text style={styles.value}>{loadingType}</Text>
      </View>

      {/* Status Badge (Opsiyonel) */}
      {status && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}
    </View>
  );
};
