// 자바스크립트 비동기
// コールスタック
// 마지막에 들어간 것이 처음으로 나오는 것
// LIFO = Last In First Out
// 구조 : 어떤 함수를 불렀을 때 인터프리터는 그 함수를 콜스택에 추가하여 함수를 실행한다.
// 그 함수로부터 호출된 함수도 콜스택의 위에 추가되어 먼저 실행된다.
// 현재의 실행 중인 함수가 종료되면, 인터프리터는 스택에서 그 함수를 제거하고, 코드를 실행한다.

const multifly = (x,y) => x * y;
const square = x => multifly(x, x);
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5); 
