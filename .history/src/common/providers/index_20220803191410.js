import React, { useState, useCallback } from 'react';
import { fakeAuth } from '../../service';

export const ApiErrorContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {}
});


export function ApiErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const removeError = () => setError(null);

  const addError = (message, status) => setError({ message, status });

  const contextValue = {
    error,
    addError: useCallback((message, status) => addError(message, status), []),
    removeError: useCallback(() => removeError(), [])
  };

  return (
    <ApiErrorContext.Provider value={contextValue}>
      {children}
    </ApiErrorContext.Provider>
  );
}

export const AuthContext = React.createContext({
    isLoggin: null,
    onLogin: () => {},
    onLogout: () => {}
});

export const AuthProvider = ({ children }) => {
    const [isLoggin, setIsLoggin] = React.useState(null);
  
    const handleLogin = async (user, pass) => {
        console.log('jfhfhh')
      const credentaials = await fakeAuth(user, pass);
      console.log(credentaials);
        if (Object.keys(credentaials).length) {
            setIsLoggin(true)
        }
    };
  
    const handleLogout = () => {
      setIsLoggin(null);
    };
  
    const contextValue = {
      isLoggin,
      onLogin: useCallback((user, pass) => handleLogin(user, pass), []),
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };