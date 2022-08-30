import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";

export default function GoToHome() {
  return (
    <Grid container alignItems="center" direction="column">
      <Grid>
        <Typography variant="h3" color="initial">
          No data found
        </Typography>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          href="/"
          sx={{ fontSize: "50px", height: "100px", width: "200px" }}
        >
          <HomeIcon sx={{ fontSize: "50px" }} color="secondary" />
        </Button>
      </Grid>
    </Grid>
  );
}
