// Write your code below

const arg3: string = process.argv[2];
const num1: number = Number(arg3);


let n1 = "";
if (num1 < 1 || isNaN(num1) || arg3 == undefined || arg3 == null || !arg3 || isNaN(num1) === false) {}
for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= (num1-i); j++) {
        n1 += " ";
    }

    for (let k = i ; k > 0; k -= 1) {
        n1 += k;
    }
    n1 += "\n";
    console.log(n1)
}




