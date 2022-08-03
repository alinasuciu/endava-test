import React from "react";
import ViewRoutes from "./views/routes";
import { ApiErrorProvider } from "./common/providers";
import ApiErrorNotification from './components/ApiErrorNotification';
import Header from "./layout/Header";
import { fakeAuth } from "./service";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  const handleLogin = async (user, pass) => {
    const token = await fakeAuth({user, pass});

    console.log(token)
  };

  const handleLogout = () => {
    setIsLoggedIn(null);
  };

  return (
    <div className="App">
      <ApiErrorProvider>
        <ApiErrorNotification />
        <Header />
        <ViewRoutes handleLogin={(user, pass) => handleLogin(user, pass)}/>
      </ApiErrorProvider>
    </div>
  );
};

export default App;