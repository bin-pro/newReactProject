import React from "react";
import "./CardList.css";

/* 
FeedBack 
- 저번에 말씀드린 바와 같이, 
 CardDataList(현재 CardList) 컴포넌트가 그저 Data를 map 하는 용도로만 사용되고 있습니다. 
 이렇게 특별한 기능이 없는 List 컴포넌트를 만들게 되면, 필요 없는 props drilling만 늘어나게 됩니다.
 - 비구조화 할당을 활용하여 컴포넌트를 구성하면 조금 더 깔끔하게 props를 할당할 수 있겠습니다.


apply
CardDataList 컴포넌트가 Data를 map 할 시 비구조화 할당을 통해 각각의 card list에 대해 JSX 코드를 return한다. 

FeedBack
 - 튜터링에서 말씀드린 바와 같이 key에 id 자체를 할당하는 것보다 `card_item_${cardData.id}`와 같이 할당하는 것이 적절하겠습니다.
  key naming이 겹치는 것은 React 프로젝트의 렌더링 최적화 측면에서 치명적이기 때문에 대부분의 경우에는 숫자만 할당하지 않습니다.

apply
  */
const CardList = ({ userNumber, handleUserNumberIncrease }) => {
  const cardDataArray = [
    {
      id: 1,
      title: "Free",
      price: 0,
      users: userNumber.free,
      storage: 2,
      support: "Email",
      buttonText: "Sign up for free",
    },
    {
      id: 2,
      title: "Pro",
      price: 15,
      users: userNumber.pro,
      storage: 10,
      support: "Priority email",
      buttonText: "Get started",
    },
    {
      id: 3,
      title: "Enterprise",
      price: 29,
      users: userNumber.enterprise,
      storage: 15,
      support: "Phone and email",
      buttonText: "Contact us",
    },
  ];

  return cardDataArray.map(
    ({ id, title, price, users, storage, support, buttonText }) => {
      /* dom의 class를 객체의 값으로 할당하는 것은 안티패턴. 왜? 직관적으로 해당 dom에 어떤 class가 할당되었는지 바로 알 수 없기 때문에 */

      const cardParagraphContents = () => {
        return [
          `${users} users included`,
          `${storage} GB of storage`,
          `${support} support`,
          "Help center access",
        ].map((paragraphContent, index) => {
          return (
            <p key={`card${id}_content${index}`} className="card-content">
              {paragraphContent}
            </p>
          );
        });
      };

      var buttonStyle = id === 1 ? "outlined" : "contained";

      const plan = () => {
        if (id === 1) return "free";
        if (id === 2) return "pro";
        return "enterprise";
      };

      return (
        <div className="card box-shadow" key={`card_item_${id}`}>
          <div className="card-header">{title}</div>
          <div className="card-main">
            <h3 className="card-main-title">
              <span className="card-price">${price}</span>
              <span className="card-per-month">&nbsp;/ mo</span>
            </h3>
            {cardParagraphContents()}
          </div>
          <div className="card-footer">
            <button
              onClick={handleUserNumberIncrease(plan())}
              className={`card-button ${buttonStyle}`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      );
    }
  );
};

export default CardList;
