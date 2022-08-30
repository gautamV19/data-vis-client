import "./styles.css";
import ReactWordcloud from "react-wordcloud";
import words from "./Words";
import React, { Component } from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/themes/material.css";
import Slider from "@material-ui/core/Slider";
import Chip from "@material-ui/core/Chip";
import _ from "underscore";
import { Grid, Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { getLayer2 } from "./Features/layers/layersServices";
import { useSelector, useDispatch } from "react-redux";

class Wordcloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxwords: "30",
      wordsselected: [],
      count: 0,
    };
    this.valuetext = this.valuetext.bind(this);
  }
  //Array of Marks in slider and its Values
  marks = [
    {
      value: 0,
      label: "1-250",
    },
    {
      value: 25,
      label: "251-500",
    },
    {
      value: 50,
      label: "501-750",
    },
    {
      value: 100,
      label: "751-1000",
    },
  ];
  //Wordcloud Options
  options = {
    colors: [
      "#B4009E",
      "#32145A",
      "#D83B01",
      "#008272",
      "#5f2d91",
      "#107e10",
      "#32145A",
      "#D83B01",
      "#008272",
      "#00188F",
    ],
    /* ["#7C4803", "#3B5700", "#015E89", "#68217A"], */

    /* ["#008272", "#B4009E", "#6B4F00", "#03616D"] */

    /* DARKEST AAA COMPATIBLE FROM  #008272, #B4009E, #FFB900, #5C2D9 */
    enableTooltip: true,
    deterministic: true,
    fontFamily: "Segoe UI WestEuropean",
    fontSizes: [30, 60],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 180],
    scale: "log",
    spiral: "archimedean",
    transitionDuration: 1000,
    tooltipOptions: {
      allowHTML: true,
      theme: "translucent",
    },
  };
  //Wordcloud Callback
  callbacks = {
    onWordClick: (word, event) => this.shifteventhandler(word, event),

    getWordTooltip: (word) =>
      "<b>Word Text:&nbsp;&nbsp;&nbsp;" +
      word.text.toUpperCase() +
      "</b><br><b>Word Value: &nbsp;&nbsp;&nbsp;" +
      word.value +
      "</b><br><b>Analysis: Positive",
  };
  shifteventhandler(word, event) {
    console.log(word.text);

    dispatch(getLayer2(word.text));

    // if (event.shiftKey) {
    //   this.setState({
    //     wordsselected: [...this.state.wordsselected, word.text],
    //   });
    //   console.log(this.state.wordsselected);
    // } else {
    //   console.log("Press shift key");
    //   console.log(this.state.wordsselected);
    // }
  }
  valuetext(event, value) {
    if (value === 0) {
      //This line gives Error
      console.log(value);
      this.setState({ maxwords: "40" });
    } else if (value === 25) {
      this.setState({ maxwords: "60" });
    } else if (value === 50) {
      this.setState({ maxwords: "90" });
    } else if (value === 100) {
      this.setState({ maxwords: "150" });
    }
  }
  deleteChip(data) {}
  keydata(index) {
    console.log(index);
  }
  render() {
    const dispatch = useDispatch();

    return (
      <Grid container justifyContent="center">
        {this.state.wordsselected.map((data) => {
          return (
            <Chip
              label={data}
              color="primary"
              onDelete={this.keydata(data)}
              variant="outlined"
            />
          );
        })}

        <Grid container className="Wordcloud">
          <ReactWordcloud
            words={words}
            maxWords={this.state.maxwords}
            callbacks={this.callbacks}
            options={this.options}
          />
        </Grid>

        {/* <Grid style={{ width: 300, textAlign: "center", marginLeft: 200 }}>
          <Typography variant="h5" color="initial">
            Slider
          </Typography>
          <Slider
            defaultValue={0}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="off"
            marks={this.marks}
            onChangeCommitted={this.valuetext}
            track={false}
          />
        </Grid> */}

        <Grid>
          <Button
            variant="contained"
            color="secondary"
            href="/"
            // size="large"
            // fullWidth
            sx={{ fontSize: "50px", height: "100px", width: "200px" }}
          >
            <HomeIcon sx={{ fontSize: "50px" }} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default Wordcloud;