// 144. Manipulating and Changing Styles of HTML Elements with Javascript

// CSS와 JS에서의 속성 이름은 다를 수 있다.
// 자바스크립트에서의 CSS 속성은 카멜표기법으로 작성되어있다.
// 예를 들어 글자 크기를 변경하려면 font-size가 아닌
// document.querySelector("h1").style.font-size = "10000px";
// 아래와 같이 작성되어야 한다.
document.querySelector("h1").style.fontSize = "1000px";

// 또한 = 뒤에 설정해야하는 값은 문자열로 와야한다.
// CSS에서는 padding : 10px 와 같이 설정하였지만 JS에서는
document.querySelector("h1").style.padding = "10px";
// 위와 같이 작성되어야한다.