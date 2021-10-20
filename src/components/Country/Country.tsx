import React, {useEffect, useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import {useTheme} from "@material-ui/core";
import Sidebar from './Sidebar/Sidebar';
import statisticsStyle from './style';
import LinearProgress from '@mui/material/LinearProgress';
import {fetchData, fetchCountries} from '../../api/fetchData';

const Country:React.FC = ():JSX.Element => {
  const theme = useTheme();
  const classes = statisticsStyle(theme);

  const [country, setCountry] = useState<string>('albania');
  const [date, setDate] = useState<string>('2020-03-21');
  const [filteredData, setFilteredData] = useState<Array<any>>([]);
  const [caseType, setCaseType] = useState<string>('Confirmed');
  const [isLoading, setLoading] = useState<boolean>(true);
  const [allCountries, setAllCountries] = useState<Array<any>>([]);
  const [barData, setBarData] = useState<Array<any>>([]);
  const [province, setProvince] = useState<string>('')

  const caseChange = (event: SelectChangeEvent<string>):void => {
    setCaseType(event.target.value);
  };

  const provinceChange = (event: SelectChangeEvent<string>):void => {
    setProvince(event.target.value);
  };


  const countryChange = (event:SelectChangeEvent<string>):void => {
    setCountry(event.target.value);
    setProvince('');
  };

  useEffect(() => {
    setLoading(true)
    fetchData(country, caseType, date)
    .then((data) => {
      setBarData(data)
      if(province.length===0) {
        setFilteredData(data)
      }
      else {
        let res = data.filter( (item:any)=> {
          return item.Province === province
        })
        setFilteredData(res)
      }
      setLoading(false)
    }
  );
  }, [caseType, country, date, province]);

  useEffect( () => {
    fetchCountries()
    .then((data) => {
      setAllCountries(data)
    });
  }, [])
 
  let countries = allCountries.map( (country)=> {
    return {label: country.Country}
  })

  countries.sort(function(a, b){
    if(a.label < b.label) { return -1; }
    if(a.label > b.label) { return 1; }
    return 0;
})

  return (
    <Box>
    {isLoading ?
    <LinearProgress sx={{ mt: 2 }} /> :
    <div className={classes.ChartContainer}>
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          width={800}
          height={500}
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={caseType} fill="pink" />
        </BarChart>
      </ResponsiveContainer>

      <Sidebar 
        barData = {barData}
        caseChange={caseChange} 
        caseType = {caseType} 
        allCountries = {countries} 
        countryChange = {countryChange} 
        provinceChange = {provinceChange}
        province = {province}
        country = {country} 
        setDate = {setDate}
        date = {date}
      />
    </div>
    }
    </Box>
  )
}

export default Country;