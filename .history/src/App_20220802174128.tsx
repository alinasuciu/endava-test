import React from "react";
import { Routes } from "react-router-dom";
import ViewRoutes from "views/routes";
import ErrorNotification from "components/ErrorNotification";
import "App.scss";

interface IProps {}

const App: React.StatelessComponent<IProps> = () => {
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