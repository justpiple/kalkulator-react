import React from "react";
import { Nav } from "react-bootstrap";
import "./App.css";
import PageRouter from "./PageRouter";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const path = window.location.pathname;
  return (
    <div>
      <Nav variant="pills" activeKey={path} className="mx-auto navbar">
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/bmi-calculator">
            BMI Calculator
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/cicilan-calculator">
            Cicilan Calculator
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/ppn-diskon">PPN Diskon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/konversi-biner">
            Konversi Biner
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/konversi-oktal">
            Konversi Oktal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/konversi-desimal">
            Konversi Desimal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/kalkulator-react/konversi-heksadesimal">
            Konversi Heksadesimal
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <PageRouter />
    </div>
  );
}
