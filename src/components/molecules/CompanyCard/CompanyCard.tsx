import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { CompanyCardProps } from './CompanyCard.types';
import { styles } from './CompanyCard.styles';
import { colors } from '../../../theme';

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  icon = '🏢',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="box" size={24} color={colors.third[800]} />
      </View>
      <Text style={styles.companyName}>{name}</Text>
    </View>
  );
};
