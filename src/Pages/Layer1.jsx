import React, { useState } from "react";
import "../Assets/styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { getLayer2, getLayer1 } from "../Features/layersServices";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box, Grid, Button, TextField } from "@material-ui/core";

import GoToHome from "../Widgets/GoToHome";
import GoToHomeButtton from "../Widgets/GoToHomeButtton";
import {
  layer1PageIncremented,
  layer1PageDecremented,
  setLayer1limit,
  setStartDateAction,
  setEndDateAction,
} from "../Features/layersSlice";

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [layer1limit, setPlimit] = useState(50);

  const { isLoading, layer1, layer2, start, end } = useSelector(
    (state) => state.layers
  );

  // console.log("layer2", layer2);

  const { data: words, page: l1page } = layer1;
  const { page, limit } = layer2;

  const [layer1Page, setLayer1Page] = useState(l1page);

  let d = [];

  if (words.length > 0) {
    words.forEach((e) => {
      d.push({ text: e.category, value: e.count });
    });
  }

  const myfun = (e) => {
    const payload = { start, end, category: e.text, page: 0, limit: 50 };
    // console.log("calling layer2 payload", payload);
    dispatch(getLayer2(payload));
    navigate("/layer2");
  };

  const changePage = () => {
    dispatch(layer1PageIncremented());
    setLayer1Page(layer1Page + 1);
    const payload = {
      start,
      end,
      page: layer1Page,
      limit: layer1limit,
    };
    console.log("Payload in next page:", payload);
    dispatch(setStartDateAction(start));
    dispatch(setEndDateAction(end));
    dispatch(getLayer1(payload));
    navigate("/layer1");
  };

  const callbacks = {
    onWordClick: myfun,
    getWordTooltip: (word) => `${word.text}`,
  };

  const options = {
    deterministic: true,
    fontFamily: "cursive",
  };

  return isLoading ? (
    <div id="root">
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </div>
  ) : d.length > 0 ? (
    <React.Fragment>
      <ReactWordcloud callbacks={callbacks} words={d} options={options} />
      <Grid container justifyContent="space-between">
        <Button
          variant="contained"
          disabled={layer1Page == 0}
          onClick={() => {
            dispatch(layer1PageDecremented());
          }}
          sx={{ fontSize: "50px", height: "100px", width: "200px" }}
        >
          <ArrowCircleLeftIcon
            sx={{ fontSize: "50px" }}
            color="secondary"
            onClick={changePage}
          />
        </Button>
        <Button
          variant="contained"
          sx={{ fontSize: "50px", height: "100px", width: "200px" }}
          onClick={() => {
            dispatch(layer1PageIncremented());
          }}
        >
          <ArrowCircleRightIcon
            sx={{ fontSize: "50px" }}
            color="secondary"
            onClick={changePage}
          />
        </Button>
      </Grid>
      <GoToHomeButtton />
      <Grid container justifyContent="center" spacing={4}>
        <TextField
          color="secondary"
          value={layer1limit}
          onChange={(e) => {
            let str = e.target.value;
            let num = parseInt(str);
            if (isNaN(num)) {
              setPlimit(0);
            } else if (typeof num === "number") {
              setPlimit(num);
            }
          }}
        />
        <Button
          variant="contained"
          disabled={layer1limit == 50}
          // sx={{ fontSize: "50px", height: "100px", width: "200px" }}
          onClick={() => {
            dispatch(setLayer1limit(layer1limit));
          }}
        >
          Get
        </Button>
      </Grid>
    </React.Fragment>
  ) : (
    <GoToHome />
  );
}

export default SimpleWordcloud;
