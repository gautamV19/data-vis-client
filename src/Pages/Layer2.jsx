import React from "react";
import "../Assets/styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { getLayer3 } from "../Features/layersServices";
import { useNavigate } from "react-router-dom";
import GoToHome from "../Widgets/GoToHome";

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    layer2: words,
    start,
    end,
  } = useSelector((state) => state.layers);

  let d = [];

  words.forEach((e) => {
    d.push({ text: e[0], value: e[1] });
  });

  const myfun = (e) => {
    const payload = { start, end, tag: e.text };
    console.log(payload);
    dispatch(getLayer3(payload));
    navigate("/layer3");
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
