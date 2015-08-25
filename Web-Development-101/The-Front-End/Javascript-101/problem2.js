// Problem 2. By considering the terms in the Fibonacci
// sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

var a = 0;
var b = 1;
var sum = 0;

while( a < 4000000) {
    
    if( a % 2 === 0){
        sum += a;
    }
    var c = a + b;
    a = b;
    b = c;
}

console.log(sum); // Result: 4613732