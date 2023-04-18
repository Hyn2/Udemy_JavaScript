// Promise
// js의 object
// Promise에는 3가지 상태가 있다.
// pending : 초기 상태, 어느 상태도 아님
// fulfilled : 처리가 성공하여 완료
// rejected : 처리가 실패한 것을 의미

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
// 성공하였을 시에는 resolve 함수,
// 실패하였을 시에는 reject 함수가 호출됩니당.
  });
}