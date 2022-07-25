import { FETCH_DOGS } from "../actions/types";
export const initialState = {
  dogsList: [],
};
function HomepageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DOGS:
      return { ...state, dogsList: payload };
    default:
      return state;
  }
}
export default HomepageReducer;
