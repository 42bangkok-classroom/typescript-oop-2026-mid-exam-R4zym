// Write your code below

const arg2: string = process.argv[2];
const N: number = Number(arg2);

if (isNaN(N) || arg2 == undefined || arg2 == null || !arg2 || N < 0 || isNaN(N) === false) {

} 

console.log(N)

for (let i = 0; i < N + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}