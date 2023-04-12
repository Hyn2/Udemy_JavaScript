// 137. Introducing the Fibonacci Code Challenge

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    //Write your code here:
    var fibonacci = [];
    for(var i = 0; i < n; i++) {
        if(i == 0 || i == 1) {
            fibonacci.push(i);
        } else {
            fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        }

    }
    return fibonacci;
    //Return an array of fibonacci numbers starting from 0.
    //Do NOT change any of the code below 👇
    }