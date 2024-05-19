import { DECREASE_NUMBER, INCREASE_NUMBER } from "./actionType";

// giá trị mặc định của state
const intialState = {
  number: 100,
  age: 20,
  name: "abc",
};

//default parameters ES6
export const demoReduxReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER: {
      state.number += action.payload;
      localStorage.setItem("number", state.number)
      return { ...state };
    }
    case DECREASE_NUMBER: {
        state.number += action.payload;
        localStorage.setItem("number", state.number)
      return { ...state }; 
    }
    default:
      return state;
  }
};
