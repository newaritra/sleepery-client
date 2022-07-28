import React, { useState } from "react";
import styled from "styled-components";

export const Context = React.createContext();

const ScreenContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const data = { isLoggedIn, setIsLoggedIn };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ScreenContext;
