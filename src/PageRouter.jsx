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

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/kalkulator-react/"
          element={<h1 className="text-center">React Calculator</h1>}
        />
        <Route
          path="/kalkulator-react/bmi-calculator"
          element={<BMICalculator />}
        />
        <Route
          path="/kalkulator-react/cicilan-calculator"
          element={<CicilanBank />}
        />
        <Route
          path="/kalkulator-react/ppn-diskon"
          element={<HargaAkhirCalculator />}
        />
        <Route
          path="/kalkulator-react/konversi-biner"
          element={<BinaryConverter />}
        />
        <Route
          path="/kalkulator-react/konversi-oktal"
          element={<OctalConverter />}
        />
        <Route
          path="/kalkulator-react/konversi-desimal"
          element={<DecimalConverter />}
        />
        <Route
          path="/kalkulator-react/konversi-heksadesimal"
          element={<HexadecimalConverter />}
        />
      </Routes>
    </BrowserRouter>
  );
}
