import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("test");
  const [password, setPassword] = useState("123");
  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
