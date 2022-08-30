import React from "react";
import "./styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { WorkSharp } from "@mui/icons-material";
import { getLayer2 } from "./Features/layers/layersServices";
import { useNavigate } from "react-router-dom";

const options = {
  rotationAngles: [0, 0],
  fontSizes: [5, 500],
  deterministic: true,
  fontFamily: "cursive",
};

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

  console.log(d);

  const myfun = (e) => {
    const payload = { start, end, category: e.text };
    console.log(payload);
    dispatch(getLayer2(payload));
    navigate("/layer2");
  };

  const callbacks = {
    onWordClick: myfun,
    //   getWordTooltip: (word) =>
    //     `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  };

  return isLoading ? (
    <div id="root">
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    </div>
  ) : (
    <ReactWordcloud callbacks={callbacks} words={d} />
  );
}

export default SimpleWordcloud;
