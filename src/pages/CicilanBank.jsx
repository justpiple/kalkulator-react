import { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function CicilanBank() {
  const [input, setInput] = useState({
    nominal: "0",
    bunga: "0",
    periode: "0",
  });
  const [result, setResult] = useState(null);

  function changeInputHandler(event) {
    setInput(() => {
      setInput({ ...input, [event.target.name]: event.target.value });
      return { ...input, [event.target.name]: event.target.value };
    });
  }

  function hitung() {
    let pinjaman = input.nominal / input.periode;
    let bunga = (input.nominal * input.bunga) / 100 / input.periode;
    let total = pinjaman + bunga;

    setResult(
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total)
    );
  }
  return (
    <div className="App container col-sm-6">
      <div className="card text-center">
        <div className="card-header fs-2 bg-primary text-white">
          Cicilan Bank
        </div>
        <div className="card-body">
          <div className="input-group my-2">
            <span className="input-group-text">Nominal</span>
            <input
              type="number"
              name="nominal"
              className="form-control"
              value={input.nominal}
              onChange={changeInputHandler}
            />
          </div>
          <div className="input-group my-2">
            <span className="input-group-text">Bunga</span>
            <input
              type="number"
              name="bunga"
              className="form-control"
              value={input.bunga}
              onChange={changeInputHandler}
            />
          </div>
          <div className="input-group my-2">
            <span className="input-group-text">Periode</span>
            <select
              className="form-select"
              name="periode"
              onChange={changeInputHandler}
              defaultValue={0}
            >
              <option value="0" disabled hidden>
                Pilih...
              </option>
              <option value="3">3 Bulan</option>
              <option value="6">6 Bulan</option>
              <option value="12">12 Bulan</option>
            </select>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <div className="d-grid gap-2 mb-4">
            <button className="btn btn-primary" type="button" onClick={hitung}>
              Hitung
            </button>
          </div>
          <input
            className="form-control"
            type="text"
            name="tinggi"
            value={result || "-"}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
