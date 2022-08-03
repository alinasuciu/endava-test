import React from "react";
import ViewRoutes from "./views/routes";
import ApiErrorProvider from './common/providers/APIErrorProvider';
import ApiErrorNotification from './components/APIErrorNotification';import Header from "./layout/Header";

const App = () => {

  return (
    <div className="App">
      <ApiErrorProvider>
        <ApiErrorNotification />
        <Header />
        <ViewRoutes />
      </ApiErrorProvider>
    </div>
  );
};

export default App;