const { RESET, COUNT, COUNT_PARAM } = require('../actions/actionTypes');

const initialState = {
  counter: 1
};

export default function countReducer (state = initialState, action) {
  switch (action.type) {
    case COUNT:
      return {
        ...state,
        counter: state.counter+1
      }
    case RESET:
      return {
        ...state,
        counter: 0
      }
    case COUNT_PARAM:
      return {
        ...state,
        counter: state.counter + parseInt(action.number)
      }
    default:
      return state;
  }
}
