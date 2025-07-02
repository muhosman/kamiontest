import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { RouteCardProps } from './RouteCard.types';
import { styles } from './RouteCard.styles';
import { colors } from '../../../theme';

export const RouteCard: React.FC<RouteCardProps> = React.memo(
  ({
    departureSteps,
    departureCity,
    departureDistrict,
    arrivalDistrict,
    arrivalCity,
  }) => {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionHeaderLeft}>
              <Icon name="departure" size={12} color={colors.primary[800]} />
              <Text
                variant="caption"
                color={colors.text.primary}
                style={styles.sectionTitle}
              >
                KALKIŞ
              </Text>
            </View>

            <View style={styles.stepCityContainer}>
              <Text
                variant="caption"
                color={colors.primary[800]}
                align="right"
                style={styles.stepDeparture}
              >
                {departureDistrict}
              </Text>
              <Text
                variant="caption"
                align="right"
                color={colors.primary[800]}
                style={styles.stepDeparture}
              >
                ,
              </Text>
              <Text
                variant="caption"
                align="right"
                color={colors.primary[800]}
                style={styles.stepDeparture}
              >
                {departureCity}
              </Text>
            </View>
          </View>

          {departureSteps &&
            departureSteps.map((step, index) => (
              <View key={index} style={styles.stepContainer}>
                <View style={styles.sectionHeaderLeft}>
                  <Icon name="arrival" size={12} color={colors.primary[100]} />
                  <Text variant="caption" color={colors.neutral[500]}>
                    {step.step}. DURAK
                  </Text>
                </View>

                <View style={styles.stepCityContainer}>
                  <Text variant="caption" color={colors.neutral[500]}>
                    {step.location}
                  </Text>
                  <Text variant="caption" color={colors.neutral[500]}>
                    ,
                  </Text>
                  <Text variant="caption" color={colors.neutral[500]}>
                    {step.city}
                  </Text>
                </View>
              </View>
            ))}
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeaderLeft}>
            <Icon name="arrival" size={12} color={colors.black} />
            <Text
              variant="caption"
              color={colors.text.primary}
              style={styles.stepDeparture}
            >
              VARIŞ
            </Text>
          </View>

          <View style={styles.stepCityContainer}>
            <Text
              variant="caption"
              color={colors.black}
              align="right"
              style={styles.stepArrival}
            >
              {arrivalDistrict}
            </Text>
            <Text
              variant="caption"
              color={colors.black}
              align="right"
              style={styles.stepArrival}
            >
              ,
            </Text>
            <Text
              variant="caption"
              color={colors.black}
              align="right"
              style={styles.stepArrival}
            >
              {arrivalCity}
            </Text>
          </View>
        </View>
      </View>
    );
  },
);
