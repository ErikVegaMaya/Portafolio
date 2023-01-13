import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigator from "./components/navigators/AppNavigator";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavigator />
      </Router>
    </div>
  );
}

export default App;
