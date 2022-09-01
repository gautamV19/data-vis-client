import * as React from "react";
import "../Assets/styles.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { useSelector } from "react-redux";

import GoToHome from "../Widgets/GoToHome";
import GoToHomeButtton from "../Widgets/GoToHomeButtton";

export default function InteractiveList() {
  const { isLoading, layer3 } = useSelector((state) => state.layers);
  // console.log(layer3.length, layer3);

  return isLoading ? (
    <div id="root">
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </div>
  ) : layer3.length < 1 ? (
    <GoToHome />
  ) : (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Typography m={2} variant="h4" component="div" color="secondary">
          Trending Videos
        </Typography>
        <List>
          {layer3.map((l, key) => (
            <ListItem key={key}>
              <ListItemIcon>
                <YouTubeIcon color="primary" />
              </ListItemIcon>
              <a
                href={`https://www.youtube.com/watch?v=${l.video_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText primary={l.title} />
              </a>
            </ListItem>
          ))}
        </List>
        <GoToHomeButtton />
      </Grid>
    </Box>
  );
}
