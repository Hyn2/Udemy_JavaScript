//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// Math.pow() 함수는 제곱하는 함수
// 첫번째 매개변수는 제곱을 할 값, 두번째 매개변수는 지수
function bmiCalculator(weight, height) {
    return weight / (Math.pow(height, 2));
}

var bmi = bmiCalculator(65, 1.8);

// Math.round()는 반올림 함수이당
console.log(Math.round(bmi));
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/