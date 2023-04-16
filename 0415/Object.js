let student = {
  name : 'hyun',
  age : 22,
  gender : 'male'
};
// 일반적인 객체를 생성하는 방법이지만, 만약 이러면 동일한 property, method를 가진
// 객체를 생성할 때 비효율적으로 코드가 길어진다.

// 그렇기에 생성자 함수를 이용하면 공장처럼 동일한 property와
// method를 가진 객체를 찍어낼 수 있다.

function Student(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let std = new Student('hyun', 13, 'male');
let std2 = new Student('kim', 12, 'male');

console.log(std.age);
console.log(std2.age);