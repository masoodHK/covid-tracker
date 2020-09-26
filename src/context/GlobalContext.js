import React, { useReducer, createContext } from "react";
import CountryReducer from "./CountryReducer";

const initialState = {
  data: {},
  dailyData: [],
  countries: [],
  countryID: "all"
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const updateDataByCountry = function (countryID, data) {
    dispatch({
      type: "GET_DATA_BY_COUNTRY",
      payload: {
        countryID,
        data
      }
    });
  };

  const setDailyData = function (dailyData) {
    dispatch({
      type: "GET_DAILY_DATA",
      payload: {
        dailyData
      }
    });
  };

  const setCountries = function (countries) {
    dispatch({
      type: "GET_COUNTRIES",
      payload: {
        countries
      }
    });
  };

  const setData = function (data) {
    dispatch({
      type: "GET_DATA",
      payload: {
        data
      }
    });
  };

  return (
    <GlobalContext.Provider value={{ 
      data: state.data,
      dailyData: state.dailyData,
      countries: state.countries,
      countryID: state.countryID,
      setDailyData,
      setData,
      setCountries,
      updateDataByCountry,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
