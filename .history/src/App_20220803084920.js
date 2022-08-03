import React from "react";
import { Routes } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <>
        <ErrorNotification />
        <Routes history={history}>
          <ViewRoutes />
        </Routes>
      </>
    </div>
  );
};

export default App;