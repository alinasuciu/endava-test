import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <>
        <ErrorNotification />
        <Router history={history}>
          <ViewRoutes />
        </Router>
      </>
    </div>
  );
};

export default App;