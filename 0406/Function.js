// 115. Functions Part 1: Creating and Calling Functions
// 함수 코드의 반복을 줄이기 위해서 사용
// 같은 로직을 가진 코드를 여러번 사용해야 할 때,
// 이것을 함수로 선언하여 필요 시 불러쓰는 것이 좋음

// function name() { ... code ... }
var myName = "Hyun";

// 호출하면 변수 myName을 3회 출력하는 함수를 생성
function myNameThreeTimes() {
    console.log(myName);
    console.log(myName);
    console.log(myName);
}

myNameThreeTimes();
