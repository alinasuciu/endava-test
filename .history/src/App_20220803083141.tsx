import React from "react";
import { Routes } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
import "App.scss";

const App = () => {
  return (
    <div className="App">
      <>
        <ErrorNotification />
        <Routes>
          <ViewRoutes />
        </Routes>
      </>
    </div>
  );
};

export default App;