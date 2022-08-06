import "./App.css";
import { useState } from "react";
import ModernDatepicker from "react-modern-datepicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import youtube from "/youtube.png";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Grid container justifyContent="center" alignItems="flex-end" p={1}>
      {/* <Grid container justifyContent="center" alignItems="flex-end"> */}
      {/* <CardMedia title="T L D V" image={youtube} /> */}
      <Grid>
        <img src={youtube} alt="youtube icon" style={{ height: "150px" }} />
      </Grid>
      <Typography variant="h1" color="initial" fontFamily="cursive">
        Time Laps Date Visulizer
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        mt={8}
        mb={6}
      >
        <Grid>
          <Typography variant="h5" color="initial">
            Start Date
          </Typography>
          <ModernDatepicker
            date={startDate}
            format={"DD-MM-YYYY"}
            // label="Start Date"
            showBorder
            className="color"
            onChange={(date) => {
              console.log(date);
              setStartDate(date);
            }}
            placeholder={"Select a Start Date date"}
          />
        </Grid>
        <Grid>
          <Typography variant="h5" color="initial">
            End Date
          </Typography>
          <ModernDatepicker
            date={endDate}
            format={"DD-MM-YYYY"}
            // label="End Date"
            className="color"
            showBorder
            onChange={(date) => {
              console.log(date);
              setEndDate(date);
            }}
            placeholder={"Select a End Date date"}
          />
        </Grid>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="secondary"
          href="/words"
          // size="large"
          // fullWidth
          sx={{ fontSize: "50px", height: "100px", width: "200px" }}
        >
          Go
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
