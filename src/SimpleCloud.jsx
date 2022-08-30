import React from "react";
import "./styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { WorkSharp } from "@mui/icons-material";
import { getLayer2 } from "./Features/layers/layersServices";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@material-ui/core";
import GoToHome from "./GoToHome";

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    layer1: words,
    start,
    end,
  } = useSelector((state) => state.layers);

  let d = [];

  words.forEach((e) => {
    d.push({ text: e[0], value: e[1] });
  });

  const myfun = (e) => {
    const payload = { start, end, category: e.text };
    console.log(payload);
    dispatch(getLayer2(payload));
    navigate("/layer2");
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
    <ReactWordcloud callbacks={callbacks} words={d} options={options} />
  ) : (
    <GoToHome />
  );
}

export default SimpleWordcloud;
