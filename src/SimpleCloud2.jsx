import React from "react";
import "./styles.css";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { useDispatch, useSelector } from "react-redux";
import { WorkSharp } from "@mui/icons-material";
import { getLayer3 } from "./Features/layers/layersServices";
import { useNavigate } from "react-router-dom";

const data = [
  { text: "jQuery", value: 25 },
  { text: "MongoDB", value: 18 },
  { text: "JavaScript", value: 38 },
  { text: "React", value: 30 },
  { text: "Nodejs", value: 28 },
  { text: "Express.js", value: 25 },
  { text: "HTML5", value: 33 },
  { text: "CSS3", value: 20 },
  { text: "Webpack", value: 22 },
  { text: "Babel.js", value: 7 },
  { text: "ECMAScript", value: 25 },
  { text: "Jest", value: 15 },
  { text: "Mocha", value: 17 },
  { text: "React Native", value: 27 },
  { text: "Angular.js", value: 30 },
  { text: "TypeScript", value: 15 },
  { text: "Flow", value: 30 },
  { text: "NPM", value: 11 },
];

const options = {
  rotationAngles: [0, 0],
  fontSizes: [50, 200],
  deterministic: true,
  fontFamily: "cursive",
};

const size = [600, 400];

function SimpleWordcloud() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    layer2: words,
    start,
    end,
  } = useSelector((state) => state.layers);

  console.log(words);

  let d = [];

  words.forEach((e) => {
    d.push({ text: e[0], value: e[1] });
  });

  console.log(d);

  const myfun = (e) => {
    const payload = { start, end, tag: e.text };
    console.log(payload);
    dispatch(getLayer3(payload));
    navigate("/layer3");
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
    <ReactWordcloud
      minSize={[200, 140]}
      callbacks={callbacks}
      options={options}
      size={size}
      words={d}
    />
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
