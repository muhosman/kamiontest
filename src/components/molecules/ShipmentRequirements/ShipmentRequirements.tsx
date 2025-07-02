import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms';
import { ShipmentRequirementsProps } from './ShipmentRequirements.types';
import { styles } from './ShipmentRequirements.styles';
import { colors } from '../../../theme';

export const ShipmentRequirements: React.FC<ShipmentRequirementsProps> =
  React.memo(
    ({ vehicle, trailerType, tonnage, goodsType, loadingType, status }) => {
      return (
        <View style={styles.container}>
          <Text
            variant="body1"
            color={colors.text.primary}
            style={styles.title}
          >
            Taşıma Gereksinimleri
          </Text>

          <View style={styles.row}>
            {vehicle && (
              <View style={styles.column}>
                <Text
                  variant="caption"
                  color={colors.text.secondary}
                  style={styles.label}
                >
                  ARAÇ
                </Text>
                <Text
                  variant="body2"
                  color={colors.text.primary}
                  style={styles.value}
                >
                  {vehicle}
                </Text>
              </View>
            )}
            {trailerType && (
              <View style={styles.rightColumn}>
                <Text
                  variant="caption"
                  color={colors.text.secondary}
                  style={styles.label}
                >
                  DORSE
                </Text>
                <Text
                  variant="body2"
                  color={colors.text.primary}
                  style={styles.value}
                >
                  {trailerType}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.row}>
            {tonnage && (
              <View style={styles.column}>
                <Text
                  variant="caption"
                  color={colors.text.secondary}
                  style={styles.label}
                >
                  TONAJ
                </Text>
                <Text
                  variant="body2"
                  color={colors.text.primary}
                  style={styles.value}
                >
                  {tonnage}
                </Text>
              </View>
            )}
            {goodsType && (
              <View style={styles.rightColumn}>
                <Text
                  variant="caption"
                  color={colors.text.secondary}
                  style={styles.label}
                >
                  ÜRÜN TİPİ
                </Text>
                <Text
                  variant="body2"
                  color={colors.text.primary}
                  style={styles.value}
                >
                  {goodsType}
                </Text>
              </View>
            )}
          </View>

          {loadingType && (
            <View style={styles.fullWidthRow}>
              <Text
                variant="caption"
                color={colors.text.secondary}
                style={styles.label}
              >
                YÜKLEME TİPİ
              </Text>
              <Text
                variant="body2"
                color={colors.text.primary}
                style={styles.value}
              >
                {loadingType}
              </Text>
            </View>
          )}

          {status && (
            <View style={styles.statusContainer}>
              <Text
                variant="body2"
                color={colors.success[700]}
                style={styles.statusText}
              >
                {status}
              </Text>
            </View>
          )}
        </View>
      );
    },
  );
