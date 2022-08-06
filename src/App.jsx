import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wordcloud from "./Wordcloud";

function App() {
  return (
    <Stack justifyContent="space-between">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/words" element={<Wordcloud />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Stack>
  );
}

export default App;
