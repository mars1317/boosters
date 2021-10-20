import {ICountries} from './country';
import { SelectChangeEvent } from '@mui/material/Select';

export interface IGlobalSidebarProps {
  caseType: string,
  caseChange: (caseType:  SelectChangeEvent<string>) => void,
  dateFrom: string,
  dateTo: string,
  setDateFrom: (updatedString: string) => void,
  setDateTo: (updatedString: string) => void
}