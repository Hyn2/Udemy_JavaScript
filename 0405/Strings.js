// 109. String Lengths & 
// Retrieving the Number of Characters
var myName = "hyun";
console.log("Length of myName is : " + myName.length);

// 💭 Exercise : 포스트에 작성할 수 있는 글자 수를 출력하게 하기
var limitOfLength = 180; // 포스트 제한 글자 수
var textOfArticle = "asdfasdfasdf"; // 작성한 텍스트
var remain = limitOfLength - textOfArticle.length; // 작성 가능한 남은 글자 수
console.log("You have written " + textOfArticle.length + ", you have " + remain + " characters left.");


// 110. Slicing & Extracting parts of a String

var modelOfGuitar = "PRS Sliver Sky";
// String.slice(x,y) -->
// String의 x자리부터 y글자
// 0부터 시작 , 예를 들어 modelOfGuitar에서 "P"만 잘라내고 싶다면
// modelOfGuitar.slice(0,1);
console.log(modelOfGuitar.slice(0,3));