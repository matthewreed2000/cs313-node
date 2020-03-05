'use strict'

function computeFromQueries(query) {
  if (query) {
    if ((typeof query.num1 !== 'undefined')
      && (typeof query.num2 !== 'undefined')
      && (typeof query.operation !== 'undefined')) {
      switch (query.operation) {
        case 'add':
          return addNums(query.num1, query.num2);
          break;
        case 'sub':
          return subtractNums(query.num1, query.num2);
          break;
        case 'mul':
          return multiplyNums(query.num1, query.num2);
          break;
        case 'div':
          return divideNums(query.num1, query.num2);
          break;
        default:
          return getInvalid();
      }
    } else { return getInvalid(); }
  } else { return getInvalid(); }
}

function getOperationSymbol(operation) {
  switch (operation) {
    case 'add':
      return '+';
      break;
    case 'sub':
      return '-';
      break;
    case 'mul':
      return '*';
      break;
    case 'div':
      return '/';
      break;
  }

  return 'does something with';
}

function getInvalid() {
  return 'Invalid';
}

function addNums(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  }

  return getInvalid();
}

function subtractNums(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 - num2;
  }

  return getInvalid();
}

function multiplyNums(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 * num2;
  }

  return getInvalid();
}

function divideNums(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    if (num2 != 0) {
      return num1 / num2;
    }
    else {
      return 'Dividing by 0 is not defined';
    }
  }

  return getInvalid();
}

module.exports = {
  computeFromQueries: computeFromQueries,
  getOperationSymbol: getOperationSymbol
};