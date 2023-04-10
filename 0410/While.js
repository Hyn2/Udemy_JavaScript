// 134. Control Statements : While Loops

// while(condition) {
//
//}

// while문은 괄호 안의 조건식이 참인 동안 while문 안의 코드를 계속 반복한다.
// 예시

var count = 0;
while(count < 10) {
    console.log(count);
    count++;
}
// 위 예시는 count가 10보다 작은 동안 count를 계속 출력하고 1씩 증가시킨다.
// 만약 count++;이 없다면, while문은 계속 반복된다.
// 그렇기에 오류가 생길 가능성 또한 크며, 이점을 유의해야한다.