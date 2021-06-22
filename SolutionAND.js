/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  // 1. Extract the positive integers into an new string
    const numbersString = input.replace(/\D/g, '');
  // 2. Split the string into an array of integers e.g. [1, 2]
    const numbersArray = Array.from(String(numbersString), Number);
  // 3. Heap's Algorithm to find all permutations e.g. [[1, 2] [2, 1]]
     if (input.match(/\d+/g)) {

    const output = [];

    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };

    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }

      generate(n - 1, heapArr);

      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }

        generate(n - 1, heapArr);
      }
    };

    generate(numbersArray.length, numbersArray.slice());
  // 4. Make the arrays of arrays into an array of integers
    const outputIntegers = output.map(element => element.join('')).map(Number);
  // 5. Sort the array in descending order
    return outputIntegers.sort((a,b)=>b-a)
  // 6. Add error message if no integers where found in the user input
    } else {
    return "error - your input contains no integers, please try again";
  }
}
// Test inputs and outputs
// console.log(solution('236'));    [632, 623, 362, 326, 263, 236]
// console.log(solution('A 3B2 C6D'));   [632, 623, 362, 326, 263, 236]
// console.log(solution('ABC'));    "error - your input contains no integers, please try again"

//Time complexity for Heaps Algorithm is O (n!)
