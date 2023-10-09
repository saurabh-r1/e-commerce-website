import React, { useEffect, useState, useContext } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
  getToken: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const initialExpirationTime = localStorage.getItem('expirationTime');
  const [token, setToken] = useState(initialToken);
  const [expirationTime, setExpirationTime] = useState(initialExpirationTime);

  const userIsLoggedIn = !!token;

  useEffect(() => {
    if (token && expirationTime) {
      const remainingTime = new Date(expirationTime) - new Date();
      if (remainingTime <= 0) {
        logoutHandler();
      } else {
        const logoutTimer = setTimeout(logoutHandler, remainingTime);
        return () => clearTimeout(logoutTimer);
      }
    }
  }, [token, expirationTime]);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);

    if (expirationTime) {
      setExpirationTime(expirationTime);
      localStorage.setItem('expirationTime', expirationTime);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setExpirationTime(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
  };

  const getToken = () => {
    return token;
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    getToken: getToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
