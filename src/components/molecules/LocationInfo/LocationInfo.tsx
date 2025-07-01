import React from 'react';
import { View } from 'react-native';
import { Icon, Badge, Text } from '../../atoms';
import { colors } from '../../../theme';
import { styles } from './LocationInfo.styles';
import type { LocationInfoProps } from './LocationInfo.types';

export const LocationInfo: React.FC<LocationInfoProps> = React.memo(
  ({
    departureCity,
    departureDistrict,
    arrivalCity,
    arrivalDistrict,
    stopCount = 3,
    style,
  }) => {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.routeInfo}>
          {/* Departure */}
          <View style={styles.routeItem}>
            <Icon name="departure" size={12} color={colors.primary[800]} />
            <Text style={styles.routeLabel}>ÇIKIŞ</Text>
            <Text style={styles.routeAddress}>
              {departureCity}, {departureDistrict} Türkiye
            </Text>
          </View>

          {/* Dotted Line */}
          <View style={styles.dottedLine} />

          {/* Arrival */}
          <View style={styles.routeItem}>
            <Icon name="arrival" size={12} color={colors.primary[800]} />
            <Text style={styles.routeLabel}>VARIŞ</Text>
            <Text style={styles.routeAddress}>
              {arrivalCity}, {arrivalDistrict} Türkiye
            </Text>
          </View>
        </View>

        {/* Stop Count */}
        <View style={styles.stopCountContainer}>
          <Badge
            style={styles.stopCountBadge}
            textStyle={styles.stopCountText}
            text={`▼ ${stopCount} DURAK`}
            variant="secondary"
            size="small"
          />
        </View>
      </View>
    );
  },
);
