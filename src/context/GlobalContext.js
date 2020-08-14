import React, { useReducer, createContext } from "react";
import CountryReducer from "./CountryReducer";

const initialState = {
  data: {},
  country: ""
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
