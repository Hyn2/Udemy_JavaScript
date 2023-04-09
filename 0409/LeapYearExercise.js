// 윤년 계산
// 연도 / 4가 나누어지고, 100으로 나누어지지 않으면 윤년
// 4로 나누어지고 100으로 나누어져도 400으로 나누어지면 윤년


function isLeap(year) {
/**************Don't change the code above****************/    
        
  //Write your code here.    
if(year % 4 == 0) {
	if(year % 100 != 0) {
		console.log('Leap year.');
	} else {
		if(year % 400 == 0) {
			console.log('Leaf year.');
		} else {
			console.log('Not leaf year.');
		}
	}
} else {
	console.log('Not leap year.');
}
/**************Don't change the code below****************/    
}

isLeap(2020);