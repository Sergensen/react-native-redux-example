const { DOT, ADD, SUB, MUL, DIV, TYPE, RES, CLEAR } = require('../actions/actionTypes');

const initialState = {
  result: 0,
  input: 0,
  last: false,
  dot: false,
  neg: 1,
  clear: true
};

export default function countReducer (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: callLastCalculation(state),
        input: 0,
        last: ADD,
        neg:1,
        clear: true,
        dot: false
      }
    case SUB:
      const neg = state.input===0?-1:1;
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        neg: neg,
        clear: true,
        input: 0,
        last: SUB
      }
    case MUL:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        clear: true,
        input: 0,
        last: MUL
      }
    case DIV:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
        clear: true,
        input: 0,
        last: DIV
      }
    case DOT:
      const { dot, input } = state;
      if(!dot&&input.toString().length<10){
        return {
          ...state,
          input: input+".",
          dot: true,
          clear: false
        }
      }
      return {
        ...state,
      }
    case TYPE:
      const typed = action.value;
      if(state.input.toString().length<10){
        if(!state.dot){
          return {
            ...state,
            input: state.input*10+state.neg*typed,
            clear: false
          }
        }else{
          let output = state.input.toString();
          return {
            ...state,
            input: output+typed,
            clear: false
          }
        }
      } else {
        return {
          ...state
        }
      }
    case CLEAR:
      return {
        ...state,
        input: 0,
        result: state.clear?0:state.result,
        last: state.clear?false:state.last,
        neg: 1,
        dot: false,
        clear: true
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
  const { last, clear, neg } = state;
  const result = parseFloat(state.result);
  const input = parseFloat(state.input);
  switch (last) {
    case ADD:
       return result+input;
    case SUB:
      return result-neg*input;
    case MUL:
      return (input!==0||!clear)?result*input:result;
    case DIV:
      return input!==0?result/input:result;
    default:
      return 0+input;
  }
}
