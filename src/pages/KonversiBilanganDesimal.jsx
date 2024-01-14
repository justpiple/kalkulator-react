import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

export default function DecimalConverter() {
  const [decimal, setDecimal] = useState("");
  const [conversionType, setConversionType] = useState("octal");
  const [result, setResult] = useState(null);

  const handleDecimalChange = (event) => {
    const value = event.target.value;
    setDecimal(value);
  };

  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };

  const handleConvert = () => {
    // Konversi sesuai jenis yang dipilih
    const decimalValue = parseInt(decimal, 10);

    if (conversionType === "octal") {
      setResult(decimalValue.toString(8) || null);
    } else if (conversionType === "binary") {
      setResult(decimalValue.toString(2) || null);
    } else if (conversionType === "hexadecimal") {
      setResult(decimalValue.toString(16).toUpperCase() || null);
    }
  };

  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2 bg-danger text-white">
          Decimal Converter
        </div>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formDecimal">
                <Form.Label style={{ fontSize: "1rem" }}>Decimal:</Form.Label>
                <Form.Control
                  type="text"
                  value={decimal}
                  onChange={handleDecimalChange}
                  placeholder="Enter decimal number"
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
                  <option value="hexadecimal">Hexadecimal</option>
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
