import type { ViewStyle } from 'react-native';
import type { LoginFormData, LoginFormErrors } from '../../../types';

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
  errors?: LoginFormErrors;
  initialValues?: Partial<LoginFormData>;
  style?: ViewStyle;
}
