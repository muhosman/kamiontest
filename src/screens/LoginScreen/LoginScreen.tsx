import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../../components/molecules';
import { Text } from '../../components/atoms';
import { loginAsync, clearAuthError } from '../../store/slices';
import { globalStyles, colors } from '../../theme';
import { styles } from './LoginScreen.styles';
import type { RootState, AppDispatch } from '../../store';
import type { LoginFormData } from '../../types';

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  // Clear error when component mounts
  useEffect(() => {
    if (error) {
      dispatch(clearAuthError());
    }
  }, [dispatch, error]);

  // Debug: Auth state'ini logla
  useEffect(() => {
    console.log('Auth State:', { isLoading, error, isAuthenticated });
  }, [isLoading, error, isAuthenticated]);

  const handleLogin = async (data: LoginFormData) => {
    console.log('Login attempt with:', data);
    dispatch(loginAsync(data));
  };

  // Convert error to form errors format
  const formErrors = error ? { general: error } : undefined;

  // Success durumunu handle et
  useEffect(() => {
    if (isAuthenticated) {
      console.log('Login successful! User is authenticated.');
      // TODO: Navigate to main screen
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView
        style={globalStyles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>

              <Text variant="h2" align="center" style={styles.title}>
                Kamion'a Hoşgeldiniz
              </Text>

              <Text
                variant="body2"
                align="center"
                color={colors.text.secondary}
                style={styles.subtitle}
              >
                Lütfen email ve şifrenizi girerek giriş yapınız.
              </Text>
            </View>
            <LoginForm
              onSubmit={handleLogin}
              isLoading={isLoading}
              errors={formErrors}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
