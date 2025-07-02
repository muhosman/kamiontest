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
          <View style={styles.routeItem}>
            <View style={styles.iconContainer}>
              <Icon name="departure" size={12} color={colors.primary[900]} />
              <Text
                variant="caption"
                color={colors.text.secondary}
                style={styles.routeLabel}
              >
                ÇIKIŞ
              </Text>
            </View>
            <Text
              variant="caption"
              color={colors.text.primary}
              style={styles.routeAddress}
            >
              {departureCity}, {departureDistrict}
            </Text>
          </View>

          <View style={styles.dottedLine} />

          <View style={styles.routeItem}>
            <View style={styles.iconContainer}>
              <Icon name="arrival" size={12} color={colors.primary[900]} />
              <Text
                variant="caption"
                color={colors.text.secondary}
                style={styles.routeLabel}
              >
                VARIŞ
              </Text>
            </View>
            <Text
              variant="caption"
              color={colors.text.primary}
              style={styles.routeAddress}
            >
              {arrivalCity}, {arrivalDistrict}
            </Text>
          </View>
        </View>

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
