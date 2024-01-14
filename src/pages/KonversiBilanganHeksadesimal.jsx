import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function HexadecimalConverter() {
  const [hexadecimal, setHexadecimal] = useState("");
  const [conversionType, setConversionType] = useState("decimal");
  const [result, setResult] = useState(null);

  const handleHexadecimalChange = (event) => {
    const value = event.target.value;
    setHexadecimal(value);
  };

  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };

  const handleConvert = () => {
    // Konversi sesuai jenis yang dipilih
    const decimalValue = parseInt(hexadecimal, 16);

    if (conversionType === "octal") {
      setResult(decimalValue.toString(8) || null);
    } else if (conversionType === "binary") {
      setResult(decimalValue.toString(2) || null);
    } else if (conversionType === "decimal") {
      setResult(decimalValue || null);
    }
  };

  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2 bg-danger text-white">
          Hexadecimal Converter
        </div>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formHexadecimal">
                <Form.Label style={{ fontSize: "1rem" }}>
                  Hexadecimal:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={hexadecimal}
                  onChange={handleHexadecimalChange}
                  placeholder="Enter hexadecimal number"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formConversionType">
                <Form.Label style={{ fontSize: "1rem" }}>
                  Conversion Type:
                </Form.Label>
                <Form.Select
                  value={conversionType}
                  onChange={handleConversionTypeChange}
                >
                  <option value="octal">Octal</option>
                  <option value="binary">Binary</option>
                  <option value="decimal">Decimal</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="card-footer text-body-secondary">
          <div className="d-grid gap-2 mb-4">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleConvert}
            >
              Hitung
            </button>
          </div>
          <input
            className="form-control"
            type="text"
            value={result || "-"}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
