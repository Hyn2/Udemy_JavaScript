// 145. The Separation of Concerns: Structure vs Style vs Behaviour

// 사이트의 유지보수를 위해 HTML CSS JS의 코드들은 각자의 역할에 맞게 잘 분리되어있는 것이 좋다.
// 그렇기에 앞에서 배운 스타일 속성을 직접 자바스크립트 문서에서 적용하는 것이 아니라
// 자바스크립트의 메서드를 이용하여 스타일을 적용하는 것이 유지보수에 큰 도움이 된다.
document.querySelector("h1").classList.add("setDark");

// 위와 같이 h1 태그의 classList에 add 메서드로
// "setDark" 클래스를 추가하고, 필요 시에 해당 코드를 사용함으로써 각 문서의 기능에 충실할 수 있다.

document.querySelector("h1").classList.remove("setDark");
// 만약 위 클래스가 필요없게되면 remove 메서드를 통해 지우면 된다.

document.querySelector("h1").classList.toggle("setDark");
// toggle 메서드는 문자열에 해당하는 클래스가 이미 적용되어 있으면 제거하고, 없으면 적용한다.

//