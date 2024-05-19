import { CHANGE_NAME, CHANGE_NAME_DEFAULT } from "./actionType";

const intialState = {
  test: "test thành công ",
};

//default parameters ES6
export const testReduxreducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      state.test = action.payload;
      return { ...state };
    }
    case CHANGE_NAME_DEFAULT: {
      state.test = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
