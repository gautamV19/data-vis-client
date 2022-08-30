import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import VideoList from "./Pages/Layer3";
import WordCloud1 from "./Pages/Layer1";
import WordCloud2 from "./Pages/Layer2";

function App() {
  return (
    <Stack justifyContent="space-between">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/layer1" element={<WordCloud1 />} />
          <Route exact path="/layer2" element={<WordCloud2 />} />
          <Route exact path="/layer3" element={<VideoList />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
