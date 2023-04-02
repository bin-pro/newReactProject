import CardDataList from "../../components/CardDataList";
import React, { useState } from "react";
function AppMain() {
  var b;

  const [c, setC] = useState(0);
  const [d, setD] = useState(15);
  const [e, setE] = useState(29);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-explainer-wrapper">
          <h1 className="main-title">Pricing</h1>
          <div className="main-content">
            <p className="main-content-el">
              Quickly build an effective pricing table for your potential
              customers with this
            </p>
            <p className="main-content-el">
              Bootstrap example. It's built with default Bootstrap components
              and utilities with
            </p>
            <p className="main-content-el">little customization.</p>
          </div>
        </div>
        <div className="card-container">
          <CardDataList
            b={{ variable: b }}
            c={{ variable: c, setVariable: setC }}
            d={{ variable: d, setVariable: setD }}
            e={{ variable: e, setVariable: setE }}
          />
        </div>
      </div>
    </div>
  );
}
export default AppMain;
