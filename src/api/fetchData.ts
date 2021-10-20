import axios from 'axios';
import {IFetchedCountries, IFetchedBarData} from '../../types/countrySidebar'

export const fetchData = async (country:string, caseType:string, date:string): Promise<IFetchedBarData[]> => {
  const response = await axios.get<IFetchedBarData[]>(`https://api.covid19api.com/live/country/${country}/status/${caseType}/date/${date}`);
  return response.data;
};

export const fetchCountries = async (): Promise<IFetchedCountries[]> => {
  const response = await axios.get<IFetchedCountries[]>('https://api.covid19api.com/countries');
  return response.data;
};


export const fetchGlobalData = async (dateFrom:string, dateTo:string): Promise<any> => {
  const response = await axios.get<any[]>(`https://api.covid19api.com/world?from=${dateFrom}&to=${dateTo}`);
  return response.data;
};
