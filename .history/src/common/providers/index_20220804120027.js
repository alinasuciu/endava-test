import React, { useState, useCallback } from "react";
import { fakeAuth } from "../../service";
import { setUserCookie, deleteUserCookie, checkIfCookieExists} from "../../utils";
import { useApiError } from "../hooks";

export const ApiErrorContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {},
});

export function ApiErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const removeError = () => setError(null);

  const addError = (message, status) => setError({ message, status });

  const contextValue = {
    error,
    addError: useCallback((message, status) => addError(message, status), []),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <ApiErrorContext.Provider value={contextValue}>
      {children}
    </ApiErrorContext.Provider>
  );
}

export const AuthContext = React.createContext({
  isLoggedIn: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const { addError } = useApiError();
  const isToken = checkIfCookieExists('token')
  
  if (isToken) {
    setIsLoggedIn(true);
  }

  const onLogin = async (user, pass) => {
    try {
      await fakeAuth(user, pass);
      setIsLoggedIn(true);
      setUserCookie("666666");
    } catch (error) {
      addError(error.message);
    }
  };

  const onLogout = () => {
    setIsLoggedIn(null);
    deleteUserCookie("666666");
  };

  const contextValue = {
    isLoggedIn,
    onLogin: useCallback((user, pass) => onLogin(user, pass), []),
    onLogout: useCallback(() => onLogout(), []),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
