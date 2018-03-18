const { RESET, COUNT, COUNT_PARAM } = require('./actionTypes');


export function count() {
  return {
    type: COUNT
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function countParam(number) {
  return {
    type: COUNT_PARAM,
    number
  };
}
