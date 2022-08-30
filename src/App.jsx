import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wordcloud1 from "./Wordcloud1";
import Wordcloud2 from "./Wordcloud2";
import VideoList from "./VideoList";
import SimpleCloud from "./simpleCloud";
import SimpleCloud2 from "./SimpleCloud2";

function App() {
  return (
    <Stack justifyContent="space-between">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/layer1" element={<SimpleCloud />} />
          <Route exact path="/layer2" element={<SimpleCloud2 />} />
          <Route exact path="/layer3" element={<VideoList />} />
          {/* <Route exact path="/words" element={<SimpleCloud />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Stack>
  );
}

export default App;
