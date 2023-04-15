// 147. Manipulating HTML Element Attributes

// Attribute : 속성
// 아래의 예제 코드에서의 속성은 id, href 등이 된다.
/* <h1 id="title">HELLO</h1>
<href="www.naver.com">NAVER</p> */

// 요소에 있는 속성 목록을 얻으려면 아래 코드로 얻을 수 있다.
document.querySelector("h1").attributes;
// 선택된 태그에 포함되어있는 모든 속성을 가져온다.

// 만약 하나의 속성만 가져올거라면
document.querySelector("h1").getAttribute["id"];
// 같은 식으로 원하는 특성의 이름을 명시해주어야한다.

// 또한 속성을 재정의하고 싶다면,
document.querySelector("h1").setAttribute["id", "name"];
// setArtribute를 사용하면된다.
// 첫 번째 매개변수는 어떤 속성를 선택할 것인지, 두 번째 매개변수는 내용을 어떻게 바꿀것인지 작성하면 된다.

