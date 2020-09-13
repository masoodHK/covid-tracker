export default (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload.data
      };
    case "GET_DAILY_DATA":
      return {
        ...state,
        dailyData: action.payload.dailyData
      };
    case "GET_COUNTRIES": 
      return {
        ...state,
        countries: action.payload.countries
      }
    case "GET_DATA_BY_COUNTRY":
      return {
        ...state,
        countryID: action.payload.countryID
      };
    default:
      return state;
  }
};
