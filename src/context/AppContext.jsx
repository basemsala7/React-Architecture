import React from "react";
import { useState, createContext, useEffect } from "react";
import { Auth } from "../apis/Auth";
import { loggedIn } from "../assets/js/utlis";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const authUtailty = new Auth();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const isLogin = loggedIn();
  console.log(user);

  useEffect(() => {
    if (isLogin) {
      authUtailty.getProfile(setUser);
    }

    return () => {};
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, isLogin, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
