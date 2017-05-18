/* Source City Screen Actions */

export const sourceCityActions = {
  fetchCities: () => {
    return {
      type: "FETCH_SOURCE_CITY",
        payload: ["Delhi", "Gurgaon", "Noida", "Faridabad", "Gaziabad"]
    }
  },
  setCity: (city) => {
    return {
      type: "SET_SOURCE_CITY",
      payload: city
    }
  }
};

/* Source Pickup Location Actions */