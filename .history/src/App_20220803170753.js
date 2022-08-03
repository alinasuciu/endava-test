import React, { useContext } from "react";
import ViewRoutes from "./views/routes";
import ApiErrorProvider from "./common/providers";
import ApiErrorNotification from './components/ApiErrorNotification';
import { ApiErrorContext } from "./common/providers";
import Header from "./layout/Header";

const App = () => {

  const { error } = useContext(ApiErrorContext);
  return (
    <div className="App">
      <ApiErrorProvider>
        {console.log(error)}
        {error && <ApiErrorNotification />}
        <Header />
        <ViewRoutes />
      </ApiErrorProvider>
    </div>
  );
};

export default App;