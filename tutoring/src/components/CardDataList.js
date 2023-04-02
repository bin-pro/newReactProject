import React, { useState } from "react";

const Card = ({
  title,
  price,
  users,
  storage,
  support,
  buttonClass,
  buttonText,
  handleButtonClick,
}) => {
  return (
    <div className="card box-shadow">
      <div className="card-header">{title}</div>
      <div className="card-main">
        <h3 className="card-main-title">
          <span className="card-price">${price}</span>
          <span className="card-per-month">&nbsp;/ mo</span>
        </h3>
        <p className="card-content-el">{users} users included</p>
        <p className="card-content-el">{storage} GB of storage</p>
        <p className="card-content-el">{support} support</p>
        <p className="card-content-el">Help center access</p>
      </div>
      <div className="card-footer">
        <button
          onClick={() => handleButtonClick()}
          className={`card-button ${buttonClass}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const CardDataList = ({ userNum, handleUserNumIncrease }) => {
  const cardDataArr = [
    {
      id: 0,
      title: "Free",
      price: 0,
      users: userNum.free,
      storage: 2,
      support: "Email",
      buttonText: "Sign up for free",
      buttonClass: "outlined",
      handleButtonClick: () => handleUserNumIncrease("free"),
    },
    {
      id: 1,
      title: "Pro",
      price: 15,
      users: userNum.pro,
      storage: 10,
      support: "Priority email",
      buttonText: "Get started",
      buttonClass: "contained",
      handleButtonClick: () => handleUserNumIncrease("pro"),
    },
    {
      id: 2,
      title: "Enterprise",
      price: 29,
      users: userNum.enterprise,
      storage: 15,
      support: "Phone and email",
      buttonText: "Contact us",
      buttonClass: "contained",
      handleButtonClick: () => handleUserNumIncrease("enterprise"),
    },
  ];

  return cardDataArr.map((cardData) => {
    return (
      <Card
        key={cardData.id}
        id={cardData.id}
        title={cardData.title}
        price={cardData.price}
        users={cardData.users}
        storage={cardData.storage}
        support={cardData.support}
        buttonText={cardData.buttonText}
        buttonClass={cardData.buttonClass}
        handleButtonClick={cardData.handleButtonClick}
      />
    );
  });
};

export default CardDataList;
