// Promise
// js의 object
// Promise에는 3가지 상태가 있다.
// pending : 초기 상태, 어느 상태도 아님
// fulfilled : 처리가 성공하여 완료
// rejected : 처리가 실패한 것을 의미

const fakeRequest = (url) => {
  // 매개변수 이름은 뭐든 상관없지만 
  // 보편적으로 resolve와 reject가 사용된다.
  return new Promise((resolve, reject) => {
// 성공하였을 시에는 resolve 함수,
// 실패하였을 시에는 reject 함수가 호출됩니당.
    const ranVal = Math.random();
    setTimeout(() => {
      if(ranVal < 0.7) {
        resolve('dummy data');
        // 혹시 모르는 경우를 대비해서 if~else를 사용하거나
        // resolve의 뒤에 리턴을 하는 것이 좋다
      } else {
        reject('connection timeout');
      }
      
    }, 1000)
  });
}

fakeRequest('https://johyeonjun39.github.io')
  .then(() => {
    console.log("success");
    console.log(data);
  })
  .catch((err) => {
    console.log("error !")
    console.log(err);
  })
