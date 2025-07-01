import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button, Input, Text } from '../../atoms';
import { validateLoginForm, DEFAULT_CREDENTIALS } from '../../../utils';
import { colors } from '../../../theme';
import { styles } from './LoginForm.styles';
import type { LoginFormProps } from './LoginForm.types';
import type { LoginFormData } from '../../../types';

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  errors,
  initialValues,
  style,
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: initialValues?.email || DEFAULT_CREDENTIALS.EMAIL,
    password: initialValues?.password || DEFAULT_CREDENTIALS.PASSWORD,
  });

  const [localErrors, setLocalErrors] = useState({
    email: '',
    password: '',
  });

  // Update form data when initial values change
  useEffect(() => {
    if (initialValues) {
      setFormData(prev => ({
        ...prev,
        ...initialValues,
      }));
    }
  }, [initialValues]);

  const handleInputChange = (field: keyof LoginFormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear local error when user starts typing
    if (localErrors[field]) {
      setLocalErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = () => {
    // Validate form
    const validation = validateLoginForm(formData.email, formData.password);

    console.log('formData', formData);
    if (!validation.isValid) {
      setLocalErrors({
        email: validation.email || '',
        password: validation.password || '',
      });
      return;
    }

    // Clear local errors
    setLocalErrors({
      email: '',
      password: '',
    });

    // Submit form
    onSubmit(formData);
  };

  // Combine local errors with external errors
  const getFieldError = (field: keyof LoginFormData) => {
    return localErrors[field] || errors?.[field] || '';
  };

  const isFormValid =
    formData.email.trim() !== '' && formData.password.trim() !== '';

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email Adresiniz"
          value={formData.email}
          onChangeText={handleInputChange('email')}
          error={getFieldError('email')}
          disabled={isLoading}
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          rightIcon={
            <Image
              source={require('../../../../assets/images/icons/mail.png')}
              style={styles.emailIcon}
              resizeMode="contain"
            />
          }
        />

        <Input
          placeholder="Şifreniz"
          value={formData.password}
          onChangeText={handleInputChange('password')}
          error={getFieldError('password')}
          disabled={isLoading}
          isPassword
          autoComplete="password"
          textContentType="password"
        />
      </View>

      {/* General error message */}
      {errors?.general && (
        <Text variant="caption" color={colors.error[500]}>
          {errors.general}
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          title="Giriş Yapın"
          onPress={handleSubmit}
          isLoading={isLoading}
          disabled={!isFormValid || isLoading}
          fullWidth
        />
      </View>
    </View>
  );
};
