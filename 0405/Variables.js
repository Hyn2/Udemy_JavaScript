// 104. JavaScript Variables
var myName = "Hyun";
// var == variable
console.log(myName);


// 105. Exercise
function test() {
    var a = "3";
    var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var tmp = a;
    // tmp변수를 선언해서 a의 값을 tmp라는 변수에 담는다.
    a = b;
    // b의 값을 a에 담는다.
    b = tmp;
    // tmp에 저장해둔 원래 a의 값 '3'을 b에 담는다.
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

test();

// 107. Naming Conventions for JavaScript Variables
// 변수에는 항상 의미있는 이름을 붙여야 합니다.
// 1. 직관적인 변수명
//    변수명을 보고 이것이 어떠한 값을 가지고 있는지 알아볼 수 있도록
// 2. 숫자로 시작할 수 없음
//    변수명은 숫자로 시작할 수 없다. 다만 숫자를 '포함'할 수는 있음
//    ex) var 123      = 999; --> Not Allowed
//        var myVar123 = 999; --> OK!
// 3. 공백을 포함할 수 없음
//    ex) var my Name = "Hyun"; --> Not Allowed
//        var myName  = "Hyun"; --> OK!
// 4. 변수명은 숫자, 글자, $, _ 만 포함 가능함
// 5. 변수명의 시작은 소문자, 그 다음 모든 단어는 대문자(Camel Casing)
//    ex) var setMyName = "Hyun";