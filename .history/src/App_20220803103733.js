import React from "react";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";
import Header from "./layout/Header";

const App = () => {

  return (
    <div className="App">
      <>
        <Header />
        <ErrorNotification />
        <ViewRoutes />
      </>
    </div>
  );
};

export default App;