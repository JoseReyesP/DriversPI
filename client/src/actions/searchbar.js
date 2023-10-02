export const SET_INPUT = "SET_INPUT";
export const RESET_INPUT = "RESET_INPUT";

export const setInput = (value) => ({
  type: SET_INPUT,
  payload: value,
});

export const resetInput = () => ({ type: RESET_INPUT });
