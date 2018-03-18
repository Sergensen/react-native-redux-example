const { ADD, SUB, MUL, DIV, TYPE } = require('./actionTypes');


export function add() {
  return {
    type: ADD
  };
}

export function sub() {
  return {
    type: SUB
  };
}

export function mul() {
  return {
    type: MUL
  };
}

export function div() {
  return {
    type: DIV
  };
}

export function type(value) {
  return {
    type: TYPE,
    value
  };
}
