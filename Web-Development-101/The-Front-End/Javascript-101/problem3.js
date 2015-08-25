// Largest prime factor, Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function getMaxPrimeFactor (n) {
	var temp = n;
	for(var i = 2; i < temp; i++) {
		while (temp % i === 0) {
			temp /= i;
		}
	}	
	console.log(temp);
}

getMaxPrimeFactor(600851475143); // Result: 6857