const { ADD, SUB, MUL, DIV, TYPE } = require('../actions/actionTypes');

const initialState = {
  result: 0,
  input: 0
};

export default function countReducer (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: state.result + state.input,
        input: 0
      }
    case SUB:
      return {
        ...state,
        result: state.result - state.input,
        input: 0
      }
    case MUL:
      return {
        ...state,
        result: state.result * state.input,
        input: 0
      }
    case DIV:
      if(state.input!==0){
        return {
          ...state,
          result: state.result / state.input,
          input: 0
        }
      }
    case TYPE:
      return {
        ...state,
        input: action.value
      }
    default:
      return state;
  }
}
