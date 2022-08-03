import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
const { createMemoryHistory } = require("history");


const App = () => {

  return (
    <div className="App">
      <>
        <ErrorNotification />
        <ViewRoutes />
      </>
    </div>
  );
};

export default App;