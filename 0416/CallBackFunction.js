// addEventListener를 이해하기 위해 간략히 작성한 코드

function newAddEventListener(eventType, callback) {
  // 이벤트를 기다림

  // 이벤트가 발생하면 이벤트의 정보를 담은 객체를 생성
  let eventThatHappened = {
    eventType : "click",
    durationOfClick : 2
  }

  // 만약 객체의 이벤트 타입과 이벤트리스너의 이벤트 타입이 같다면 매개변수로 객체를 넘김
  if(eventThatHappened.eventType == eventType) {
    callback(eventThatHappened);
  }
}

// 출력으로 객체의 정보가 나옴
newAddEventListener("click", function(event) { console.log(event) });

