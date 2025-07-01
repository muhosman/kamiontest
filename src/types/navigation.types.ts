import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Root Stack Navigator
export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
};

// Auth Stack Navigator
export type AuthStackParamList = {
  Login: undefined;
};

// Main Stack Navigator
export type MainStackParamList = {
  ShipmentList: undefined;
  ShipmentDetail: {
    shipmentId: string;
  };
};

// Navigation Props Types
export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, T>;

export type MainStackNavigationProp<T extends keyof MainStackParamList> =
  StackNavigationProp<MainStackParamList, T>;

// Route Props Types
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

// Combined Props for Screens
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

// Navigation State
export interface NavigationState {
  currentRoute?: string;
  previousRoute?: string;
  params?: Record<string, any>;
}

// Screen Options
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
