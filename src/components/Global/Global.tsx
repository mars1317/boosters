import React, {useState, useEffect} from 'react';
import GlobalSidebar from './GlobalSidebar/GlobalSidebar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { SelectChangeEvent } from '@mui/material/Select';
import {useTheme} from "@material-ui/core";
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import {fetchGlobalData} from '../../api/fetchData';
import statisticsStyle from './style';

const Global:React.FC = () => {
  const theme = useTheme();
  const classes = statisticsStyle(theme);
  const [dateFrom, setDateFrom] = useState<string>('2021-03-01');
  const [dateTo, setDateTo] = useState<string>('2021-10-01')
  const [globalData, setGlobalData] = useState([]);
  const [caseType, setCaseType] = useState<string>('NewConfirmed');
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchGlobalData(dateFrom, dateTo).then( data=> setGlobalData(data))
    setLoading(false)  
  }, [dateFrom, dateTo, caseType]);


  const caseChange = (event: SelectChangeEvent<string>):void => {
    setCaseType(event.target.value);
  };

  return (
    <Box>
      {isLoading ? <LinearProgress sx={{ mt: 2 }} color="secondary" /> :
      <div className={classes.ChartContainer}>
        <ResponsiveContainer width="95%" height={400}>
          <AreaChart
          width={750}
          height={500}
          data={globalData}
          margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
        >
          <XAxis dataKey="Date" />
          <YAxis />
          <Area dataKey={caseType} stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  
    <GlobalSidebar caseChange = {caseChange} caseType = {caseType} setDateTo = {setDateTo} setDateFrom = {setDateFrom} dateFrom ={dateFrom} dateTo = {dateTo}/>
      </div>
    }
    </Box>
  )
}

export default Global;