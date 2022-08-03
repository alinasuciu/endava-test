import React, { useState, useCallback } from 'react';

export const ApiErrorContext = React.createContext({
  error: null,
  addError: () => {},
  removeError: () => {}
});

const AuthContext = React.createContext(null);

export default function ApiErrorProvider({ children }) {
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

const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
  
    const handleLogin = async () => {
      const token = await fakeAuth();
  
      setToken(token);
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };