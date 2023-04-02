import CardDataList from "../../components/CardDataList";
import React, { useState } from "react";
var a = 0;
function AppMain() {
  const [userNum, setUserNum] = useState({
    free: 10,
    pro: 20,
    enterprise: 30,
  });

  const handleUserNumIncrease = (plan) => {
    setUserNum((prevState) => ({
      ...prevState,
      //price 상태 객체의 다른 속성은 유지하고 하나의 속성만 업데이트할 때 덮어쓰지 않도록 하는데 사용. 개체 속성이 하나라면 스프레드 연산자 사용X
      [plan]: prevState[plan] + 1,
    }));
  };

  var b = 0;
  const [c, setC] = useState(0);

  return (
    <div className="main">
      <div className="main-container">
        <div className="button-container-abc">
          <div className="a-wrapper">
            <span>a : {a}&nbsp;&nbsp;</span>
            <button
              onClick={() => {
                a++;
                console.log(`a = ${a}`);
              }}
            >
              button-global-a
            </button>
            &nbsp;&nbsp;
          </div>
          <div className="b-wrapper">
            <span>b : {b}&nbsp;&nbsp;</span>
            <button
              onClick={() => {
                b++;
                console.log(`b = ${b}`);
              }}
            >
              button-local-b
            </button>
            &nbsp;&nbsp;
          </div>
          <div className="c-wrapper">
            <span>c : {c}&nbsp;&nbsp;</span>
            <button
              onClick={() => {
                setC((prev) => prev + 1);
                //setC(c + 1);
                console.log(`c = ${c}`);
              }}
              value="button-c"
            >
              button-state-c
            </button>
            &nbsp;&nbsp;
          </div>
        </div>

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
            userNum={userNum}
            handleUserNumIncrease={handleUserNumIncrease}
          />
        </div>
      </div>
    </div>
  );
}
export default AppMain;
