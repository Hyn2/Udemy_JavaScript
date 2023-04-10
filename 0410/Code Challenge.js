function whosPaying(names) {
    /******Don't change the code above*******/
    // Write your code here.
    // You are going to write a function which will select a random name from a list of names.
    // The person selected will have to pay for everybody's food bill.
    // 인자값으로 받은 요소들을 nameList 배열에 저장
    var nameList = names;
    // 배열의 인덱스는 배열길이 -1 이기에,
    // Math.random 함수는  0~ 0.99...까지의 값 중 랜덤으로 가져오기에
    // 해당 함수에 배열 길이를 곱하고 내림을 하면 (배열 길이 - 1)까지의 값이 나온다.
    var numberOfPeople = nameList.length; // 매번 length로 불러오는 것 보다 이게 조금 더 효율적이지 않을까..
    var randomValue = Math.floor((Math.random() * nameList.length));
    console.log(randomValue);
    return nameList[randomValue] + ' is going to buy lunch today!';
    
    /******Don't change the code below*******/    
}
// 인자값으로 배열의 요소들을 한번에 받을 수 있다는 걸 처음 알았당
