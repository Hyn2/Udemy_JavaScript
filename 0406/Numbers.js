// 113. Basic Arithmetic and the Modulo Operator in Javascript
var num;
// addition
num = 2 + 3; // 5
// Subtraction
num = 10 - 2; // 8
// multiplication
num = 5 * 2; // 10
// division
num = 6 / 3; // 2
// Modulo
num = 9 % 6; // 3

// 연산자 우선순위
var cost = 3 + 5 * 2;
// 위 경우에는 연산자의 우선순위에 의해 당연히 결과 값은 13이 나오겠지만,
// 연산자의 우선순위를 알고 있더라도 코드의 가독성을 위해 괄호를 포함시키는 것이 좋다.
// 아래와 같이
cost = 3 + (5 * 2);

// 💭 Exercise : 개와 인간의 나이 변환기
// 계산식 : humanAge = (dogAge - 2) * 4 + 21
var humanAge, 
    dogAge;

dogAge = 7;

humanAge = ((dogAge - 2) * 4) + 21; // 코드의 가독성을 위해 괄호
console.log(humanAge);

// 114. Increment and Decrement Expressions
// Increment 
var x = 5;
x = x + 1; // 6
x++; // 6

// x = x + 1 과 x++ 는 같은 계산식이다
// 또한 x = x - 1 과 x-- 는 같은 계산식
// 위 두가지 계산식은 무조건 +1을 하기에 +2...+n을 해야할 경우가 있다면

x = 5;
x += 2;
console.log(x); // 7

// x+=n 으로 사용하면 된다.
// x = x + n과 같은 식으로 모든 사칙연산에 동일하게 적용된다.
// +=, -=, /=, *=

// 강의에는 왜 없는지 모르겠는데..
// ++x와 x++는 명백히 차이가 있다.
// ++x의 경우에는 먼저 x의 값을 증가시킨 후에 연산을 진행하고
// x++의 경우에는 연산을 진행하고 x의 값을 증가시킨다.
// ++ 혹은 -- 가 앞에 있으면 먼저 증감,
// 뒤에 있으면 연산 후에 증감 :)



