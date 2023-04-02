import React, { useState } from "react";

var a;
const CardDataList = ({ b, c, d, e }) => {
  const cardDataArr = [
    {
      id: 0,
      title: "Free",
      price: c,
      users: 10,
      storage: 2,
      support: "Email",
      buttonText: "Sign up for free",
      buttonClass: "outlined",
    },
    {
      id: 1,
      title: "Pro",
      price: d,
      users: 20,
      storage: 10,
      support: "Priority email",
      buttonText: "Get started",
      buttonClass: "contained",
    },
    {
      id: 2,
      title: "Enterprise",
      price: e,
      users: 30,
      storage: 15,
      support: "Phone and email",
      buttonText: "Contact us",
      buttonClass: "contained",
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
      />
    );
  });
};

const Card = ({
  title,
  price,
  users,
  storage,
  support,
  buttonClass,
  buttonText,
}) => {
  function changeCost(arg) {
    arg.useState[1]((prev) => prev + 1);
  }

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
          onClick={changeCost({ price })}
          className={`card-button ${buttonClass}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardDataList;
