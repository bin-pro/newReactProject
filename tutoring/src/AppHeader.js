const AppHeader = () => {
  return (
    <div className="header">
      <div className="nav-wrapper border-bottom box-shadow">
        <div className="nav-title">
          <p className="nav-company-name">&nbsp;&nbsp;&nbsp;Company name</p>
        </div>
        <nav className="header-nav">
          <a className="header-nav-el" href="#">
            Features
          </a>
          <a className="header-nav-el" href="#">
            Enterprise
          </a>
          <a className="header-nav-el" href="#">
            Support
          </a>
          <a className="header-nav-el" href="#">
            Pricing
          </a>
          <button className="nav-btn outlined">
            <p className="nav-btn-content">Sign up</p>
          </button>
        </nav>
      </div>
    </div>
  );
};
export default AppHeader;
