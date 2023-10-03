import { SET_TEAMS } from "../actions/teams";

const teamsReducer = (state = { teams: [] }, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return { teams: action.payload };

    default: {
      return state;
    }
  }
};

export default teamsReducer;
