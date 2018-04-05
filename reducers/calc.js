const { DOT, ADD, SUB, MUL, DIV, TYPE, RES, CLEAR, NEG, PRO, MOD } = require('../actions/actionTypes');

const initialState = {
  result: 0,
  input: 0,
  last: false,
  dot: false,
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
        clear: true,
        dot: false
      }
    case SUB:
      return {
        ...state,
        result: callLastCalculation(state),
        dot: false,
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
    case NEG:
      return {
        ...state,
        input: state.input*(-1),
        last: false
      }
    case MOD:
      return {
        ...state,
        result: callLastCalculation(state),
        input: 0,
        last: MOD,
        clear: true,
        dot: false
      }
    case PRO:
      return {
        ...state,
        result: state.result/100,
        last: false
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
            input: state.input*10+typed,
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
        dot: false,
        clear: true
      }
    case RES:
      return {
        ...state,
        input: 0,
        dot: false,
        clear: true,
        result: callLastCalculation(state)
      }
    default:
      return state;
  }
}

const callLastCalculation = (state) => {
  const { last, clear } = state;
  const result = parseFloat(state.result);
  const input = parseFloat(state.input);
  switch (last) {
    case ADD:
       return result+input;
    case SUB:
      return result-input;
    case MUL:
      return (input!==0||!clear)?result*input:result;
    case DIV:
      return (input!==0||!clear)?result/input:result;
    case MOD:
      return (input!==0||!clear)?result%input:result;
    default:
      return 0+input;
  }
}
