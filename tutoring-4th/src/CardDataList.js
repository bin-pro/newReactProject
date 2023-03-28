function CardDataList() {
  const cardDataArr = [
    {
      id: 0,
      title: "Free",
      price: 0,
      users: 10,
      storage: 2,
      support: "Email",
      buttonText: "Sign up for free",
      buttonClass: "free",
    },
    {
      id: 1,
      title: "Pro",
      price: 15,
      users: 20,
      storage: 10,
      support: "Priority email",
      buttonText: "Get started",
      buttonClass: "pro",
    },
    {
      id: 2,
      title: "Enterprise",
      price: 29,
      users: 30,
      storage: 15,
      support: "Phone and email",
      buttonText: "Contact us",
      buttonClass: "pro",
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
      />
    );
  });
}

function Card(props) {
  return (
    <div className="card box-shadow">
      <div className="card-header">{props.title}</div>
      <div className="card-main">
        <h3 className="card-main-title">
          <span className="card-price">${props.price}</span>
          <span className="card-per-month">&nbsp;/ mo</span>
        </h3>
        <p className="card-content-el">{props.users} users included</p>
        <p className="card-content-el">{props.storage} GB of storage</p>
        <p className="card-content-el">{props.support} support</p>
        <p className="card-content-el">Help center access</p>
      </div>
      <div className="card-footer">
        <button className="card-button {props.buttonClass}">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default CardDataList;
