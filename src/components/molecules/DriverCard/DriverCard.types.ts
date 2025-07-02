export interface DriverCardProps {
  name: string;
  phone: string;
  avatar?: string;
  amount: number;
  currency: string;
  onCallPress?: () => void;
}
