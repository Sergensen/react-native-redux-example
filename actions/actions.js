const { ADD, SUB, MUL, DIV, TYPE, RES, CLEAR } = require('./actionTypes');


export function add() {
  return {
    type: ADD
  };
}

export function clear() {
  return {
    type: CLEAR
  };
}

export function sub() {
  return {
    type: SUB
  };
}

export function res() {
  return {
    type: RES
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
