import { useState, useEffect, useRef } from "react";
import Help from "./components/Help";
import "./App.css";

function App() {
  const [rawLoanValue, setLoanValue] = useState(40000);
  const [rawInterestValue, setInterestValue] = useState(1);
  const [rawPeriodValue, setPeriodValue] = useState(20);
  const [show, setShow] = useState(false);

  const overlayRef = useRef("App-parent--overlay");

  const ResultCalc = () => {
    return (
      <div className="App-content--card">
        <h1>Total Loan</h1>
        <div className="App-content--result">
          <p>Total Amount + Interest</p>
          <span>
            RM
            {Math.round(
              rawLoanValue * (rawInterestValue / 100) * rawPeriodValue +
                rawLoanValue * 1
            ) / 1}
          </span>
        </div>
        <div className="App-content--result">
          <p>Interest</p>
          <span>
            RM
            {(
              (rawLoanValue * rawPeriodValue * (rawInterestValue / 100) * 10) /
              10
            ).toFixed(2)}
          </span>
        </div>

        <div className="App-content--result">
          <p>Total Monthly Repayment</p>
          <span>
            RM
            {(
              (rawLoanValue * (rawInterestValue / 100) * rawPeriodValue +
                rawLoanValue * 1) /
              (rawPeriodValue * 12) /
              1
            ).toFixed(2)}{" "}
            for {rawPeriodValue * 12} Months
          </span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    document.title = "PTPTN Loan Calculator";
  });

  const HandleOpen = () => {
    setShow(!show);
    overlayRef.current.classList.toggle("dark");
  };

  return (
    <div className="App-parent">
      <div className="App-parent--overlay" ref={overlayRef}></div>
      {show ? <Help toggle={HandleOpen} /> : null}
      <div className="App-parent--header">
        <div className="App-parent--header--left">
          <p>Calculate</p>
          <h1>PTPTN Loan</h1>
        </div>
        <div className="App-parent--header--right">
          <button className="App-parent--help" onClick={HandleOpen}>
            Help
          </button>
        </div>
      </div>

      <div className="App-content--parent">
        <ResultCalc />
        <div className="App-content--input">
          <h1>Calculation</h1>
          <form>
            <p>Loan Amount (RM)</p>
            <input
              onChange={(e) => setLoanValue(e.target.value)}
              value={rawLoanValue}
              type="number"
            />
          </form>
          <form>
            <p>Interest Rate (%)</p>
            <input
              onChange={(e) => setInterestValue(e.target.value)}
              value={rawInterestValue}
              type="number"
            />
          </form>
          <form>
            <p>Period (Years)</p>
            <input
              onChange={(e) => setPeriodValue(e.target.value)}
              value={rawPeriodValue}
              type="number"
            />
          </form>
        </div>
      </div>
      <div className="App-footer">
        Simple PTPTN loan calculator. Github source - {""}
        <a target="_blank" href="https://github.com/">
          available here
        </a>
      </div>
    </div>
  );
}

export default App;
