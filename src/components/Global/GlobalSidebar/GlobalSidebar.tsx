import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent, } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {IGlobalSidebarProps} from '../../../../types/globalSidebar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
const GlobalSidebar:React.FC<IGlobalSidebarProps> = ({caseType, caseChange, setDateFrom, setDateTo, dateFrom, dateTo}) => {
  const HandleSetDateFrom = (newDate: Date | null) => {
    let updatedDate:string = newDate?.toISOString().split('T')[0] || 'date';  
    setDateFrom(updatedDate)
  }

  const HandleSetDateTo = (newDate: Date | null) => {
    let updatedDate:string = newDate?.toISOString().split('T')[0] || 'date';
    setDateTo(updatedDate)
  }
  return (
    <Box sx={{ flexDirection: 'column' }} maxWidth="sm">
    <FormControl sx={{ display:'block', m:4 }}>
      <InputLabel id="demo-simple-select-label">Case type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={caseType}
        label="Age"
        onChange={ (event: SelectChangeEvent<string>) => caseChange(event)}
      >
        <MenuItem value='NewConfirmed'>Confirmed</MenuItem>
        <MenuItem value='NewRecovered'>Recovered</MenuItem>
        <MenuItem value='NewDeaths'>Deaths</MenuItem>
      </Select>
    </FormControl>
     <FormControl sx={{ display: 'block', m:4 }}>
     <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ m: 2 }}>
       <DatePicker
         label="Date from"
         value={dateFrom}
         onChange={HandleSetDateFrom}
         renderInput={(params) => <TextField {...params} />}
       />
     </LocalizationProvider>
   </FormControl>
    <FormControl sx={{display: 'block',  m: 4 }}>
    <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ m: 2 }}>
      <DatePicker
        label="Date to"
        value={dateTo}
        onChange={HandleSetDateTo}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  </FormControl>
  </Box>
  )
}

export default GlobalSidebar;