import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { Shipment } from './shipment.types';

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type MainStackParamList = {
  ShipmentList: undefined;
  ShipmentDetail: {
    shipment: Shipment;
  };
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, T>;

export type MainStackNavigationProp<T extends keyof MainStackParamList> =
  StackNavigationProp<MainStackParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;

export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;

export interface SplashScreenProps {
  navigation: RootStackNavigationProp<'Splash'>;
  route: RootStackRouteProp<'Splash'>;
}

export interface LoginScreenProps {
  navigation: AuthStackNavigationProp<'Login'>;
  route: AuthStackRouteProp<'Login'>;
}

export interface ShipmentListScreenProps {
  navigation: MainStackNavigationProp<'ShipmentList'>;
  route: MainStackRouteProp<'ShipmentList'>;
}

export interface ShipmentDetailScreenProps {
  navigation: MainStackNavigationProp<'ShipmentDetail'>;
  route: MainStackRouteProp<'ShipmentDetail'>;
}

export interface NavigationState {
  currentRoute?: string;
  previousRoute?: string;
  params?: Record<string, any>;
}

export interface ScreenOptions {
  title?: string;
  headerShown?: boolean;
  headerBackTitle?: string;
  headerTintColor?: string;
  headerStyle?: {
    backgroundColor?: string;
  };
  headerTitleStyle?: {
    color?: string;
    fontSize?: number;
    fontWeight?: string;
  };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
