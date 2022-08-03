import React from "react";
import ViewRoutes from "./views/routes";
import { ApiErrorProvider } from "./common/providers";
import { AuthProvider } from "./common/providers";
import ApiErrorNotification from "./components/ApiErrorNotification";
import Header from "./layout/Header";

const App = () => {

  return (
    <div className="App">
      <ApiErrorProvider>
        <ApiErrorNotification />
        <AuthProvider>
          <>
            <Header />
            <ViewRoutes />
          </>
        </AuthProvider>
      </ApiErrorProvider>
    </div>
  );
};

export default App;
