import React from "react";
import "./styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { WorkSharp } from "@mui/icons-material";
import { getLayer3 } from "./Features/layers/layersServices";
import { useNavigate } from "react-router-dom";
import GoToHome from "./GoToHome";

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

// import TagCloud from "react-tag-cloud";
// import randomColor from "randomcolor";

// const SimpleCloud = () => {
//   return (
//     <TagCloud
//       style={{
//         fontFamily: "sans-serif",
//         fontSize: 30,
//         fontWeight: "bold",
//         fontStyle: "italic",
//         color: () => randomColor(),
//         padding: 5,
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <div style={{ fontSize: 50 }}>react</div>
//       <div style={{ color: "green" }}>tag</div>
//       <div rotate={90}>cloud</div>
//       ...
//     </TagCloud>
//   );
// };

// export default SimpleCloud;

// import React from "react";
// import { TagCloud } from "react-tagcloud";

// const data = [
//   { value: "jQuery", count: 25 },
//   { value: "MongoDB", count: 18 },
//   { value: "JavaScript", count: 38 },
//   { value: "React", count: 30 },
//   { value: "Nodejs", count: 28 },
//   { value: "Express.js", count: 25 },
//   { value: "HTML5", count: 33 },
//   { value: "CSS3", count: 20 },
//   { value: "Webpack", count: 22 },
//   { value: "Babel.js", count: 7 },
//   { value: "ECMAScript", count: 25 },
//   { value: "Jest", count: 15 },
//   { value: "Mocha", count: 17 },
//   { value: "React Native", count: 27 },
//   { value: "Angular.js", count: 30 },
//   { value: "TypeScript", count: 15 },
//   { value: "Flow", count: 30 },
//   { value: "NPM", count: 11 },
// ];

// const customRenderer = (tag, size, color) => (
//   <span
//     key={tag.value}
//     style={{
//       animation: "blinker 3s linear infinite",
//       animationDelay: `${Math.random() * 2}s`,
//       fontSize: `${size / 2}em`,
//       border: `2px solid ${color}`,
//       margin: "3px",
//       padding: "3px",
//       display: "inline-block",
//       color: "white",
//     }}
//   >
//     {tag.value}
//   </span>
// );

// const SimpleCloud = () => (
//   <TagCloud
//     tags={data}
//     minSize={50}
//     maxSize={1000}
//     style={{ width: 1000, height: 1000, textAlign: "left" }}
//     disableRandomColor
//     onClick={(a, b) => {
//       console.log(a, b);
//     }}
//   />
// );

// export default SimpleCloud;
