const { DOT, ADD, SUB, MUL, DIV, TYPE, RES, CLEAR, NEG, PRO, MOD } = require('./actionTypes');


export function add() {
  return {
    type: ADD
  };
}
export function neg() {
  return {
    type: NEG
  };
}
export function pro() {
  return {
    type: PRO
  };
}
export function mod() {
  return {
    type: MOD
  };
}

export function clear() {
  return {
    type: CLEAR
  };
}
export function dot() {
  return {
    type: DOT
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
