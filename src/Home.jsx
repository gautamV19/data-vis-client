import { useState } from "react";
import ModernDatepicker from "react-modern-datepicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Grid container sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Box sx={{ height: "100px", width: "100px" }}>
          <ModernDatepicker
            date={startDate}
            format={"DD-MM-YYYY"}
            label="Start Date"
            showBorder
            onChange={(date) => {
              console.log(date);
              setStartDate(date);
            }}
            placeholder={"Select a Start Date date"}
          />
        </Box>
        <Box sx={{ height: "100px", width: "100px" }}>
          <ModernDatepicker
            date={endDate}
            format={"DD-MM-YYYY"}
            label="End Date"
            showBorder
            onChange={(date) => {
              console.log(date);
              setEndDate(date);
            }}
            placeholder={"Select a End Date date"}
          />
        </Box>
      </Grid>
      <Button variant="contained" color="primary">
        <a href="/words">Get</a>
      </Button>
    </Grid>
  );
}

export default App;
