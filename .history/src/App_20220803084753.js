import React from "react";
import { Routes } from "react-router-dom";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";

const App = () => {
  return (
    <div className="App">
      <>
        <ErrorNotification />
        <ViewRoutes />
        {/* <Routes>
         
        </Routes> */}
      </>
    </div>
  );
};

export default App;