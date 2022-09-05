import React from "react";
import "../Assets/styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { getLayer2 } from "../Features/layersServices";
import { useNavigate } from "react-router-dom";

import GoToHome from "../Widgets/GoToHome";
import GoToHomeButtton from "../Widgets/GoToHomeButtton";

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, layer1, layer2, start, end } = useSelector(
    (state) => state.layers
  );

  console.log("layer2", layer2);

  const { data: words } = layer1;
  const { page, limit } = layer2;

  let d = [];

  if (words.length > 0) {
    words.forEach((e) => {
      d.push({ text: e.category, value: e.count });
    });
  }

  const myfun = (e) => {
    const payload = { start, end, category: e.text, page: 0, limit: 50 };
    console.log("calling layer2 payload", payload);
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
    <React.Fragment>
      <ReactWordcloud callbacks={callbacks} words={d} options={options} />
      <GoToHomeButtton />
    </React.Fragment>
  ) : (
    <GoToHome />
  );
}

export default SimpleWordcloud;
