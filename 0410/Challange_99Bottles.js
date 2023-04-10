// while문을 이용한 간단한 예제

var numberOfBottles = 99;
while(numberOfBottles >= 0) {
    var word = 'bottles';
    if(numberOfBottles > 1) {
        console.log(numberOfBottles+ ' ' + word + ' of beer in the wall');
    } else if(numberOfBottles == 1) {
        word = 'bottle'
        console.log(numberOfBottles+ ' ' + word + ' of beer in the wall');
    } else if(numberOfBottles == 0) {
        console.log('No more bottles of beer on the wall');
    }
    numberOfBottles--;
}