
import { Box, Button, Typography } from '@mui/material';
import './App.css';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import TimeSlotGenerator from './components/time';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Container=styled(Box)`
display:flex;
margin:30px;
padding:10px
width:90%;
  justify-content: space-between;
& > p {
font-size:25px
}
& > button {
font-size:15px
}

`
// let timezone='America/New_York';
// let time='Europe/Paris'

const timezone1=[
  { label: 'UTC-05:00', value: 'America/New_York' },
  { label: 'UTC-04:00', value: 'America/Puerto_Rico' },
]

function App() {
  const [timezone, setTimeZone] = useState('America/New_York');

  const handleChange = (event) => {
    console.log(event.target.value)
    setTimeZone(event.target.value);
  };
   const [today, setToday] = useState(new Date());
   useEffect(() => {
      setToday(new Date());
    }
  , []);

   const handlePrevClick = () => {
    const newDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    setToday(newDate);
  };

  const handleNextClick = () => {
    const newDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    setToday(newDate);
  };
 
  return (
   <><Container>
      <Button onClick={handlePrevClick}>Previous</Button>
      <Typography>{today.toLocaleDateString()}</Typography>

      <Button onClick={handleNextClick}>Next</Button>



    </Container>
    <Box style={{margin:'20px'}}>
    <FormControl fullWidth>
        <Typography id="demo-simple-select-label" style={{padding:'2px'}}>TimeZone:</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timezone}
          label="TimeZone"
          onChange={handleChange}
        >
          {
            timezone1.map((timez)=>(
              <MenuItem key={timez.label}  value={timez.value} >{timez.label} {timez.value}</MenuItem>
            ))
          }
         
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
    
    <TimeSlotGenerator timezone={timezone} today={today}/>
    </>
  );
}

export default App;
