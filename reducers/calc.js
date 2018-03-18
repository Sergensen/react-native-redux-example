const { ADD, SUB, MUL, DIV, TYPE, RES, CLEAR } = require('../actions/actionTypes');

const initialState = {
  result: 0,
  input: 0,
  last: false
};

export default function countReducer (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: state.result + state.input,
        input: 0,
        last: ADD
      }
    case SUB:
      return {
        ...state,
        result: state.result - state.input,
        input: 0,
        last: SUB
      }
    case MUL:
      return {
        ...state,
        result: state.result * state.input,
        input: 0,
        last: MUL
      }
    case DIV:
      if(state.input!==0){
        return {
          ...state,
          result: state.result / state.input,
          input: 0,
          last: DIV
        }
      }
    case TYPE:
      return {
        ...state,
        input: action.value
      }
    case CLEAR:
      return {
        ...state,
        input: 0,
        result: 0,
        last: false
      }
    case RES:
      let value;
      switch(state.last){
        case ADD:
          value = state.result+state.input;
          break;
        case SUB:
          value = state.result-state.input;
          break;
        case MUL:
          value = state.result*state.input;
          break;
        case DIV:
          value = state.input!==0?state.result+state.input:state.result;
          break;
        default:
          value= state.result;
      }
      return {
        ...state,
        result: value,
        input: 0,
        last: false
      }
    default:
      return state;
  }
}
