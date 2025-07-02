import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation.types';
import { ShipmentListScreen, ShipmentDetailScreen } from '../screens';

const Stack = createStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="ShipmentList" component={ShipmentListScreen} />
      <Stack.Screen name="ShipmentDetail" component={ShipmentDetailScreen} />
    </Stack.Navigator>
  );
};
