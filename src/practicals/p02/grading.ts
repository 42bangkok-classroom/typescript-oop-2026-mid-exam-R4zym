// Write your code below

const arg1: string = process.argv[2];
const grading: number = Number(arg1);

if (isNaN(grading) || arg1 == undefined || arg1 == null || !arg1 || grading < 0 || grading > 100 || isNaN(grading) === false) {
    console.log("Invalid input");
} else if (grading >= 0 && grading < 50) {
    console.log("Grade is F");
} else if (grading >= 50 && grading < 60) {
    console.log("Grade is D");
} else if (grading >= 60 && grading < 70) {
    console.log("Grade is C");
} else if (grading >= 70 && grading < 80) {
    console.log("Grade is B");
} else {
    console.log("Grade is A");
}