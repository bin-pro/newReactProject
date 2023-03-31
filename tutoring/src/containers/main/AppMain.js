import CardDataList from "../../components/CardDataList";
function AppMain() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-wrapper-explainer">
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
          <CardDataList />
        </div>
      </div>
    </div>
  );
}
export default AppMain;
