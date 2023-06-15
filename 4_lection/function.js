// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

function square(num1) {
  const result = num1 ** 2;
  return result;
}

// const x = 5;
// const y = 20;

// const sumResult = add(x, y);
// const squareResult = square(5);

// const array = [1, 2, 3, 4];

// const squareArray = array.map(function (number) {
//   return square(number);
// });

// console.log(squareArray);

// const arrowSquare = (num1) => {
//   const result = num1 ** 2;
//   return result;
// };

// const arrowSquareArray = array.map(() => arrowSquare(number));

const arrowSquare = (num1) => num1 ** 2;

const sum = (num1, num2) => {
  const result = num1 + num2;

  return result;
};

console.log(arrowSquare(5));
