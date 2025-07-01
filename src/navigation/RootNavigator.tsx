import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { checkAuthAsync } from '../store/slices/authSlice';
import { RootStackParamList } from '../types/navigation.types';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    dispatch(checkAuthAsync() as any);
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1565C0" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
