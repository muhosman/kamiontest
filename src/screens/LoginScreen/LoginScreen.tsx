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
import { Text, ErrorBox } from '../../components/atoms';
import { loginAsync, clearAuthError } from '../../store/slices';
import { globalStyles, colors } from '../../theme';
import { styles } from './LoginScreen.styles';
import type { RootState, AppDispatch } from '../../store';
import type { LoginFormData } from '../../types';

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (data: LoginFormData) => {
    dispatch(loginAsync(data));
  };

  // Error handling callback
  const handleErrorClose = () => {
    dispatch(clearAuthError());
  };

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

            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* Error Message */}
      <ErrorBox
        message={error || ''}
        visible={!!error}
        onClose={handleErrorClose}
      />
    </SafeAreaView>
  );
};
