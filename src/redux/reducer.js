
import { counterIncrement,counterDecrement ,counterRestart } from "./actionTypes";





const reducer = (state = 10, action) => {
  switch (action.type) {
    case counterIncrement: {
      return state + 1;
    }
    case counterDecrement: {
      return state - 1;
    }
    case counterRestart : {
      return state - state
    }
    default: {
      return state;
    }
  }
};

export default reducer