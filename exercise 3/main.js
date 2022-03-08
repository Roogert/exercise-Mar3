//Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

//product([[1,2],[1,1],[2,3]])    ➞    9
// 1 * 2 + 1 * 1 + 2 * 3

//product([[10,2],[5,0],[2,3]])    ➞    26
// 10 * 2 + 5 * 0 + 2 * 3

//product([[1,2],[2,3],[3,4]])   ➞    20
// 1 * 2 + 2 * 3 + 3 * 4

//product([[1,2],[0,3],[3,0]])    ➞    2
// 1 * 2 + 0 * 3 + 3 * 0

const myProduct = getSum([
  [1, 2],
  [1, 1],
  [2, 3],
]);

// function getSum(nestedArr){
//     const productOne = nestedArr[0][0] * nestedArr[0][1];
//     const productTwo = nestedArr[1][0] * nestedArr[1][1];
//     const productThree = nestedArr[2][0] * nestedArr[2][1];
//     return productOne + productTwo + productThree;
// }
// console.log(myProduct);

function getSumTwo(nestedArrTwo) {
  let sumOfProducts = 0;
  nestedArrTwo.forEach((arr) => {
    //   sumOfProducts = (arr[0] * arr[1]) + sumOfProducts
    sumOfProducts += arr[0] * arr[1];
  });
  return sumOfProducts;
}

// First Iteration
// sumOfProducts = (1*2) + 0
// sumOfProducts = 2
// Second Iteration
// sumOfProducts = (1 * 1) + 2 
// sumOfProducts = 3 
// Third Iteration 
// sumOfProducts = (2 * 3) + 3 
// sumOfProducts = 9

let total = getSumTwo(myProduct) // returns 9
console.log(total)
