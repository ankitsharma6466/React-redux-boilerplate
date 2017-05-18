export default function reducer(state={sourceCities:  [], selectedSourceCity: ""}, action) {
  switch (action.type){
    case "FETCH_SOURCE_CITY": {
      return {...state, sourceCities: action.payload}
    }
    case "SET_SOURCE_CITY": {
      return {...state, selectedSourceCity: action.payload}
    }
  }

  return state;
};