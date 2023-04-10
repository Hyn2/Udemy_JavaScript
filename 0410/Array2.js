// 132. Adding Elements and Intermediate Array Techniques

var output = [];
// array.push() 함수는 배열의 끝자리에 새로운 요소를 추가하는 함수이다.
// 만약 빈 배열인 output 배열에 아래와 같은 코드를 작성하면,
output.push(1);
// 배열의 출력 결과는 1일것이다.
console.log(output);
// array.pop() 함수는 배열의 마지막 항목을 제거한다.
output.pop();
// 배열의 출력 결과는 아무 것도 없을 것이다. 
console.log(output);


// 💭 Exercise : 함수를 호출할 때마다 1,2,3,4,5 ... 순서대로 배열에 숫자를 추가한다.
var num = 1;
function fizzBuzz() {
    output.push(num);
    console.log(output);
    num++;
}

// 💭 Exercise : 'fizzBuzzGame'
// fizzBuzzGame()를 실행시 배열에 1,2,3,4,5... 순서로 숫자를 추가한다.
// Rule1 : 3으로 나누어지면 배열에 숫자대신 Fizz를 추가
// Rule2 : 5로 나누어지면 배열에 숫자대신 Buzz를 추가
// Rule3 : 3과 5로 둘 다 나누어지면 배열에 숫자대신 FizzBuzz를 추가

var count = 1;
function fizzBuzzGame() {
    if(count % 3 == 0 && count % 5 == 0) {
        output.push('FizzBuzz');
    } else if(count % 5 == 0) {
        output.push('Buzz');
    } else if(count % 3 == 0) {
        output.push('Fizz');
    } else {
        output.push(count);
    }
    console.log(output);
    count++;
}

fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();
fizzBuzzGame();



