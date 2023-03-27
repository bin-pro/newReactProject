import "./App.css";
import bootstrapLogo from "./Images/bootstrapLogo.png";

import CardData from "./CardData.js";

function AppHeader() {
  return (
    <header>
      <div className="nav-wrapper border-bottom box-shadow">
        <div className="nav-title">
          <p className="nav-companyname">&nbsp;&nbsp;&nbsp;Company name</p>
        </div>
        <nav className="header-nav">
          <a className="header-nav-el" href="">
            Features
          </a>
          <a className="header-nav-el" href="">
            Enterprise
          </a>
          <a className="header-nav-el" href="">
            Support
          </a>
          <a className="header-nav-el" href="">
            Pricing
          </a>
          <button className="nav-btn free">
            <p className="nav-btn-content">Sign up</p>
          </button>
        </nav>
      </div>
    </header>
  );
}
function AppMain() {
  return (
    <main>
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
          <CardData />
        </div>
      </div>
    </main>
  );
}
function AppFooter() {
  return (
    <footer className="footer">
      <div className="info">
        <p>
          <img className="logo" src={bootstrapLogo} />
        </p>

        <p className="copyright">
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2017-2018
        </p>
      </div>

      <div className="footer-div">
        <h3 className="footer-list-title">Features</h3>
        <ul className="footer-list">
          <li className="footer-list-el">Cool stuff</li>
          <li className="footer-list-el">Random feature</li>
          <li className="footer-list-el">Team feature</li>
          <li className="footer-list-el">Stuff for developers</li>
          <li className="footer-list-el">Another one</li>
          <li className="footer-list-el">Last time</li>
        </ul>
      </div>
      <div className="footer-div">
        <h3 className="footer-list-title">Resources</h3>
        <ul className="footer-list">
          <li className="footer-list-el">Resource</li>
          <li className="footer-list-el">Resource name</li>
          <li className="footer-list-el">Another resource</li>
          <li className="footer-list-el">Final resource</li>
        </ul>
      </div>
      <div className="footer-div">
        <h3 className="footer-list-title">About</h3>
        <ul className="footer-list">
          <li className="footer-list-el">Team</li>
          <li className="footer-list-el">Locations</li>
          <li className="footer-list-el">Privacy</li>
          <li className="footer-list-el">Terms</li>
        </ul>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
