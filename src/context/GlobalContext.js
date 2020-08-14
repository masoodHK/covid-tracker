import React, { useReducer, createContext } from "react";
import CountryReducer from "./CountryReducer";

const initialState = {
  data: {},
  country: ""
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const updateData = function (countryID) {
    dispatch({
      type: "UPDATE_DATA_BY_COUNTRY",
      payload: {
        countryID
      }
    });
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, updateData }}>
      {children}
    </GlobalContext.Provider>
  );
};
