const { DOT, ADD, SUB, MUL, DIV, TYPE, RES, CLEAR } = require('../actions/actionTypes');

const initialState = {
  result: 0,
  input: 0,
  last: false,
  dot: false
};

export default function countReducer (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: callLastCalculation(state),
        input: 0,
        last: ADD,
        dot: false
      }
    case SUB:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        input: 0,
        last: SUB
      }
    case MUL:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        input: 0,
        last: MUL
      }
    case DIV:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        input: 0,
        last: DIV
      }
    case DOT:
      const { dot, input } = state;
      if(!dot){
        return {
          ...state,
          input: input+".",
          dot: true
        }
      }
      return {
        ...state,
      }
    case TYPE:
      const typed = action.value;
      if(!state.dot){
        return {
          ...state,
          input: state.input*10+typed
        }
      }else{
        let output = state.input.toString();
        return {
          ...state,
          input: output+typed
        }
      }
    case CLEAR:
      return {
        ...state,
        input: 0,
        result: 0,
        last: false,
        dot: false
      }
    case RES:
      return {
        ...state
      }
    default:
      return state;
  }
}

const callLastCalculation = (state) => {
  const { last } = state;
  const result = parseFloat(state.result);
  const input = parseFloat(state.input);
  switch (last) {
    case ADD:
       return result+input;
    case SUB:
      return result-input;
    case MUL:
      return result*input;
    case DIV:
      return input!==0?result/input:result;
    default:
      return 0+input;
  }
}
