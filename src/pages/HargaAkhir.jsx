import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function HargaAkhirCalculator() {
  const [input, setInput] = useState({
    hargaPembelian: "",
    ppn: "",
    diskon: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const hitungHargaAkhir = () => {
    const hargaPembelian = parseFloat(input.hargaPembelian);
    const ppn = parseFloat(input.ppn);
    const diskon = parseFloat(input.diskon);

    if (isNaN(hargaPembelian) || isNaN(ppn) || isNaN(diskon)) {
      setResult("Mohon isi semua kolom dengan angka");
      return;
    }

    const hargaSetelahPpn = hargaPembelian + (hargaPembelian * ppn) / 100;
    const hargaSetelahDiskon =
      hargaSetelahPpn - (hargaPembelian * diskon) / 100;

    setResult(
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(hargaSetelahDiskon)
    );
  };

  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2 bg-danger text-white">
          Hitung Harga Akhir
        </div>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formHargaPembelian">
                <Form.Label style={{ fontSize: "1rem" }}>
                  Harga Pembelian:
                </Form.Label>
                <Form.Control
                  type="number"
                  name="hargaPembelian"
                  value={input.hargaPembelian}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formPpn">
                <Form.Label style={{ fontSize: "1rem" }}>PPN (%):</Form.Label>
                <Form.Control
                  type="number"
                  name="ppn"
                  value={input.ppn}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={4} className="mx-auto">
              <Form.Group controlId="formDiskon">
                <Form.Label style={{ fontSize: "1rem" }}>
                  Diskon (%):
                </Form.Label>
                <Form.Control
                  type="number"
                  name="diskon"
                  value={input.diskon}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="card-footer text-body-secondary">
          <div className="d-grid gap-2 mb-4">
            <button
              className="btn btn-danger"
              type="button"
              onClick={hitungHargaAkhir}
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
