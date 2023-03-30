function AppFooter() {
  return (
    <div className="footer">
      <div className="info">
        <p>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/bootstrapLogo.png`}
          />
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
    </div>
  );
}
export default AppFooter;
