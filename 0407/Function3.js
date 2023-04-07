// 121. Functions Part 3: Outputs & Return Values

// 값을 출력하는 함수
// return 값을 가진 함수를 호출하면 함수 내부의 작업이 끝나고 return 값을 반환한다.
// return 값을 이용하여 새로운 변수에 할당하는 등 다양한 작업을 할 수 있다.

// 💭 Exercise : 현재 가진 돈을 입력 받아서 우유 몇 병을 살 수 있는지 계산하고,
// 거슬러 받는 잔돈을 계산하여 출력하기

var money = 10;
var milk = 1.5;



// 현재 가진 금액과 우유의 가격을 매개변수로 받아서 계산한다.
function calcBottles(money, milk) {
    var calc = Math.floor(money / milk); // calc에 저장되는 값은 내림한다.
    return calc;
}

var numberOfBottle = calcBottles(money, milk);
// return값은 변수 numberOfBottle에 저장된다.

// 현재 가진 돈과 구매 가능한 우유의 개수를 매개변수로 받아 잔돈을 계산한다
// 계산식 : 현재 가진 돈 - (우유의 가격 * 구매 가능한 우유의 개수)
function calcChange(money, numberOfBottle) {
    var change = money - (milk * numberOfBottle); 
    return change; 
}

// 그리고 현재 가진 돈을 의미하는 money 변수에 잔돈을 저장한다.
money = calcChange(money, numberOfBottle);

console.log("You can buy " + numberOfBottle + " of Bottles.");
console.log("change is " + money);

