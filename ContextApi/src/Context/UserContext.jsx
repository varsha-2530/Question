import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "varsha",
    age: 20,
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
