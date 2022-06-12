import DomesticSituation from "./components/DomesticPage/DomesticSituation";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegionalStc from "./components/DomesticPage/RegionalStc";
import Contrast from "./components/DomesticPage/Contrast";
import EntireVaccine from "./components/VaccinationPage/EntireVaccine";
import AreaVaccine from "./components/VaccinationPage/AreaVaccine";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kor" element={<DomesticSituation />} />
          <Route path="/area" element={<RegionalStc />} />
          <Route path="/Ctt" element={<Contrast />} />
          <Route path="/EVaccine" element={<EntireVaccine />} />
          <Route path="/AVaccine" element={<AreaVaccine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
