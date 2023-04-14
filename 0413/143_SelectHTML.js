// 143. Selecting HTML Elements with Javascript

// <태그명으로 선택하기>
document.getElementsByTagName("h1");
// h1 태그 이름을 가진 모든 요소들을 불러옴.

// 여러가지 요소들을 배열로 반환하기에 
// 만약 세번째 요소를 선택하려고 하면 뒤에 [2]를 추가하면 됨.
document.getElementsByTagName("h1")[2];

// 배열이기에 h1 태그를 가진 요소들이 몇개인가 알고 싶으면 .length를 사용하면 됨
document.getElementsByTagName("h1").length;


// <클래스명으로 선택하기>
document.getElementsByClassName("main");
// 클래스명이 main인 모든 요소들을 불러옴.
// 만약 해당하는 요소가 하나여도 배열로 불러오기에
document.getElementsByClassName("main").style.color = "red";
// 위와 같은 코드는 에러가 발생함, 아래와 같이 작성하는게 올바름
document.getElementsByClassName("main")[0].style.color = "red";


// <ID명으로 선택하기>
document.getElementById("name");
// 다른 메서드들과 다르게 단 하나의 요소만 불러옴
// ID 자체가 하나 이상의 요소에 적용될 수 없기에 배열로 불러오지 않음
document.getElementById("name").style.color = "red";
// 그렇기에 위와 같이 코드를 작성해도 에러가 발생하지 않음


// <querySelector>
document.querySelector("h1");
// ID로 선택하는 것과 같이 단일 요소를 반환하며, 괄호 안 문자열에 해당하는 요소를 찾아 반환함.
// 만약 h1태그가 여러개라면 첫번째 요소를 반환함

// .class #id h1 과 같이 클래스, ID, 태그로 선택 가능함
document.querySelector(".main a"); 


// <querySelectorAll>
document.querySelectorAll("h1");
// querySelector과 비슷하지만 여러개의 태그를 모두 선택하고 싶을 때 사용
// 이 또한 배열로 반환되기에 하나만 선택하고 싶다면 아래와 같이 인덱스를 지정해야함
document.querySelectorAll("h1")[2];

// getElement 메서드들이 할 수 있는 일을 querySelector, querySelectorAll로
// 더 명확하게 지정할 수 있기에 getElement 메서드는 자주 사용하지 않음

