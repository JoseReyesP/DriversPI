import { SET_INPUT, RESET_INPUT } from "../actions/searchbar";

const searchbarReducer = (state = { input: "" }, action) => {
  switch (action.type) {
    case SET_INPUT:
      console.log("Reducer: ", action.payload);
      return { input: action.payload };

    case RESET_INPUT:
      return { ...state, input: "" };

    default: {
      return state;
    }
  }
};

export default searchbarReducer;
