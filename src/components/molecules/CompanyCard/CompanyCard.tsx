import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../atoms';
import { CompanyCardProps } from './CompanyCard.types';
import { styles } from './CompanyCard.styles';
import { colors } from '../../../theme';

export const CompanyCard: React.FC<CompanyCardProps> = React.memo(
  ({ name, icon: _icon = '🏢' }) => {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name="box" size={24} color={colors.third[800]} />
        </View>
        <Text
          variant="body1"
          color={colors.neutral[800]}
          style={styles.companyName}
        >
          {name}
        </Text>
      </View>
    );
  },
);
