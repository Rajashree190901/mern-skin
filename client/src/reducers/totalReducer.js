export const totalReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SUBTOTAL":
      return {
        ...state,
        subtotal: action.payload,
      };
    default:
      return state;
  }
};
