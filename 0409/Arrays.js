// 131. Collections: Working with Javascript Arrays

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// 배열의 이름을 입력하면 배열 안의 항목이 전부 출력된다.
console.log(alphabet);

// array.length()는 배열의 길이를 반환한다.
console.log("length : " + alphabet.length);

// array.includes()는 배열에 해당 항목이 있는지 찾아서 boolean으로 반환한다.
console.log(alphabet.includes('d'));

// 💭 Exercise : 프롬프트로 사람 이름을 입력 받아 해당 이름이 배열에 포함되어 있는지 확인

var guestList = ['hyun', 'james', 'mark', 'brendan'];
// var visitorName = prompt("what's your name?");
var visitorName = 'hyun';

if(guestList.includes(visitorName)) {
    console.log("Welcome!");
} else {
    console.log('not allowed');
}