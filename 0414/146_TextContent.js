// 146. Text Manipulation and the Text Content Property
  
// <innerHTML>
document.querySelector("h1").innerHTML;
// 위와 같은 코드를 작성하면 h1 태그 내부의 모든 요소에 대해서 반환한다.
// 만약 h1 태그 내부에 또 다른 태그가 있다면 그 태그도 같이 반환한다.
document.querySelector("h1").innerHTML = "<em>HELLO<em>";
// 그 특성을 이용하여 위와같이 내부에 태그를 추가할 수도 있다.

// <textContent>
document.querySelector("h1").textContent;
// innerHTML 태그와 다르게 내부에 다른 태그가 있더라도,
// 선택한 html 태그 내부의 텍스트 요소에 대해서만 반환한다. 