import "./App.css";

import AppHeader from "./containers/header/AppHeader.js";
import AppMain from "./containers/main/AppMain.js";
import AppFooter from "./containers/footer/AppFooter.js";

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
