import IndustrialTemplate from './industrial/IndustrialTemplate';
import CorporateTemplate from './corporate/CorporateTemplate';
import MedicalTemplate from './medical/MedicalTemplate';
import { DemoBusiness } from '../types';

type TemplateComponent = React.FC<{ business: DemoBusiness }>;

export const templateRegistry: Record<string, TemplateComponent> = {
  industrial: IndustrialTemplate,
  corporate: CorporateTemplate,
  medical: MedicalTemplate,
};
