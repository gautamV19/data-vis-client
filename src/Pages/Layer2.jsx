import React from "react";
import "../Assets/styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { getLayer3 } from "../Features/layersServices";
import { useNavigate } from "react-router-dom";

import GoToHome from "../Widgets/GoToHome";
import GoToHomeButtton from "../Widgets/GoToHomeButtton";

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, layer2, layer3, start, end } = useSelector(
    (state) => state.layers
  );

  let d = [];

  const { data: words } = layer2;
  const { page, limit } = layer3;

  if (words.length > 0) {
    words.forEach((e) => {
      d.push({ text: e.name, value: e.count });
    });
  }

  const myfun = (e) => {
    const payload = { start, end, tag: e.text, page: 0, limit: 50 };
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
    <React.Fragment>
      <ReactWordcloud callbacks={callbacks} words={d} options={options} />
      <GoToHomeButtton />
    </React.Fragment>
  ) : (
    <GoToHome />
  );
}

export default SimpleWordcloud;
