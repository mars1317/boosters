import { SelectChangeEvent } from '@mui/material/Select';
import {ICountries} from './country';

export interface IFetchedCountries {
  Country:string,
  Slug: string,
  ISO2: string
}
export interface IFetchedBarData {
  Active:number,
  City: string,
  CityCode:string,
  Confirmed: number,
  Country: string,
  CountryCode: string,
  Date: string,
  Deaths: number,
  ID: string,
  Lat: string,
  Lon: string,
  Province: string,
  Recovered: number
}

export interface ICountrySidebarProps {
  barData: Array<any>,
  allCountries: ICountries[],
  country: string,
  date: string,
  caseType: string,
  province: string,
  caseChange: (event: SelectChangeEvent<string>) => void,
  provinceChange: (event: SelectChangeEvent<string>) => void,
  countryChange: (event: SelectChangeEvent<string>) => void,
  setDate: (updatedString: string) => void
}