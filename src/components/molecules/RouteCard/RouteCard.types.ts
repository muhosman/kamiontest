export interface RouteStep {
  step: number;
  location: string;
  city: string;
}

export interface RouteCardProps {
  departureSteps: RouteStep[];
  arrivalDistrict: string;
  arrivalCity: string;
  departureCity: string;
  departureDistrict: string;
}
