// 163. Higher Order Functions and Passing Functions as Arguments

// 고차함수의 특징 : 
// 1. 함수를 리턴하는 함수
// 2. 함수를 인자로 받는 함수

// 콜백 함수 : 다른 함수(caller)의 인자로 전달되는 함수를 콜백함수라고 한다.

// 계산기 만들기

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
function substract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function remain(firstNum, secondNum) {
  return firstNum % secondNum;
}
function calculator(firstNum, secondNum, operator) {
  return operator(firstNum, secondNum);
}

console.log(calculator(4,2,add));
console.log(calculator(4,2,substract));
console.log(calculator(4,2,divide));
console.log(calculator(4,2,multiply));
console.log(calculator(4,2,remain));