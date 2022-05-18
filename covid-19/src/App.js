import DomesticSituation from "./components/DomesticSituation";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegionalStc from "./components/RegionalStc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kor" element={<DomesticSituation />} />
          <Route path="/area" element={<RegionalStc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
