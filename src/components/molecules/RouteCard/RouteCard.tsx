import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { RouteCardProps } from './RouteCard.types';
import { styles } from './RouteCard.styles';
import { colors } from '../../../theme';

export const RouteCard: React.FC<RouteCardProps> = ({
  departureSteps,
  departureCity,
  departureDistrict,
  arrivalDistrict,
  arrivalCity,
}) => {
  return (
    <View style={styles.container}>
      {/* Kalkış Bölümü */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeaderLeft}>
            <Icon name="departure" size={12} color={colors.primary[800]} />
            <Text style={styles.sectionTitle}>KALKIŞ</Text>
          </View>

          <View style={styles.stepCityContainer}>
            <Text style={styles.stepDeparture}>{departureDistrict}</Text>
            <Text style={styles.stepDeparture}>,</Text>
            <Text style={styles.stepDeparture}>{departureCity}</Text>
          </View>
        </View>

        {departureSteps &&
          departureSteps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.sectionHeaderLeft}>
                <Icon name="arrival" size={12} color={colors.primary[100]} />
                <Text style={styles.stepNumber}>{step.step}. DURAK</Text>
              </View>

              <View style={styles.stepCityContainer}>
                <Text style={styles.stepLocation}>{step.location}</Text>
                <Text style={styles.stepDeparture}>,</Text>
                <Text style={styles.stepCity}>{step.city}</Text>
              </View>
            </View>
          ))}
      </View>

      {/* Varış Bölümü */}
      <View style={styles.sectionHeader}>
        <View style={styles.sectionHeaderLeft}>
          <Icon name="arrival" size={12} color={colors.black} />
          <Text style={styles.sectionTitle}>VARIŞ</Text>
        </View>

        <View style={styles.stepCityContainer}>
          <Text style={styles.stepArrival}>{arrivalDistrict}</Text>
          <Text style={styles.stepArrival}>,</Text>
          <Text style={styles.stepArrival}>{arrivalCity}</Text>
        </View>
      </View>
    </View>
  );
};
