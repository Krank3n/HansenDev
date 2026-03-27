import IndustrialTemplate from './industrial/IndustrialTemplate';
import WakeParkTemplate from './wakepark/WakeParkTemplate';
import { DemoBusiness } from '../types';

type TemplateComponent = React.FC<{ business: DemoBusiness }>;

export const templateRegistry: Record<string, TemplateComponent> = {
  industrial: IndustrialTemplate,
  wakepark: WakeParkTemplate,
};
