import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  return (
    <div className="App">
      <>
        <ErrorNotification />
        <Router location={history.location} navigator={history}>
          <ViewRoutes />
        </Router>
      </>
    </div>
  );
};

export default App;