// addEventListener는 지정한 이벤트를 대상이 수신할 때마다 호출할 함수를 정함.
// 첫 번째 매개변수는 이벤트 유형을 지정, 두 번째 매개변수는 이벤트 발생 시 호출할 함수
// 함수에 괄호를 빼고 선언하는데, 이는 이벤트가 발생했을 때 함수를 실행시키기 위함,
// 괄호를 넣으면 이벤트 리스너 코드를 읽음과 동시에 바로 실행이 되어버리기 때문
let button = document.querySelectorAll("button");
for(let i in button) {
  button[i].addEventListener("click", function() { alert("Clicked") });
}
// 익명함수를 이용
// 함수를 따로 선언하는 것보다 코드가 간결해진다
// document.querySelector("button").addEventListener("click", function () { alert("i got clicked") });