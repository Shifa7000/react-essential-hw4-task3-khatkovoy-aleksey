const initialState = true;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_VISIBILITY":
      return !state;
    default:
      return state;
  }
};
