import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MarcBenioff from "./pages/MarcBenioff";
import Salesforce from "./pages/Salesforce";
import Values from "./pages/Values";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="biography" element={<MarcBenioff />} />
        <Route path="salesforce" element={<Salesforce />} />
        <Route path="values" element={<Values />} />
      </Routes>
    </div>
  );
}

export default App;
