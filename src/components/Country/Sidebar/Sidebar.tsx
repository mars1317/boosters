import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {ICountrySidebarProps} from '../../../../types/countrySidebar'
import {ICountries} from '../../../../types/country';

const Sidebar:React.FC<ICountrySidebarProps> = ({barData, caseChange, caseType, allCountries, province, countryChange, provinceChange, country, setDate, date }) => {

  const handleDateChange = (newDate: Date | null) => {
    let updatedDate:string = newDate?.toISOString().split('T')[0] || date;
    setDate(updatedDate);
 };

 let provinceOptions = []
 let exists = barData.some(country => country.Province !== '');
 if(exists) {
  provinceOptions = barData.filter( (item)=> {
    return item.Country === country
  }).map( (item)=> {
    return item.Province
  })
}

  return(
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth sx={{ m: 2 }}>
      <InputLabel id="demo-simple-select-label">Case type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={caseType}
        label="Age"
        onChange={ (event: SelectChangeEvent<string>) => caseChange(event)}
      >
        <MenuItem value='Confirmed'>Confirmed</MenuItem>
        <MenuItem value='Recovered'>Recovered</MenuItem>
        <MenuItem value='Deaths'>Deaths</MenuItem>
      </Select>
    </FormControl>
    <FormControl fullWidth sx={{ m: 2 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={caseType}
          label={caseType}
          onChange={ (event: SelectChangeEvent<string>) => countryChange(event)}
        >
          <MenuItem value='Confirmed'>{country}</MenuItem>
          {allCountries.map( (country:ICountries)=> {
            return(
              <MenuItem key={country.label} value={country.label}>{country.label}</MenuItem>
            )
          })}
        </Select>
    </FormControl>
    {exists ? 
       <FormControl fullWidth sx={{ m: 2 }}>
       <InputLabel id="demo-simple-select-label">Province</InputLabel>
       <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={province}
         label="Province"
         onChange={ (event: SelectChangeEvent<string>) => provinceChange(event)}
       >
          {
            Array.from(new Set(provinceOptions)).map( (province:string)=> {
              return ( <MenuItem key={province} value={province}>{province}</MenuItem> )

            })
           }
       </Select>
     </FormControl>
 : null
    }
    <FormControl sx={{ m: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ m: 2 }}>
        <DatePicker
          label="Choose Date"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
    </Box>
  )
}

export default Sidebar;