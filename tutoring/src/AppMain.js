import CardList from "./components/CardList";
import React, { useState } from "react";
var a = 0;
function AppMain() {
  const [userNumber, setUserNumber] = useState({
    free: 10,
    pro: 20,
    enterprise: 30,
  });

  const handleUserNumberIncrease = (plan) => () => {
    setUserNumber((prevState) => ({
      ...prevState,
      //스프레드 연산자로 prevState를 deep copy한다.
      //price 상태 객체의 다른 속성은 유지하고 하나의 속성만 업데이트할 때 덮어쓰지 않도록 하는데 사용. 개체 속성이 하나라면 스프레드 연산자 사용X
      //객체 리터럴로 선언되어
      [plan]: prevState[plan] + 1,
    }));
  };
  /**함수 커링(currying) : 다른 화살표 함수로 래핑하는 대신 직접 클릭 핸들러로 사용할 수 있다.
  *함수를 커링하면 원래 계획 매개변수를 
  *"기억"하고 나중에 클릭 이벤트 인수로 호출할 수 있는 새 함수를 만들 수 있다. 
  이렇게 하면 모든 렌더링에서 새 함수를 생성하지 않아도 되므로 성능이 향상될 수 있다.
   */

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
                console.log(`c = ${c}`);
                //setC(c + 1);
              }}
              value="button-c"
            >
              button-state-c
            </button>
            &nbsp;&nbsp;
          </div>
        </div>

        <div className="main-content-container">
          <h1 className="main-title">Pricing</h1>
          <div className="main-content-wrapper">
            <p className="main-content">
              Quickly build an effective pricing table for your potential
              customers with this
            </p>
            <p className="main-content">
              Bootstrap example. It's built with default Bootstrap components
              and utilities with
            </p>
            <p className="main-content">little customization.</p>
          </div>
        </div>
        <div className="card-container">
          <CardList
            userNumber={userNumber}
            handleUserNumberIncrease={handleUserNumberIncrease}
          />
        </div>
      </div>
    </div>
  );
}
export default AppMain;
