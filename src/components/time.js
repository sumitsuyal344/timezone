import styled from "@emotion/styled";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { timeSlotss } from "../helper/timeSlots";

const Cardtime = styled(Card)`
margin-bottom:10px;
padding:10px;
}
`;
const TypoColor = styled(Typography)`
color:red;
}
`;
const BoxData = styled(Box)`
display: flex;
flex-wrap: wrap;
}
`;



function TimeSlotGenerator({ timezone, today }) {
  const today1 = today; // get today's date
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [...Array(7)].map(
    (_, i) =>
      new Date(today1.getFullYear(), today1.getMonth(), today1.getDate() + i)
  ); // generate an array of 7 dates starting from today
console.log("dates",dates)
  return (
    <Box>
      {dates.map((date) => (
        <div key={date.toISOString()}>
          <Cardtime>
            <CardContent style={{ display: "flex" }}>
              <Box>
                <TypoColor>{weekdays[date.getDay()]==="Sun" || weekdays[date.getDay()]==="Sat" ?"Weekend":weekdays[date.getDay()]}</TypoColor>
                <Typography>{weekdays[date.getDay()]==="Sun"|| weekdays[date.getDay()]==="Sat"?null:date.toLocaleDateString()}</Typography>
              </Box>
              {date.toLocaleDateString() < new Date().toLocaleDateString() ? (
                <Typography style={{ marginLeft: "30px" }}>{weekdays[date.getDay()]==="Sun"|| weekdays[date.getDay()]==="Sat"?null:"Past"}</Typography>
              ) : (
                <BoxData>
                  {timeSlotss.map((timeslot) => (
                    <Typography style={{ marginLeft: "30px" }}>
                     {weekdays[date.getDay()]==="Sun"|| weekdays[date.getDay()]==="Sat"?null: <Checkbox />}
                      {weekdays[date.getDay()]==="Sun"|| weekdays[date.getDay()]==="Sat"?null:timeslot.start_time}
                    </Typography>
                  ))}
                </BoxData>
              )}
            </CardContent>
          </Cardtime>
        </div>
      ))}

    </Box>
  );
}
export default TimeSlotGenerator;
