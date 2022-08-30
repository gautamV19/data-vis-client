import "./App.css";
import { useState } from "react";
import ModernDatepicker from "react-modern-datepicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import youtube from "/youtube.png";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  setStartDateAction,
  setEndDateAction,
} from "./Features/layers/layersSlice";
import { getLayer1 } from "./Features/layers/layersServices";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  let newDate = new Date();
  newDate.toISOString().split("T")[0];

  const [start, setStartDate] = useState(newDate);
  const [end, setEndDate] = useState(newDate);

  const handleGo = () => {
    const payload = {
      start,
      end,
    };
    console.log("Payload :", payload);
    dispatch(setStartDateAction(start));
    dispatch(setEndDateAction(end));
    dispatch(getLayer1(payload));
  };

  return (
    <Grid container justifyContent="center" alignItems="flex-end" p={2}>
      <Grid>
        <img src={youtube} alt="youtube icon" style={{ height: "150px" }} />
      </Grid>
      <Typography variant="h1" color="initial">
        Time Laps Date Visulizer
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        mt={10}
        mb={6}
      >
        <Grid>
          <Typography variant="h3" color="initial">
            Start Date
          </Typography>
          <ModernDatepicker
            date={start}
            format={"YYYY-MM-DD"}
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
          <Typography variant="h3" color="initial">
            End Date
          </Typography>
          <ModernDatepicker
            date={end}
            format={"YYYY-MM-DD"}
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
          color="primary"
          href="/layer1"
          // size="large"
          // fullWidth
          onClick={handleGo}
          sx={{ fontSize: "50px", height: "100px", width: "200px" }}
        >
          Go
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
