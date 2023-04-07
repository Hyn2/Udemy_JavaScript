// 119. Functions Part 2: Parameters  and Arguments
// Arguments
// 만약 우유의 가격을 계산하는 함수를 만든다면..
// bottles는 몇 병을 구매하였는지 받는 입력값이 되고,
// price는 우유의 가격
// cost는 최종 가격을 계산한다.
function getMilk (bottles) {
    let price = 1.5;
    var cost = bottles * price;
    console.log(cost);
}

getMilk(2);

// 위 코드를 조금 변형하여 일정 금액을 인풋하고
// 우유를 몇 개나 구매할 수 있는지 계산하는 코드로 변형
function buyMilk(money) {
    let priceOfMilk = 1.5;
    // Math.floor(number);
    // 위 함수는 number에 해당하는 숫자를 내림하는 함수,
    // 올림하는 함수도 있음 Math.ceil(number);
    var cost = Math.floor(money / priceOfMilk);
    var costCeil = Math.ceil(money / priceOfMilk);
    console.log(cost);
    console.log(costCeil);
    // 현재 예제에서는 내림은 사용하는게 가장 적절하다.
    // 만원으로 1500원짜리 우유를 7개 살 수는 없으니까 ㅎㅅㅎ

}

buyMilk(10); 