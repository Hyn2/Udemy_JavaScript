// 112. Challange : Changing String Casing Solution
// 💭 Exercise : 사용자가 이름을 입력하면 이름의 첫 글자만 대문자로 출력,
// 나머지는 소문자로 출력되게 변경
// 그리고 "Hello, 입력값"으로 출력
// 원래는 프롬프트지만 vscode를 사용하고 있어서 변수로 대체
var myName = "hYUN";	// 사용자의 입력 값
var myNameFirstChar = myName.slice(0, 1).toUpperCase();
var restOfName = myName.slice(1,myName.length).toLowerCase();
var print = "Hello, " + myNameFirstChar + restOfName;
console.log(print);



