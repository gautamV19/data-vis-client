import { Stack } from "@mui/material";
import Home from "./Home";

function App() {
  const startDate = new Date();
  return (
    <Stack justifyContent="space-between">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/words" element={<WorldCloud />} />
        </Routes>
        <Footer />
      </Router>
    </Stack>
  );
}

export default App;
