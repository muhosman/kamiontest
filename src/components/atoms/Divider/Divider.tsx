import React from 'react';
import { View } from 'react-native';
import { DividerProps } from './Divider.types';
import { styles } from './Divider.styles';

export const Divider: React.FC<DividerProps> = ({
  height = 1,
  color,
  marginVertical,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          height,
          ...(color && { backgroundColor: color }),
          ...(marginVertical && { marginVertical }),
        },
      ]}
    />
  );
};
