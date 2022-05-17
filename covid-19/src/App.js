import DomesticSituation from "./components/DomesticSituation";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kor" element={<DomesticSituation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
