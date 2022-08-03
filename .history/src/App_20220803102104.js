import React from "react";
import ViewRoutes from "./views/routes";
import ErrorNotification from "./components/ErrorNotification";


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