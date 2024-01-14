import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BMICalculator from "./pages/BMICalculator";
import CicilanBank from "./pages/CicilanBank";
import HargaAkhirCalculator from "./pages/HargaAkhir";
import BinaryConverter from "./pages/KonversiBilanganBiner";
import OctalConverter from "./pages/KonversiBilanganOktal";
import DecimalConverter from "./pages/KonversiBilanganDesimal";
import HexadecimalConverter from "./pages/KonversiBilanganHeksadesimal";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/cicilan-calculator" element={<CicilanBank />} />
        <Route path="/ppn-diskon" element={<HargaAkhirCalculator />} />
        <Route path="/konversi-biner" element={<BinaryConverter />} />
        <Route path="/konversi-oktal" element={<OctalConverter />} />
        <Route path="/konversi-desimal" element={<DecimalConverter />} />
        <Route
          path="/konversi-heksadesimal"
          element={<HexadecimalConverter />}
        />
      </Routes>
    </BrowserRouter>
  );
}
