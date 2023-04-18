// async
// 이 함수는 무조건 Promise를 반환한다.
// 함수가 값을 반환하면 Promise는 그 값을 resolve한다.
// 함수가 에러를 throw하면, Promise는 그 에러를 reject한다.
// 예)
const login = async (username, password) => {
  // code
}

// await
// await은 async 함수 안에만 사용할 수 있다.
// await는 promise가 resolve, reject 할때까지
// async 함수의 실행을 잠시 중지시킨다.

  const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (4500)) + 500;
      setTimeout(() => {
        if (delay > 4000) {
          reject('Connection Timeout');
        } else {
          resolve('DummyData');
        }
      }, delay)
    })
  }

  async function makeRequest() {
    try {
      const data = await fakeRequest('/hoge');
      console.log(`data1 : ${data}`);
      const data2 = await fakeRequest('/hoge');
      console.log(`data2 : ${data2}`);
    } catch(e) {
      console.log(`Err : ${e}`);
    }

  }
  makeRequest();