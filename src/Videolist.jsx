import * as React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Satellite } from "@mui/icons-material";
import GoToHome from "./GoToHome";
// import { Link } from "react-router";

export default function InteractiveList() {
  const navigate = useNavigate();
  const { isLoading, layer3 } = useSelector((state) => state.layers);

  // console.log(layer3);

  // let vdoList = [];
  // let prev = layer3[0];
  // vdoList.push(prev);

  // for (let i = 1; i < layer3.length; i++) {
  //   if (layer3[i] != prev) {
  //     vdoList.push(layer3[i]);
  //     prev = layer3[i];
  //   }
  // }

  // console.log(vdoList);

  return isLoading ? (
    <div id="root">
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </div>
  ) : layer3 ? (
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
                href={`https://www.youtube.com/watch?v=${l[1]}`}
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText primary={l[0]} />
              </a>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
