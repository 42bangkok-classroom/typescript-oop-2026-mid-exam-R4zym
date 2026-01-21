export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  
  const merged = [...arr1, ... arr2]
  let b: number[];
  for (let i = 0; i <= merged.length; i++) {
    if (b.indexOf(merged[i])) {
      b.push(merged[i]);
    }
  }
  console.log(b);
  return b;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];