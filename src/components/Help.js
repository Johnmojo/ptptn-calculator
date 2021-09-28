import React from "react";

function Help(props) {
  return (
    <div className="App-parent--header--help">
      <div>
        <h1>How to use?</h1>
        <div>
          <p>
            Simply enter the details of your student loan into the box to see
            your personal results. Do note that this calculator is for your
            rough estimation.
          </p>
          <h3>Interest Rate</h3>
          <p>As of 2021, the flat interest rate is 1%.</p>
          <h3>Formula for interest </h3>
          <p>Total Loan Amount x Interest x Loan Period </p>
          <p>RM100,000 x 1% x 15 years = RM15,000</p>
          <h3>Source</h3>
          <a
            target="_blank"
            href="https://www.ptptn.gov.my/loancalc/loancalc-ujrah.jsp"
          >
            PTPTN Ujrah Kalkulator
          </a>
          <br />
          <a
            target="_blank"
            href="https://eduadvisor.my/your-complete-guide-to-ptptn-loan-in-malaysia/"
          >
            Eduadvisor - Your Complete Guide To Ptptn Loan In Malaysia
          </a>
        </div>
      </div>
      <div>
        <button className="App-parent--help" onClick={props.toggle}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Help;
