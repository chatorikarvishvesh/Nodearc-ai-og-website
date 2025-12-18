import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ROIItem {
  metric: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
