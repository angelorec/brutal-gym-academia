export interface Plan {
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
  color: string;
  buttonColor: string;
}

export interface Modality {
  title: string;
  description: string;
  icon: string;
  color: string;
  iconColorClass: string;
  iconBgClass: string;
}

export interface ScheduleItem {
  time: string;
  days: {
    [key: string]: {
      name: string;
      trainer: string;
      color: string;
      textColorClass: string;
      subTextColorClass: string;
    } | null;
  };
}