// 111. Changing Casing in Text
var myName = "HyunKim";
console.log(myName.toUpperCase());
// 위와 같이 출력하여도 변수 myName의 원문이 변경되는 것이 아니라,
// 출력이 완료되고 데이터는 소실된다.
console.log(myName);
// 이럴 때는 그 값을 다른 변수를 선언하여 대입하면 됩니다.
var myNameUpperCase = myName.toUpperCase();
console.log(myNameUpperCase);
// 만약 대문자가 아닌 소문자로 만들고 싶을 때는?
var myNameLowerCase = myName.toLowerCase();
console.log(myNameLowerCase);



